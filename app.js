(() => {
  "use strict";

  const EXERCISES = [
    {
      id: "bio-glycolysis", subject: "Biología celular", category: "Biología", topic: "Metabolismo energético",
      title: "Balance energético de la glucólisis", level: "Básico", minutes: 8, type: "choice",
      objective: "Distinguir ATP producido, ATP consumido y rendimiento neto de una vía metabólica.",
      prompt: "Durante la glucólisis, una molécula de glucosa de seis carbonos se transforma en dos moléculas de piruvato. ¿Cuál es la ganancia neta de ATP por cada molécula de glucosa?",
      data: [{label:"ATP invertidos",value:"2 ATP"},{label:"ATP producidos",value:"4 ATP"},{label:"Productos adicionales",value:"2 NADH y 2 piruvatos"}],
      options: [
        {key:"A",text:"2 ATP netos"},{key:"B",text:"4 ATP netos"},{key:"C",text:"6 ATP netos"},{key:"D",text:"36 ATP netos"}
      ],
      correct:"A",
      hints:[
        {title:"Separa inversión y ganancia",text:"La vía tiene una fase de inversión energética y otra de recuperación. No confundas el ATP que se forma en la segunda fase con la ganancia final."},
        {title:"Cuenta el ATP de las dos fases",text:"En la fase de inversión se utilizan 2 ATP. En la fase de recuperación se forman 4 ATP en total por cada glucosa."},
        {title:"Calcula el balance neto",text:"Resta lo invertido de lo producido: 4 ATP formados − 2 ATP consumidos. El resultado es la ganancia neta por glucosa."}
      ],
      solution:[
        {heading:"1. ATP consumido",body:"La fase preparatoria de la glucólisis utiliza 2 ATP para fosforilar intermediarios y facilitar la posterior división de la glucosa."},
        {heading:"2. ATP producido",body:"En la fase de recuperación se generan 4 ATP por fosforilación a nivel de sustrato. La cifra ya corresponde al total de las dos moléculas de tres carbonos."},
        {heading:"3. Balance neto",body:"ATP neto = ATP producido − ATP consumido = 4 − 2 = 2 ATP. Además, se forman 2 NADH y 2 piruvatos. No se deben atribuir a la glucólisis los rendimientos de las etapas mitocondriales posteriores."}
      ],
      answerDisplay:"2 ATP netos por molécula de glucosa",
      references:[{label:"OpenStax Biology 2e · 7.2 Glycolysis",url:"https://openstax.org/books/biology-2e/pages/7-2-glycolysis"}]
    },
    {
      id: "bio-pfk", subject: "Biología celular", category: "Biología", topic: "Regulación enzimática",
      title: "Regulación de la glucólisis por ATP", level: "Intermedio", minutes: 7, type: "choice",
      objective: "Relacionar el estado energético celular con la regulación alostérica de una enzima.",
      prompt: "Una célula presenta una concentración elevada de ATP. ¿Qué efecto se espera sobre la fosfofructoquinasa-1 (PFK-1), una enzima reguladora clave de la glucólisis?",
      data: [{label:"Señal metabólica",value:"ATP elevado"},{label:"Enzima analizada",value:"PFK-1"},{label:"Proceso",value:"Glucólisis"}],
      options:[
        {key:"A",text:"El ATP inhibe alostéricamente PFK-1 y disminuye el flujo glucolítico."},
        {key:"B",text:"El ATP activa PFK-1 para producir todavía más ATP."},
        {key:"C",text:"El ATP convierte directamente el piruvato en glucosa."},
        {key:"D",text:"El ATP no puede regular enzimas metabólicas."}
      ],
      correct:"A",
      hints:[
        {title:"Interpreta la señal energética",text:"Una concentración alta de ATP indica que la célula dispone de energía suficiente. Pregúntate si en esa situación conviene acelerar o frenar una vía que produce ATP."},
        {title:"Identifica la regulación alostérica",text:"PFK-1 es un punto importante de control. El ATP puede unirse a un sitio regulador distinto del sitio donde se une el sustrato."},
        {title:"Relaciona ATP y actividad enzimática",text:"El ATP elevado actúa como inhibidor alostérico de PFK-1. Al reducir su actividad, se desacelera la glucólisis; AMP/ADP elevados favorecen la señal opuesta."}
      ],
      solution:[
        {heading:"1. Estado energético",body:"El ATP es una señal del estado energético celular. Cuando su concentración es alta, la célula no necesita mantener al máximo la producción de ATP a partir de glucosa."},
        {heading:"2. Enzima reguladora",body:"La fosfofructoquinasa-1 cataliza un paso regulado de la glucólisis y responde a señales alostéricas. El ATP puede inhibir su actividad al unirse a un sitio regulador."},
        {heading:"3. Consecuencia metabólica",body:"La inhibición de PFK-1 reduce el flujo de la glucólisis. Es un mecanismo de retroalimentación: abundancia de energía disminuye la actividad de una vía que produce más energía."}
      ],
      answerDisplay:"El ATP inhibe alostéricamente PFK-1 y desacelera la glucólisis.",
      references:[{label:"OpenStax Biology 2e · 7.7 Regulation of Cellular Respiration",url:"https://openstax.org/books/biology-2e/pages/7-7-regulation-of-cellular-respiration"}]
    },
    {
      id: "bio-genetics", subject: "Genética", category: "Biología", topic: "Herencia mendeliana",
      title: "Probabilidad de un genotipo recesivo", level: "Básico", minutes: 6, type: "choice",
      objective: "Aplicar un cuadro de Punnett a un cruce monohíbrido.",
      prompt: "En una población hipotética, el alelo A es dominante y el alelo a es recesivo. Dos progenitores heterocigotos (Aa × Aa) tienen descendencia. ¿Cuál es la probabilidad de que un descendiente tenga el genotipo aa?",
      data:[{label:"Progenitor 1",value:"Aa"},{label:"Progenitor 2",value:"Aa"},{label:"Genotipo buscado",value:"aa"}],
      options:[{key:"A",text:"0 % (0 de 4)"},{key:"B",text:"25 % (1 de 4)"},{key:"C",text:"50 % (2 de 4)"},{key:"D",text:"75 % (3 de 4)"}],
      correct:"B",
      hints:[
        {title:"Identifica los gametos",text:"Cada progenitor heterocigoto puede aportar uno de dos alelos: A o a. No transmite los dos alelos a la vez."},
        {title:"Construye las combinaciones",text:"Combina los gametos A y a del primer progenitor con los gametos A y a del segundo. Obtendrás cuatro combinaciones equiprobables."},
        {title:"Cuenta solo el genotipo pedido",text:"Las cuatro posibilidades son AA, Aa, Aa y aa. Solo una de las cuatro corresponde a aa."}
      ],
      solution:[
        {heading:"1. Gametos posibles",body:"Cada progenitor Aa produce, bajo el modelo mendeliano simple, gametos A y a con probabilidad 1/2 cada uno."},
        {heading:"2. Cuadro de Punnett",body:"Las combinaciones posibles son AA, Aa, Aa y aa. Cada combinación tiene probabilidad 1/4 si los gametos se unen al azar."},
        {heading:"3. Probabilidad",body:"Hay una combinación aa entre cuatro posibles: P(aa) = 1/4 = 0,25 = 25 %. Esto corresponde a la probabilidad genotípica para cada descendiente, no a una garantía sobre un grupo pequeño de hijos."}
      ],
      answerDisplay:"25 % de probabilidad de genotipo aa",
      references:[{label:"OpenStax Biology 2e · Mendel’s Experiments and Heredity",url:"https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability"}]
    },
    {
      id:"chem-limiting",subject:"Química general",category:"Química",topic:"Estequiometría",
      title:"Reactivo limitante y rendimiento teórico",level:"Intermedio",minutes:10,type:"choice",
      objective:"Utilizar la ecuación balanceada y las relaciones molares para identificar el reactivo limitante.",
      prompt:"El hidrógeno reacciona con oxígeno para formar agua según la ecuación balanceada 2 H₂ + O₂ → 2 H₂O. Si se mezclan 5,0 mol de H₂ con 2,0 mol de O₂, ¿cuántos moles de agua pueden formarse como máximo?",
      data:[{label:"Hidrógeno disponible",value:"5,0 mol H₂"},{label:"Oxígeno disponible",value:"2,0 mol O₂"},{label:"Relación molar",value:"2 mol H₂ : 1 mol O₂ : 2 mol H₂O"}],
      options:[{key:"A",text:"2,0 mol H₂O"},{key:"B",text:"3,0 mol H₂O"},{key:"C",text:"4,0 mol H₂O"},{key:"D",text:"5,0 mol H₂O"}],
      correct:"C",
      hints:[
        {title:"Lee los coeficientes",text:"La ecuación indica que 1 mol de O₂ reacciona con 2 mol de H₂ y produce 2 mol de H₂O."},
        {title:"Comprueba cuánto H₂ exige el oxígeno",text:"Para consumir 2,0 mol de O₂ se necesitan 4,0 mol de H₂. Compara esa cantidad con los 5,0 mol disponibles."},
        {title:"Determina el límite de producción",text:"El O₂ se consume por completo y limita la reacción. La proporción O₂:H₂O es 1:2, así que 2,0 mol de O₂ pueden producir 4,0 mol de H₂O."}
      ],
      solution:[
        {heading:"1. Ecuación balanceada",body:"2 H₂ + O₂ → 2 H₂O. Los coeficientes proporcionan la relación molar entre reactivos y producto."},
        {heading:"2. Comparación de reactivos",body:"Para reaccionar con 2,0 mol de O₂ se requieren (2 mol H₂ / 1 mol O₂) × 2,0 mol O₂ = 4,0 mol H₂. Hay 5,0 mol H₂, por lo que el hidrógeno está en exceso y el oxígeno es el reactivo limitante."},
        {heading:"3. Producto máximo",body:"La relación O₂:H₂O es 1:2. Por tanto, 2,0 mol O₂ × 2 mol H₂O / 1 mol O₂ = 4,0 mol H₂O. Esta es la cantidad teórica máxima, suponiendo que la reacción se completa."}
      ],
      answerDisplay:"4,0 mol de H₂O; el O₂ es el reactivo limitante.",
      references:[{label:"OpenStax Chemistry 2e · 4.3 Reaction Stoichiometry",url:"https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry"},{label:"OpenStax Chemistry 2e · 4.4 Reaction Yields",url:"https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields"}]
    },
    {
      id:"chem-dilution",subject:"Química general",category:"Química",topic:"Disoluciones y molaridad",
      title:"Preparación de una disolución diluida",level:"Básico",minutes:7,type:"number",unit:"M",placeholder:"Ej. 0,50",
      objective:"Aplicar la ecuación de dilución conservando la cantidad de soluto.",
      prompt:"En el laboratorio se toman 25,0 mL de una disolución madre de NaCl de 2,0 M y se agrega agua hasta alcanzar un volumen final de 100,0 mL. ¿Cuál es la concentración final de NaCl?",
      data:[{label:"Concentración inicial (C₁)",value:"2,0 M"},{label:"Volumen inicial (V₁)",value:"25,0 mL"},{label:"Volumen final (V₂)",value:"100,0 mL"}],
      formula:"C₁ × V₁ = C₂ × V₂",
      correct:0.5,tolerance:0.01,
      hints:[
        {title:"Conservación del soluto",text:"Al agregar agua no cambia la cantidad de moles de NaCl transferidos desde la disolución madre. Lo que aumenta es el volumen total."},
        {title:"Despeja la concentración final",text:"Partiendo de C₁V₁ = C₂V₂, divide ambos lados para V₂: C₂ = (C₁ × V₁) / V₂."},
        {title:"Sustituye con las mismas unidades de volumen",text:"C₂ = (2,0 M × 25,0 mL) / 100,0 mL. Los mL se cancelan; calcula 50,0 / 100,0."}
      ],
      solution:[
        {heading:"1. Ecuación de dilución",body:"C₁V₁ = C₂V₂. La relación se deriva de que la dilución añade disolvente, pero no cambia los moles de soluto presentes en la porción transferida."},
        {heading:"2. Despeje",body:"C₂ = (C₁ × V₁) / V₂."},
        {heading:"3. Sustitución",body:"C₂ = (2,0 mol/L × 25,0 mL) / 100,0 mL = 0,50 mol/L. El volumen final es cuatro veces el inicial, por lo que la concentración queda en una cuarta parte: 0,50 M."}
      ],
      answerDisplay:"0,50 M",
      references:[{label:"OpenStax Chemistry 2e · 3.3 Molarity",url:"https://openstax.org/books/chemistry-2e/pages/3-3-molarity"}]
    },
    {
      id:"calc-product",subject:"Cálculo diferencial",category:"Cálculo",topic:"Regla del producto",
      title:"Derivada de una función exponencial",level:"Intermedio",minutes:9,type:"number",unit:"",placeholder:"Ej. 8,15",
      objective:"Aplicar la regla del producto y evaluar la derivada en un punto.",
      prompt:"Sea f(x) = x²eˣ. Calcula el valor de la derivada f′(1). Expresa primero el resultado exacto y luego su aproximación decimal.",
      data:[{label:"Función",value:"f(x) = x²eˣ"},{label:"Punto de evaluación",value:"x = 1"},{label:"Dato útil",value:"e ≈ 2,71828"}],
      formula:"(u · v)′ = u′v + uv′",
      correct:8.154845,tolerance:0.02,
      hints:[
        {title:"Reconoce el tipo de función",text:"f(x) es el producto de u(x) = x² y v(x) = eˣ. No se deriva como si fuera una sola potencia."},
        {title:"Aplica la regla del producto",text:"u′(x) = 2x y v′(x) = eˣ. Entonces f′(x) = 2x·eˣ + x²·eˣ."},
        {title:"Evalúa en x = 1",text:"Factoriza eˣ: f′(x) = eˣ(2x + x²). Al poner x = 1 obtienes e(2 + 1) = 3e ≈ 8,1548."}
      ],
      solution:[
        {heading:"1. Identifica los factores",body:"u(x) = x² y v(x) = eˣ. Sus derivadas son u′(x) = 2x y v′(x) = eˣ."},
        {heading:"2. Deriva el producto",body:"Por la regla del producto, f′(x) = u′v + uv′ = 2xeˣ + x²eˣ = eˣ(2x + x²)."},
        {heading:"3. Sustituye x = 1",body:"f′(1) = e(2 + 1) = 3e. Con e ≈ 2,71828, f′(1) ≈ 8,154845. El valor exacto es 3e."}
      ],
      answerDisplay:"f′(1) = 3e ≈ 8,1548",
      references:[{label:"OpenStax Calculus Volume 1 · 3.2 The Derivative as a Function",url:"https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules"}]
    },
    {
      id:"calc-minimum",subject:"Cálculo diferencial",category:"Cálculo",topic:"Optimización",
      title:"Encontrar el mínimo de una función cuadrática",level:"Intermedio",minutes:8,type:"number",unit:"",placeholder:"Valor de x",
      objective:"Localizar un punto crítico y comprobar que corresponde a un mínimo.",
      prompt:"Una función de costo simplificada está dada por C(x) = x² − 8x + 19, donde x ≥ 0 representa una cantidad de producción. ¿Qué valor de x minimiza la función?",
      data:[{label:"Función de costo",value:"C(x) = x² − 8x + 19"},{label:"Dominio",value:"x ≥ 0"},{label:"Criterio",value:"Punto crítico y segunda derivada"}],
      formula:"C′(x) = 0  ·  C′′(x) > 0",
      correct:4,tolerance:0.001,
      hints:[
        {title:"Busca el punto crítico",text:"Para localizar un extremo interior de una función diferenciable, calcula la primera derivada y busca dónde se hace cero."},
        {title:"Deriva la función",text:"La derivada de x² es 2x, la de −8x es −8 y la constante 19 desaparece. Resuelve 2x − 8 = 0."},
        {title:"Comprueba la naturaleza del extremo",text:"La segunda derivada es C′′(x) = 2, que es positiva. La función es cóncava hacia arriba y el punto crítico corresponde a un mínimo."}
      ],
      solution:[
        {heading:"1. Primera derivada",body:"C′(x) = 2x − 8."},
        {heading:"2. Punto crítico",body:"Igualamos a cero: 2x − 8 = 0. Entonces 2x = 8 y x = 4."},
        {heading:"3. Verificación",body:"C′′(x) = 2 > 0. Por la prueba de la segunda derivada, la función presenta un mínimo local en x = 4. Como la parábola abre hacia arriba y 4 pertenece al dominio x ≥ 0, también es el mínimo global en ese dominio."}
      ],
      answerDisplay:"x = 4 unidades de producción",
      references:[{label:"OpenStax Calculus Volume 1 · 4.5 Derivatives and the Shape of a Graph",url:"https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph"}]
    },
    {
      id:"phys-newton",subject:"Física general",category:"Física",topic:"Dinámica y segunda ley de Newton",
      title:"Aceleración a partir de la fuerza neta",level:"Básico",minutes:7,type:"number",unit:"m/s²",placeholder:"Ej. 3",
      objective:"Aplicar la segunda ley de Newton e interpretar unidades.",
      prompt:"Una caja de 8,0 kg se desliza sobre una superficie horizontal sin fricción. Una fuerza horizontal neta de 24 N actúa sobre ella. ¿Cuál es la magnitud de su aceleración?",
      data:[{label:"Masa (m)",value:"8,0 kg"},{label:"Fuerza neta (Fnet)",value:"24 N"},{label:"Superficie",value:"Sin fricción"}],
      formula:"ΣF = m · a",
      correct:3,tolerance:0.01,
      hints:[
        {title:"Selecciona la ley física",text:"El problema proporciona masa y fuerza neta y solicita aceleración. La relación directa entre estas cantidades es la segunda ley de Newton."},
        {title:"Despeja la incógnita",text:"De ΣF = m·a, divide ambos lados entre la masa para obtener a = ΣF/m."},
        {title:"Sustituye y revisa unidades",text:"a = 24 N / 8,0 kg. Recuerda que 1 N = 1 kg·m/s², de modo que el resultado queda en m/s²."}
      ],
      solution:[
        {heading:"1. Modelo",body:"La segunda ley de Newton establece que la fuerza neta sobre el sistema es igual al producto de la masa por la aceleración: ΣF = ma."},
        {heading:"2. Despeje",body:"a = ΣF/m."},
        {heading:"3. Cálculo y unidades",body:"a = 24 N / 8,0 kg = 3,0 kg·m/s² / kg = 3,0 m/s². La aceleración tiene la dirección de la fuerza neta."}
      ],
      answerDisplay:"3,0 m/s²",
      references:[{label:"OpenStax University Physics Volume 1 · 5.3 Newton's Second Law",url:"https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law"}]
    },
    {
      id:"phys-friction",subject:"Física general",category:"Física",topic:"Fuerza de fricción cinética",
      title:"Bloque con fuerza aplicada y fricción",level:"Intermedio",minutes:10,type:"number",unit:"m/s²",placeholder:"Ej. 2,04",
      objective:"Construir el balance de fuerzas horizontales incluyendo fricción cinética.",
      prompt:"Un bloque de 10,0 kg ya está deslizándose sobre una superficie horizontal. Se aplica una fuerza horizontal de 40,0 N en el sentido del movimiento. El coeficiente de fricción cinética es μₖ = 0,20. Usa g = 9,8 m/s². ¿Cuál es la aceleración del bloque?",
      data:[{label:"Masa",value:"10,0 kg"},{label:"Fuerza aplicada",value:"40,0 N"},{label:"Coeficiente cinético",value:"μₖ = 0,20"},{label:"Gravedad",value:"9,8 m/s²"}],
      formula:"fₖ = μₖN  ·  ΣFₓ = ma",
      correct:2.04,tolerance:0.02,
      hints:[
        {title:"Calcula la normal",text:"En el eje vertical no hay aceleración. Como la fuerza aplicada es horizontal, la normal tiene magnitud N = mg = 10,0 × 9,8 N."},
        {title:"Calcula la fricción cinética",text:"Usa fₖ = μₖN. La fricción actúa en sentido contrario al movimiento, por lo que se resta de los 40,0 N aplicados."},
        {title:"Aplica la segunda ley",text:"ΣFₓ = 40,0 − fₖ. Después calcula a = ΣFₓ / 10,0 kg. Comprueba que el signo sea positivo, porque la fuerza aplicada supera a la fricción."}
      ],
      solution:[
        {heading:"1. Fuerzas verticales",body:"No existe aceleración vertical: N − mg = 0. Por tanto, N = mg = 10,0 × 9,8 = 98 N."},
        {heading:"2. Fricción cinética",body:"fₖ = μₖN = 0,20 × 98 N = 19,6 N. Esta fuerza se opone al movimiento."},
        {heading:"3. Fuerza neta y aceleración",body:"ΣFₓ = 40,0 − 19,6 = 20,4 N. Luego a = 20,4 N / 10,0 kg = 2,04 m/s²."}
      ],
      answerDisplay:"2,04 m/s² en el sentido de la fuerza aplicada",
      references:[{label:"OpenStax University Physics Volume 1 · 6.2 Friction",url:"https://openstax.org/books/university-physics-volume-1/pages/6-2-friction"},{label:"OpenStax University Physics Volume 1 · 5.3 Newton's Second Law",url:"https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law"}]
    },
    {
      id:"stats-se",subject:"Estadística",category:"Estadística",topic:"Error estándar",
      title:"Calcular el error estándar de la media",level:"Básico",minutes:6,type:"number",unit:"unidades",placeholder:"Ej. 2",
      objective:"Diferenciar la desviación estándar de los datos del error estándar de la media.",
      prompt:"En una muestra aleatoria de 36 estudiantes, la desviación estándar de una puntuación es s = 12 puntos. Calcula el error estándar de la media (SEM).",
      data:[{label:"Desviación estándar muestral (s)",value:"12 puntos"},{label:"Tamaño de muestra (n)",value:"36 estudiantes"},{label:"Magnitud solicitada",value:"Error estándar de la media"}],
      formula:"SEM = s / √n",
      correct:2,tolerance:0.001,
      hints:[
        {title:"No confundas s con el SEM",text:"La desviación estándar describe la dispersión de observaciones individuales. El error estándar describe la variabilidad de la media muestral entre muestras."},
        {title:"Identifica la fórmula",text:"Cuando se utiliza la desviación estándar muestral como estimación de σ, el error estándar de la media se calcula como s dividido entre la raíz cuadrada de n."},
        {title:"Sustituye",text:"La raíz cuadrada de 36 es 6. Divide 12 puntos entre 6; conserva las unidades de puntuación."}
      ],
      solution:[
        {heading:"1. Fórmula",body:"SEM = s/√n. La magnitud disminuye al aumentar el tamaño de muestra, manteniendo constante la dispersión s."},
        {heading:"2. Sustitución",body:"SEM = 12/√36 = 12/6."},
        {heading:"3. Resultado",body:"SEM = 2 puntos. No significa que los datos individuales se dispersen solo 2 puntos; significa que la desviación estándar estimada de la distribución muestral de la media es 2 puntos."}
      ],
      answerDisplay:"2 puntos",
      references:[{label:"OpenStax Introductory Statistics 2e · Confidence Intervals",url:"https://openstax.org/books/introductory-statistics-2e/pages/8-introduction"}]
    },
    {
      id:"stats-ci",subject:"Estadística",category:"Estadística",topic:"Intervalo de confianza para una media",
      title:"Margen de error con distribución t",level:"Avanzado",minutes:10,type:"number",unit:"puntos",placeholder:"Ej. 4,13",
      objective:"Construir el margen de error de un intervalo t para una media con desviación poblacional desconocida.",
      prompt:"Una muestra aleatoria de 25 estudiantes presenta una media de 72 puntos y una desviación estándar muestral de 10 puntos. Suponiendo que las condiciones para el método t se cumplen, usa t* = 2,064 para un intervalo bilateral del 95 % con 24 grados de libertad. ¿Cuál es el margen de error?",
      data:[{label:"Media muestral",value:"x̄ = 72 puntos"},{label:"Desviación estándar",value:"s = 10 puntos"},{label:"Tamaño de muestra",value:"n = 25"},{label:"Valor crítico",value:"t* = 2,064"}],
      formula:"E = t* × s / √n",
      correct:4.128,tolerance:0.02,
      hints:[
        {title:"Identifica el método",text:"La desviación estándar poblacional no está especificada; se proporciona s muestral y un valor crítico t. Usa el margen de error del intervalo t de una media."},
        {title:"Calcula el error estándar",text:"Primero calcula s/√n = 10/√25 = 10/5 = 2 puntos."},
        {title:"Multiplica por el valor crítico",text:"E = 2,064 × 2 = 4,128 puntos. El intervalo se formaría sumando y restando ese margen a la media 72."}
      ],
      solution:[
        {heading:"1. Error estándar",body:"s/√n = 10/√25 = 10/5 = 2 puntos."},
        {heading:"2. Margen de error",body:"E = t* × s/√n = 2,064 × 2 = 4,128 puntos."},
        {heading:"3. Intervalo como comprobación",body:"72 ± 4,128 produce (67,872; 76,128), aproximadamente (67,87; 76,13) puntos. El margen de error pedido es 4,128 puntos. Este intervalo usa el valor crítico t indicado y los supuestos señalados en el enunciado."}
      ],
      answerDisplay:"E = 4,128 puntos; IC del 95 % ≈ [67,87; 76,13]",
      references:[{label:"OpenStax Introductory Statistics 2e · 8.2 Confidence Interval, Single Population Mean, Standard Deviation Unknown",url:"https://openstax.org/books/introductory-statistics-2e/pages/8-formula-review"}]
    },
    {
      id:"econ-elasticity",subject:"Economía",category:"Economía",topic:"Elasticidad precio de la demanda",
      title:"Interpretar la elasticidad con el método del punto medio",level:"Intermedio",minutes:9,type:"choice",
      objective:"Calcular e interpretar la elasticidad precio de la demanda mediante porcentajes del punto medio.",
      prompt:"El precio de un producto aumenta de $10 a $12 y la cantidad demandada disminuye de 100 a 80 unidades. Utiliza el método del punto medio. ¿Cuál es la interpretación más adecuada de la elasticidad precio de la demanda en valor absoluto?",
      data:[{label:"Precio inicial y final",value:"$10 → $12"},{label:"Cantidad inicial y final",value:"100 → 80 unidades"},{label:"Método",value:"Punto medio"}],
      formula:"Ed = (%ΔQd) / (%ΔP)",
      options:[{key:"A",text:"Aproximadamente 0,50; demanda inelástica."},{key:"B",text:"Aproximadamente 1,00; elasticidad unitaria."},{key:"C",text:"Aproximadamente 1,22; demanda elástica."},{key:"D",text:"Aproximadamente 2,50; demanda elástica."}],
      correct:"C",
      hints:[
        {title:"Usa el promedio como denominador",text:"Con el método del punto medio, el porcentaje de cambio de Q es ΔQ dividido para el promedio de Q inicial y final. Para P se hace lo mismo con el precio."},
        {title:"Calcula los dos cambios porcentuales",text:"Para la cantidad: (80−100)/90 = −20/90 ≈ −0,2222. Para el precio: (12−10)/11 = 2/11 ≈ 0,1818."},
        {title:"Divide y clasifica",text:"Ed = −0,2222/0,1818 ≈ −1,22. La clasificación se realiza con el valor absoluto: 1,22 es mayor que 1, por lo tanto la demanda es elástica."}
      ],
      solution:[
        {heading:"1. Cambio porcentual de cantidad",body:"El promedio de cantidades es (100 + 80)/2 = 90. El cambio porcentual es (80 − 100)/90 = −20/90 ≈ −0,2222, o −22,22 %."},
        {heading:"2. Cambio porcentual de precio",body:"El promedio de precios es (10 + 12)/2 = 11. El cambio porcentual es (12 − 10)/11 = 2/11 ≈ 0,1818, o 18,18 %."},
        {heading:"3. Elasticidad e interpretación",body:"Ed = −0,2222/0,1818 ≈ −1,22. En valor absoluto |Ed| ≈ 1,22. Como es mayor que 1, la cantidad demandada responde proporcionalmente más que el precio: la demanda es elástica en ese tramo."}
      ],
      answerDisplay:"|Ed| ≈ 1,22; demanda elástica",
      references:[{label:"OpenStax Principles of Economics 2e · 5.1 Price Elasticity of Demand and Price Elasticity of Supply",url:"https://openstax.org/books/principles-economics-2e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply"}]
    },
    {
      id:"econ-equilibrium",subject:"Economía",category:"Economía",topic:"Oferta, demanda y equilibrio",
      title:"Encontrar el precio de equilibrio",level:"Intermedio",minutes:8,type:"number",unit:"$ por unidad",placeholder:"Ej. 20",
      objective:"Determinar el equilibrio igualando cantidad demandada y cantidad ofrecida.",
      prompt:"En un mercado, las funciones lineales son Qd = 100 − 2P y Qs = 20 + 2P. Donde Qd es la cantidad demandada, Qs la cantidad ofrecida y P el precio. ¿Cuál es el precio de equilibrio?",
      data:[{label:"Demanda",value:"Qd = 100 − 2P"},{label:"Oferta",value:"Qs = 20 + 2P"},{label:"Condición de equilibrio",value:"Qd = Qs"}],
      formula:"100 − 2P = 20 + 2P",
      correct:20,tolerance:0.01,
      hints:[
        {title:"Define el equilibrio",text:"El precio de equilibrio es aquel en el que la cantidad que los consumidores desean comprar coincide con la cantidad que los productores desean vender."},
        {title:"Iguala las funciones",text:"Sustituye la condición Qd = Qs: 100 − 2P = 20 + 2P. Agrupa los términos con P a un lado y las constantes al otro."},
        {title:"Despeja P",text:"Resta 20 a ambos lados y suma 2P a ambos lados: 80 = 4P. Divide para 4."}
      ],
      solution:[
        {heading:"1. Condición de equilibrio",body:"En equilibrio Qd = Qs, por lo que 100 − 2P = 20 + 2P."},
        {heading:"2. Resolución",body:"100 − 20 = 2P + 2P. Entonces 80 = 4P y P = 20."},
        {heading:"3. Verificación de cantidad",body:"Qd = 100 − 2(20) = 60. Qs = 20 + 2(20) = 60. Ambas cantidades coinciden, así que el precio de equilibrio es $20 por unidad y la cantidad de equilibrio es 60 unidades."}
      ],
      answerDisplay:"Precio de equilibrio = $20 por unidad; Q = 60 unidades",
      references:[{label:"OpenStax Principles of Economics 2e · 3.2 Shifts in Demand and Supply for Goods and Services",url:"https://openstax.org/books/principles-economics-2e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services"}]
    },
    {
      id:"psych-conditioning",subject:"Psicología",category:"Psicología",topic:"Condicionamiento clásico",
      title:"Identificar el estímulo condicionado",level:"Básico",minutes:7,type:"choice",
      objective:"Diferenciar estímulo incondicionado, respuesta incondicionada, estímulo condicionado y respuesta condicionada.",
      prompt:"Una paciente recibe quimioterapia y experimenta náuseas después de la administración del medicamento. Tras varias sesiones, comienza a sentir náuseas al entrar en la clínica, incluso antes de recibir el tratamiento. En este ejemplo, ¿qué se convierte en estímulo condicionado?",
      data:[{label:"Estímulo incondicionado",value:"Medicamento de quimioterapia"},{label:"Respuesta incondicionada",value:"Náuseas tras el medicamento"},{label:"Estímulo inicialmente neutro",value:"Entorno de la clínica"}],
      options:[{key:"A",text:"El medicamento de quimioterapia."},{key:"B",text:"Las náuseas provocadas por el medicamento."},{key:"C",text:"El entorno de la clínica asociado repetidamente con el tratamiento."},{key:"D",text:"La respuesta fisiológica natural al medicamento."}],
      correct:"C",
      hints:[
        {title:"Localiza la asociación",text:"En el condicionamiento clásico, un estímulo inicialmente neutro se presenta repetidamente junto a otro que provoca una respuesta automática."},
        {title:"Separa estímulo de respuesta",text:"El medicamento provoca náuseas de manera no aprendida. La clínica, al principio, no provocaba necesariamente esa respuesta."},
        {title:"Reconoce qué estímulo adquiere la función",text:"Después de asociarse varias veces con el tratamiento, el entorno de la clínica puede provocar náuseas por sí mismo. Ese entorno pasa a ser el estímulo condicionado."}
      ],
      solution:[
        {heading:"1. Antes del condicionamiento",body:"El medicamento de quimioterapia es el estímulo incondicionado (EI), porque produce una respuesta fisiológica sin aprendizaje previo. Las náuseas posteriores al medicamento son la respuesta incondicionada (RI)."},
        {heading:"2. Durante la asociación",body:"El entorno de la clínica, inicialmente neutro para esta respuesta, se asocia repetidamente con la administración del medicamento."},
        {heading:"3. Después del condicionamiento",body:"El entorno de la clínica se convierte en estímulo condicionado (EC), porque puede provocar náuseas anticipatorias. Esas náuseas ante el entorno son la respuesta condicionada (RC)."}
      ],
      answerDisplay:"El entorno de la clínica es el estímulo condicionado.",
      references:[{label:"OpenStax Psychology 2e · 6.2 Classical Conditioning",url:"https://openstax.org/books/psychology-2e/pages/6-2-classical-conditioning"}]
    },
    {
      id:"anatomy-cardiac",subject:"Anatomía y fisiología",category:"Salud",topic:"Fisiología cardiovascular",
      title:"Calcular el gasto cardíaco",level:"Básico",minutes:6,type:"number",unit:"L/min",placeholder:"Ej. 5,04",
      objective:"Relacionar frecuencia cardíaca, volumen sistólico y gasto cardíaco.",
      prompt:"En un ejercicio de fisiología, se estima que una persona tiene una frecuencia cardíaca de 72 latidos por minuto y un volumen sistólico de 70 mL por latido. Calcula el gasto cardíaco en litros por minuto.",
      data:[{label:"Frecuencia cardíaca (FC)",value:"72 latidos/min"},{label:"Volumen sistólico (VS)",value:"70 mL/latido"},{label:"Conversión",value:"1.000 mL = 1 L"}],
      formula:"GC = FC × VS",
      correct:5.04,tolerance:0.02,
      hints:[
        {title:"Identifica la relación fisiológica",text:"El gasto cardíaco expresa el volumen de sangre que bombea un ventrículo en un minuto. Depende de cuántas veces late el corazón y del volumen expulsado en cada latido."},
        {title:"Multiplica las unidades",text:"GC = 72 latidos/min × 70 mL/latido. Observa que 'latidos' se cancela y queda mL/min."},
        {title:"Convierte a litros",text:"72 × 70 = 5.040 mL/min. Divide entre 1.000 para expresarlo en L/min."}
      ],
      solution:[
        {heading:"1. Fórmula",body:"GC = frecuencia cardíaca × volumen sistólico."},
        {heading:"2. Sustitución",body:"GC = 72 latidos/min × 70 mL/latido = 5.040 mL/min."},
        {heading:"3. Conversión",body:"5.040 mL/min ÷ 1.000 = 5,04 L/min. Las unidades de latidos se cancelan en el producto."}
      ],
      answerDisplay:"5,04 L/min",
      references:[{label:"OpenStax Anatomy and Physiology 2e · 19.4 Cardiac Physiology",url:"https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology"}]
    }
  ];

  const STORAGE_KEY = "synaptia-academic-v2";
  const initialState = readStorage();
  const state = {
    progress: initialState.progress || {},
    selectedSubject: "Todas",
    search: "",
    currentExercise: null,
    selectedOption: "",
    answerDraft: "",
    hintsShown: 0,
    showSolution: false,
    feedback: null
  };
  let toastTimer;

  function readStorage() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      console.warn("No se pudo leer el progreso local.", error);
      return {};
    }
  }
  function saveStorage() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({progress:state.progress})); }
    catch (error) { console.warn("No se pudo guardar el progreso local.", error); showToast("El navegador no permitió guardar el progreso."); }
  }
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }
  function formatDate(value) {
    if (!value) return "";
    return new Intl.DateTimeFormat("es-EC",{day:"numeric",month:"short",year:"numeric"}).format(new Date(value));
  }
  function switchView(view) {
    const valid = ["library","practice","history","guide"];
    const selected = valid.includes(view) ? view : "library";
    $$(".view").forEach(node => node.classList.toggle("active", node.id === "view-" + selected));
    $$(".nav-item").forEach(node => node.classList.toggle("active", node.dataset.view === selected));
    const labels = {library:"Biblioteca de ejercicios",practice:"Resolver ejercicio",history:"Mi progreso",guide:"Cómo aprender con IA"};
    $("#page-label").textContent = labels[selected];
    if (selected === "history") renderHistory();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function getStats() {
    const all = Object.values(state.progress);
    return {
      attempted: all.reduce((sum,p)=>sum+(p.attempts||0),0),
      completed: all.filter(p=>p.completed).length,
      correct: all.filter(p=>p.correct).length,
      mastered: all.filter(p=>p.correct).length
    };
  }
  function renderFilters() {
    const subjects = ["Todas",...new Set(EXERCISES.map(item=>item.category))];
    $("#subject-filters").innerHTML = subjects.map(subject =>
      '<button class="filter-chip '+(state.selectedSubject===subject?'active':'')+'" data-subject="'+escapeHTML(subject)+'">'+escapeHTML(subject)+'</button>'
    ).join("");
  }
  function renderLibrary() {
    renderFilters();
    const query = state.search.trim().toLowerCase();
    const filtered = EXERCISES.filter(item => {
      const subjectMatch = state.selectedSubject === "Todas" || item.category === state.selectedSubject;
      const haystack = [item.title,item.subject,item.category,item.topic,item.prompt,item.objective].join(" ").toLowerCase();
      return subjectMatch && (!query || haystack.includes(query));
    });
    $("#library-count").textContent = EXERCISES.length;
    $("#library-subject-count").textContent = new Set(EXERCISES.map(item=>item.category)).size;
    $("#result-count").textContent = filtered.length + (filtered.length===1?" ejercicio":" ejercicios");
    $("#no-results").classList.toggle("hidden",filtered.length>0);
    $("#exercise-grid").innerHTML = filtered.map(item => {
      const p = state.progress[item.id] || {};
      const status = p.completed ? '<span class="exercise-status done">✓ Completado</span>' : p.attempts ? '<span class="exercise-status in-progress">En práctica</span>' : '<span class="exercise-status">Disponible</span>';
      const kind = item.type === "choice" ? "Selección múltiple" : "Respuesta numérica";
      return `
        <article class="exercise-card">
          <div class="exercise-card-top"><span class="subject-tag tag-${slug(item.category)}">${escapeHTML(item.category)}</span>${status}</div>
          <div class="exercise-card-topic">${escapeHTML(item.topic)} · ${escapeHTML(item.level)}</div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.objective)}</p>
          <div class="exercise-card-meta"><span>◷ ${item.minutes} min</span><span>▤ ${kind}</span></div>
          <button class="button button-card" data-open-exercise="${item.id}">${p.completed?"Repasar ejercicio":"Resolver ejercicio"} <span>→</span></button>
        </article>`;
    }).join("");
  }
  function slug(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-");
  }
  function openExercise(id) {
    const exercise = EXERCISES.find(item=>item.id===id);
    if (!exercise) { showToast("No encontramos ese ejercicio."); return; }
    state.currentExercise = exercise;
    state.selectedOption = "";
    state.answerDraft = "";
    state.hintsShown = 0;
    state.showSolution = false;
    state.feedback = null;
    renderExercise();
    $("#practice-location").textContent = exercise.category + " / " + exercise.topic;
    switchView("practice");
  }
  function renderExercise() {
    const item = state.currentExercise;
    if (!item) return;
    const p = state.progress[item.id] || {};
    const dataHTML = item.data.map(d=>'<div class="given-item"><span>'+escapeHTML(d.label)+'</span><strong>'+escapeHTML(d.value)+'</strong></div>').join("");
    const inputHTML = item.type === "choice"
      ? '<div class="answer-options">'+item.options.map(option=>`
          <button class="answer-option ${state.selectedOption===option.key?'selected':''}" data-option="${option.key}">
            <span class="option-letter">${option.key}</span><span>${escapeHTML(option.text)}</span><span class="option-check">${state.selectedOption===option.key?'✓':''}</span>
          </button>`).join("")+'</div>'
      : '<div class="numeric-answer-row"><input id="numeric-answer" inputmode="decimal" autocomplete="off" placeholder="'+escapeHTML(item.placeholder||"Escribe tu resultado")+'" value="'+escapeHTML(state.answerDraft)+'" aria-label="Tu respuesta numérica"><span class="answer-unit">'+escapeHTML(item.unit||"")+'</span></div><p class="input-note">Puedes escribir decimales con coma o punto. No incluyas la unidad en el campo.</p>';
    const hintsHTML = state.hintsShown ? `
      <div class="hint-stack">${item.hints.slice(0,state.hintsShown).map((hint,index)=>`
        <div class="specific-hint"><div class="hint-heading"><span>PISTA ${index+1}</span><strong>${escapeHTML(hint.title)}</strong></div><p>${escapeHTML(hint.text)}</p></div>`).join("")}</div>` : "";
    const solutionHTML = state.showSolution ? `
      <section class="solution-panel" id="solution-panel">
        <div class="solution-heading"><span>✦</span><div><span class="section-overline">RESOLUCIÓN EXPLICADA</span><h3>Así se llega al resultado</h3></div></div>
        ${item.solution.map((step,index)=>'<article class="solution-step"><span class="solution-step-number">'+(index+1)+'</span><div><strong>'+escapeHTML(step.heading)+'</strong><p>'+escapeHTML(step.body)+'</p></div></article>').join("")}
        <div class="final-answer"><span>RESULTADO</span><strong>${escapeHTML(item.answerDisplay)}</strong></div>
        <div class="source-links"><span class="section-overline">REFERENCIAS PARA PROFUNDIZAR</span>${item.references.map(ref=>'<a href="'+escapeHTML(ref.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(ref.label)+' ↗</a>').join("")}</div>
      </section>` : "";
    let feedbackHTML = "";
    if (state.feedback) {
      feedbackHTML = '<div class="answer-feedback '+(state.feedback.correct?'correct':'incorrect')+'"><strong>'+(state.feedback.correct?'✓ ¡Correcto!':'Todavía no es correcto')+'</strong><p>'+escapeHTML(state.feedback.message)+'</p></div>';
    }
    $("#exercise-content").innerHTML = `
      <div class="exercise-detail-header">
        <div><div class="exercise-breadcrumb">${escapeHTML(item.subject)} <span>·</span> ${escapeHTML(item.topic)}</div><h1>${escapeHTML(item.title)}</h1><p>${escapeHTML(item.objective)}</p></div>
        <div class="exercise-header-badges"><span class="level-badge">${escapeHTML(item.level)}</span><span class="time-badge">◷ ${item.minutes} min</span></div>
      </div>
      <div class="exercise-layout">
        <section class="exercise-main panel">
          <div class="section-overline">ENUNCIADO DEL PROBLEMA</div>
          <p class="exercise-prompt">${escapeHTML(item.prompt)}</p>
          <div class="given-grid">${dataHTML}</div>
          ${item.formula?'<div class="formula-box"><span>RELACIÓN CLAVE</span><strong>'+escapeHTML(item.formula)+'</strong></div>':''}
          <div class="answer-section">
            <div class="answer-section-heading"><div><span class="section-overline">TU TURNO</span><h2>¿Cuál es tu respuesta?</h2></div><span class="attempt-count">${p.attempts||0} intentos previos</span></div>
            ${inputHTML}
            <div class="answer-actions"><button class="button button-primary" data-action="check-answer">Comprobar respuesta <span>→</span></button><button class="button button-outline" data-action="show-hint">Necesito una pista <span>✦</span></button></div>
            ${feedbackHTML}
          </div>
          <div class="hints-area">${hintsHTML}</div>
          <div class="solution-toggle-row"><div><strong>¿Quieres revisar el procedimiento?</strong><p>La resolución muestra el razonamiento y los cálculos.</p></div><button class="button button-secondary" data-action="toggle-solution">${state.showSolution?'Ocultar resolución':'Ver resolución paso a paso'}</button></div>
          ${solutionHTML}
          ${state.showSolution?'<div class="complete-row"><span>¿Ya revisaste el procedimiento?</span><button class="button button-primary" data-action="mark-complete">'+(p.completed?'✓ Ejercicio completado':'Marcar como completado')+'</button></div>':''}
        </section>
        <aside class="exercise-aside">
          <div class="aside-card learning-card"><div class="aside-icon">◎</div><span class="section-overline">OBJETIVO DE APRENDIZAJE</span><p>${escapeHTML(item.objective)}</p><div class="aside-divider"></div><span class="aside-small">ANTES DE VER LA SOLUCIÓN</span><p>Identifica los datos, piensa qué concepto necesitas y realiza un intento. Puedes pedir pistas en cualquier momento.</p></div>
          <div class="aside-card progress-card"><div class="aside-icon">◷</div><strong>Tu actividad</strong><div class="progress-stats"><span>Intentos</span><b>${p.attempts||0}</b></div><div class="progress-stats"><span>Estado</span><b>${p.completed?'Completado':p.attempts?'En práctica':'Nuevo'}</b></div><div class="progress-stats"><span>Resultado</span><b>${p.correct?'Correcto':'Pendiente'}</b></div></div>
          <div class="aside-card reference-card"><div class="aside-icon">↗</div><strong>Fuente académica</strong><p>Este ejercicio se construyó a partir de conceptos de recursos universitarios abiertos.</p>${item.references.map(ref=>'<a href="'+escapeHTML(ref.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(ref.label)+' ↗</a>').join("")}</div>
        </aside>
      </div>`;
  }
  function getUserAnswer() {
    const item = state.currentExercise;
    if (!item) return null;
    if (item.type === "choice") return state.selectedOption;
    const field = $("#numeric-answer");
    return field ? field.value.trim() : state.answerDraft;
  }
  function checkAnswer() {
    const item = state.currentExercise;
    if (!item) return;
    const userAnswer = getUserAnswer();
    if (userAnswer === null || userAnswer === "") { showToast(item.type==="choice"?"Selecciona una opción antes de comprobar.":"Escribe un resultado antes de comprobar."); return; }
    let correct = false;
    if (item.type === "choice") correct = userAnswer === item.correct;
    else {
      const numeric = Number(String(userAnswer).replace(",",".").replace(/\s/g,""));
      correct = Number.isFinite(numeric) && Math.abs(numeric-item.correct) <= item.tolerance;
    }
    const old = state.progress[item.id] || {attempts:0,correct:false,completed:false};
    state.progress[item.id] = {
      ...old,
      attempts:(old.attempts||0)+1,
      correct:old.correct||correct,
      lastCorrect:correct,
      lastAnswer:String(userAnswer),
      lastAttempt:new Date().toISOString()
    };
    state.feedback = {
      correct,
      message:correct ? "Has aplicado correctamente el concepto. Revisa la resolución para comprobar cada paso y reforzar tu comprensión." : "Revisa los datos y la pista disponible. Puedes intentarlo de nuevo; también puedes abrir la resolución para estudiar el procedimiento."
    };
    saveStorage();
    renderExercise();
    renderLibrary();
  }
  function showNextHint() {
    const item = state.currentExercise;
    if (!item) return;
    if (state.hintsShown >= item.hints.length) { showToast("Ya revisaste todas las pistas de este ejercicio."); return; }
    state.hintsShown += 1;
    renderExercise();
  }
  function markComplete() {
    const item = state.currentExercise;
    if (!item) return;
    const old = state.progress[item.id] || {attempts:0,correct:false};
    state.progress[item.id] = {...old,completed:true,completedAt:new Date().toISOString()};
    saveStorage();
    renderExercise();
    renderLibrary();
    showToast("Ejercicio guardado como completado.");
  }
  function renderHistory() {
    const stats = getStats();
    const percentage = stats.attempted ? Math.round(stats.correct/stats.attempted*100) : 0;
    $("#history-overview").innerHTML = `
      <div class="history-stat"><span>Ejercicios completados</span><strong>${stats.completed} / ${EXERCISES.length}</strong></div>
      <div class="history-stat"><span>Intentos registrados</span><strong>${stats.attempted}</strong></div>
      <div class="history-stat"><span>Ejercicios con respuesta correcta</span><strong>${stats.mastered}</strong></div>`;
    const entries = Object.entries(state.progress).filter(([,p])=>p.attempts||p.completed).sort((a,b)=>new Date(b[1].lastAttempt||b[1].completedAt||0)-new Date(a[1].lastAttempt||a[1].completedAt||0));
    if (!entries.length) {
      $("#history-list").innerHTML = '<div class="empty-state">Todavía no hay actividad registrada.<br>Elige un ejercicio de la biblioteca para comenzar tu recorrido.</div>';
      return;
    }
    $("#history-list").innerHTML = '<div class="history-list">'+entries.map(([id,p])=>{
      const item = EXERCISES.find(e=>e.id===id);
      if (!item) return "";
      return `<article class="history-item"><div class="history-marker">${p.completed?'✓':'✦'}</div><div class="history-detail"><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.category)} · ${escapeHTML(item.topic)} · ${p.attempts||0} intento(s)</p></div><div class="history-meta">${p.correct?'Respuesta correcta':p.completed?'Completado':'En práctica'}<br>${formatDate(p.lastAttempt||p.completedAt)}</div><button class="text-button history-review" data-open-exercise="${item.id}">Repasar →</button></article>`;
    }).join("")+'</div>';
  }

  document.addEventListener("input",event=>{
    if(event.target.id==="exercise-search"){
      state.search=event.target.value;
      const cursor=event.target.selectionStart;
      renderLibrary();
      const search=$("#exercise-search");
      search.focus(); search.setSelectionRange(cursor,cursor);
    }
    if(event.target.id==="numeric-answer") state.answerDraft=event.target.value;
  });
  document.addEventListener("click",event=>{
    const viewTarget=event.target.closest("[data-view],[data-view-link]");
    if(viewTarget){event.preventDefault();switchView(viewTarget.dataset.view||viewTarget.dataset.viewLink);return;}
    const subjectTarget=event.target.closest("[data-subject]");
    if(subjectTarget){state.selectedSubject=subjectTarget.dataset.subject;renderLibrary();return;}
    const openTarget=event.target.closest("[data-open-exercise]");
    if(openTarget){openExercise(openTarget.dataset.openExercise);return;}
    const optionTarget=event.target.closest("[data-option]");
    if(optionTarget){state.selectedOption=optionTarget.dataset.option;renderExercise();return;}
    const actionTarget=event.target.closest("[data-action]");
    if(!actionTarget)return;
    const action=actionTarget.dataset.action;
    if(action==="back-library")switchView("library");
    else if(action==="check-answer")checkAnswer();
    else if(action==="show-hint")showNextHint();
    else if(action==="toggle-solution"){state.showSolution=!state.showSolution;renderExercise();if(state.showSolution)$("#solution-panel")?.scrollIntoView({behavior:"smooth",block:"nearest"});}
    else if(action==="mark-complete")markComplete();
  });

  function init(){
    $("#current-date").textContent=new Intl.DateTimeFormat("es-EC",{weekday:"short",day:"numeric",month:"short"}).format(new Date());
    $("#year").textContent=new Date().getFullYear();
    renderLibrary();
    renderHistory();
    switchView("library");
  }
  init();
})();