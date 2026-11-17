(() => {
  "use strict";

  const STORAGE_KEY = "synaptia-v1";
  const HINTS = [
    "Vuelve a leer el enunciado y reformúlalo con tus propias palabras. ¿Qué te pide exactamente: explicar, calcular, comparar, justificar o interpretar?",
    "Separa lo que ya sabes de lo que necesitas averiguar. Anota los datos, conceptos o principios que podrían relacionarse con la actividad.",
    "Elige un primer paso pequeño y explica por qué tiene sentido. Antes de avanzar, piensa qué resultado esperarías obtener y cómo podrías comprobarlo."
  ];

  const safeRead = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
        current: parsed.current && typeof parsed.current === "object" ? parsed.current : null
      };
    } catch (error) {
      console.warn("No fue posible leer el progreso local.", error);
      return { sessions: [], current: null };
    }
  };

  const state = safeRead();
  let timerInterval = null;
  let toastTimeout = null;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("No fue posible guardar el progreso local.", error);
      showToast("No se pudo guardar el progreso en este navegador.");
    }
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function dateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function formatDate(value, includeYear = false) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Fecha no disponible";
    return new Intl.DateTimeFormat("es-EC", {
      day: "numeric", month: "long", ...(includeYear ? { year: "numeric" } : {})
    }).format(date);
  }

  function formatShortDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("es-EC", { day: "numeric", month: "short" }).format(date);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function switchView(viewName) {
    const allowed = ["dashboard", "practice", "history", "guide"];
    const view = allowed.includes(viewName) ? viewName : "dashboard";
    $$(".view").forEach(section => section.classList.toggle("active", section.id === "view-" + view));
    $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === view));
    const labels = { dashboard: "Inicio", practice: "Sesión de aprendizaje", history: "Mi progreso", guide: "Uso consciente de IA" };
    const label = $("#page-label");
    if (label) label.textContent = labels[view];
    if (view === "history") renderHistory();
    if (view === "practice" && state.current) renderPractice();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function activeDays() {
    const days = [...new Set(state.sessions.map(item => item.dateKey).filter(Boolean))].sort().reverse();
    if (!days.length) return 0;
    const today = dateKey();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = dateKey(yesterdayDate);
    if (days[0] !== today && days[0] !== yesterday) return 0;
    let count = 0;
    let cursor = new Date(days[0] + "T12:00:00");
    for (const key of days) {
      if (key !== dateKey(cursor)) break;
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }

  function renderDashboard() {
    const totalMinutes = state.sessions.reduce((sum, item) => sum + (Number(item.minutes) || 0), 0);
    $("#stat-sessions").textContent = state.sessions.length;
    $("#stat-minutes").innerHTML = totalMinutes + ' <small>min</small>';
    $("#stat-days").innerHTML = activeDays() + ' <small>días</small>';

    const recent = $("#recent-session");
    const latest = state.sessions[0];
    if (latest) {
      recent.classList.remove("empty-recent");
      recent.innerHTML = '<span class="recent-empty-icon">✦</span><div><strong>' +
        escapeHTML(latest.subject || "Sesión de aprendizaje") + '</strong><p>' +
        escapeHTML(latest.task.length > 105 ? latest.task.slice(0, 105) + "…" : latest.task) +
        ' · ' + escapeHTML(formatShortDate(latest.completedAt)) + '</p></div>';
    } else {
      recent.classList.add("empty-recent");
      recent.innerHTML = '<span class="recent-empty-icon">◷</span><div><strong>Tu recorrido comienza aquí</strong><p>Cuando completes tu primera sesión, encontrarás su resumen en este espacio.</p></div>';
    }
  }

  function updateTimer() {
    const element = $("#elapsed-time");
    if (!element || !state.current) return;
    const seconds = Math.max(0, Math.floor((Date.now() - state.current.startedAt) / 1000));
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const remainder = String(seconds % 60).padStart(2, "0");
    element.textContent = minutes + ":" + remainder;
  }

  function startTimer() {
    window.clearInterval(timerInterval);
    updateTimer();
    timerInterval = window.setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }

  function renderPractice() {
    const container = $("#practice-content");
    if (!state.current) {
      container.innerHTML = '<div class="panel empty-state"><p>No tienes una sesión activa.</p><button class="button button-primary" data-action="back-to-start">Crear una sesión <span>→</span></button></div>';
      stopTimer();
      return;
    }

    const current = state.current;
    const isReflection = current.stage === "reflection";
    const progress = isReflection ? 66 : 33;
    const subject = current.subject || "Aprendizaje general";

    if (isReflection) {
      container.innerHTML = `
        <div class="practice-layout">
          <section class="practice-main">
            <div class="practice-heading"><div><span class="section-overline">PASO 02 · REFLEXIONAR</span><h2>¿Qué te llevas de esta sesión?</h2></div><span class="timer-chip">◷ <span id="elapsed-time">00:00</span></span></div>
            <p class="practice-copy">Reconocer lo que comprendiste y lo que todavía te cuesta es parte del aprendizaje. No hay respuestas correctas o incorrectas en esta reflexión.</p>
            <div class="task-label">TU ACTIVIDAD · ${escapeHTML(subject.toUpperCase())}</div>
            <div class="task-box">${escapeHTML(current.task)}</div>
            <div class="reflection-grid">
              <div class="reflection-field"><label for="reflection-learned">¿Qué comprendiste mejor?</label><textarea id="reflection-learned" placeholder="Explica con tus propias palabras lo que aprendiste...">${escapeHTML(current.learned || "")}</textarea></div>
              <div class="reflection-field"><label for="reflection-difficult">¿Dónde tuviste más dificultad?</label><textarea id="reflection-difficult" placeholder="Identifica qué parte todavía necesitas practicar...">${escapeHTML(current.difficult || "")}</textarea></div>
              <div class="reflection-field reflection-wide"><label for="reflection-ai">¿Cómo participó la inteligencia artificial en tu proceso?</label><select id="reflection-ai">
                <option value="No la utilicé" ${current.aiUse === "No la utilicé" ? "selected" : ""}>No la utilicé</option>
                <option value="Solo utilicé las pistas de SYNAPTIA" ${current.aiUse === "Solo utilicé las pistas de SYNAPTIA" ? "selected" : ""}>Solo utilicé las pistas de SYNAPTIA</option>
                <option value="La utilicé para aclarar dudas o contrastar ideas" ${current.aiUse === "La utilicé para aclarar dudas o contrastar ideas" ? "selected" : ""}>La utilicé para aclarar dudas o contrastar ideas</option>
                <option value="La utilicé para obtener una respuesta y luego la revisé" ${current.aiUse === "La utilicé para obtener una respuesta y luego la revisé" ? "selected" : ""}>La utilicé para obtener una respuesta y luego la revisé</option>
              </select></div>
            </div>
            <div class="reflection-actions"><button class="button button-outline" data-action="back-to-thinking">Volver a mi intento</button><button class="button button-primary" data-action="finish-session">Completar sesión <span>✓</span></button></div>
          </section>
          <aside class="practice-side">
            <div class="side-mini"><div class="mini-icon">✦</div><h3>La comprensión es tuya</h3><p>Intenta explicar el concepto sin mirar una respuesta externa. Si puedes hacerlo, estás avanzando.</p><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><small class="soft-label">2 de 3 etapas</small></div>
            <div class="side-mini"><div class="mini-icon">↗</div><h3>Un último recordatorio</h3><p>Equivocarte no significa que no aprendiste. Identificar un error te da una nueva oportunidad de comprender.</p></div>
          </aside>
        </div>`;
      startTimer();
      return;
    }

    container.innerHTML = `
      <div class="practice-layout">
        <section class="practice-main">
          <div class="practice-heading"><div><span class="section-overline">PASO 01 · PENSAR POR TU CUENTA</span><h2>Empieza con lo que sabes.</h2></div><span class="timer-chip">◷ <span id="elapsed-time">00:00</span></span></div>
          <p class="practice-copy">Tómate un momento para intentar resolver la actividad. No busques la respuesta perfecta: queremos hacer visible tu razonamiento inicial.</p>
          <div class="task-label">${escapeHTML(subject.toUpperCase())}</div>
          <div class="task-box">${escapeHTML(current.task)}</div>
          <label class="task-label" for="attempt-input">TU PRIMER INTENTO</label>
          <textarea class="practice-textarea" id="attempt-input" placeholder="Escribe lo que piensas, los pasos que intentarías o las dudas que tienes...">${escapeHTML(current.attempt || "")}</textarea>
          <div class="hint-box ${current.hintsShown > 0 ? "visible" : ""}" id="hint-box">
            <div class="hint-top">PISTA ${current.hintsShown} DE 3 · UNA GUÍA, NO LA RESPUESTA</div>
            <p>${current.hintsShown > 0 ? HINTS[current.hintsShown - 1] : ""}</p>
          </div>
          <div class="practice-actions">
            <button class="button button-secondary" data-action="show-hint">Pedir una pista <span>✦</span></button>
            <button class="button button-primary" data-action="to-reflection">Continuar a reflexión <span>→</span></button>
          </div>
        </section>
        <aside class="practice-side">
          <div class="side-mini"><div class="mini-icon">◎</div><h3>Tu objetivo de hoy</h3><p>Participar activamente en la resolución y reconocer qué necesitas reforzar.</p><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><small class="soft-label">1 de 3 etapas</small></div>
          <div class="side-mini"><div class="mini-icon">⌁</div><h3>¿Te quedaste en blanco?</h3><p>Está bien. Escribe qué parte no entiendes o qué información te hace falta. Esa también es una forma de empezar.</p></div>
          <div class="side-mini"><div class="mini-icon">✧</div><h3>Recuerda</h3><p>Las pistas de SYNAPTIA son preguntas generales para activar tu razonamiento; no reemplazan la explicación de tu docente.</p></div>
        </aside>
      </div>`;
    startTimer();
  }

  function createSession(subject, task) {
    state.current = {
      id: "s-" + Date.now(),
      subject: subject.trim(),
      task: task.trim(),
      attempt: "",
      hintsShown: 0,
      stage: "think",
      startedAt: Date.now(),
      dateKey: dateKey(),
      learned: "",
      difficult: "",
      aiUse: "Solo utilicé las pistas de SYNAPTIA"
    };
    saveState();
    switchView("practice");
    showToast("Tu sesión está lista. Empieza por tu propio razonamiento.");
  }

  function toReflection() {
    const attemptField = $("#attempt-input");
    if (attemptField && state.current) state.current.attempt = attemptField.value.trim();
    state.current.stage = "reflection";
    saveState();
    renderPractice();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishSession() {
    if (!state.current) return;
    const learned = ($("#reflection-learned")?.value || "").trim();
    const difficult = ($("#reflection-difficult")?.value || "").trim();
    const aiUse = $("#reflection-ai")?.value || "No la utilicé";
    if (!learned) {
      showToast("Escribe al menos una idea que hayas comprendido para completar tu reflexión.");
      $("#reflection-learned")?.focus();
      return;
    }

    const elapsed = Math.max(1, Math.round((Date.now() - state.current.startedAt) / 60000));
    const session = {
      ...state.current,
      learned,
      difficult,
      aiUse,
      minutes: elapsed,
      completedAt: new Date().toISOString(),
      status: "completed"
    };
    delete session.startedAt;
    state.sessions.unshift(session);
    state.sessions = state.sessions.slice(0, 100);
    state.current = null;
    saveState();
    stopTimer();
    renderDashboard();
    renderHistory();
    switchView("history");
    showToast("¡Sesión completada! Cada intento cuenta.");
  }

  function renderHistory() {
    const totalMinutes = state.sessions.reduce((sum, item) => sum + (Number(item.minutes) || 0), 0);
    $("#history-overview").innerHTML = `
      <div class="history-stat"><span>Sesiones completadas</span><strong>${state.sessions.length}</strong></div>
      <div class="history-stat"><span>Minutos de práctica</span><strong>${totalMinutes}</strong></div>
      <div class="history-stat"><span>Días consecutivos</span><strong>${activeDays()}</strong></div>`;

    const list = $("#history-list");
    if (!state.sessions.length) {
      list.innerHTML = '<div class="empty-state">Todavía no hay sesiones registradas.<br>Tu primer intento puede empezar hoy.</div>';
      return;
    }
    list.innerHTML = '<div class="history-list">' + state.sessions.map(item => `
      <article class="history-item">
        <div class="history-marker">✦</div>
        <div class="history-detail"><strong>${escapeHTML(item.subject || "Aprendizaje general")}</strong><p>${escapeHTML(item.task)}</p><p><b>Aprendizaje:</b> ${escapeHTML(item.learned || "Sin reflexión")}</p></div>
        <div class="history-meta">${escapeHTML(formatShortDate(item.completedAt))}<br>${Number(item.minutes) || 1} min</div>
      </article>`).join("") + "</div>";
  }

  document.addEventListener("click", event => {
    const viewTarget = event.target.closest("[data-view], [data-view-link]");
    if (viewTarget) {
      event.preventDefault();
      switchView(viewTarget.dataset.view || viewTarget.dataset.viewLink);
      return;
    }
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;
    const action = actionTarget.dataset.action;

    if (action === "focus-session" || action === "back-to-start") {
      switchView("dashboard");
      window.setTimeout(() => $("#task")?.focus(), 100);
    } else if (action === "show-hint" && state.current) {
      const attempt = $("#attempt-input");
      if (attempt) state.current.attempt = attempt.value.trim();
      if (state.current.hintsShown < HINTS.length) {
        state.current.hintsShown += 1;
        saveState();
        renderPractice();
        showToast("Una pista nueva para ayudarte a avanzar.");
      } else {
        showToast("Ya revisaste las tres pistas. Intenta dar el siguiente paso.");
      }
    } else if (action === "to-reflection" && state.current) {
      toReflection();
    } else if (action === "back-to-thinking" && state.current) {
      const learned = $("#reflection-learned")?.value || "";
      const difficult = $("#reflection-difficult")?.value || "";
      const aiUse = $("#reflection-ai")?.value || state.current.aiUse;
      state.current.learned = learned;
      state.current.difficult = difficult;
      state.current.aiUse = aiUse;
      state.current.stage = "think";
      saveState();
      renderPractice();
    } else if (action === "finish-session") {
      finishSession();
    }
  });

  $("#session-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const subject = $("#subject").value;
    const task = $("#task").value;
    if (!task.trim()) {
      showToast("Describe brevemente qué quieres aprender.");
      $("#task").focus();
      return;
    }
    if (state.current && !window.confirm("Tienes una sesión sin terminar. ¿Quieres reemplazarla por una nueva?")) return;
    createSession(subject, task);
  });

  function init() {
    const dateElement = $("#current-date");
    if (dateElement) dateElement.textContent = new Intl.DateTimeFormat("es-EC", { weekday: "short", day: "numeric", month: "short" }).format(new Date());
    $("#year").textContent = new Date().getFullYear();
    renderDashboard();
    renderHistory();
    if (state.current) {
      switchView("practice");
    } else {
      switchView("dashboard");
    }
  }

  init();
})();