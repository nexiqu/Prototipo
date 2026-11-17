# SYNAPTIA

**Aprende con inteligencia artificial sin dejar de pensar por ti mismo.**

SYNAPTIA es una aplicación web educativa diseñada para fomentar el pensamiento crítico, la resolución de problemas y la autonomía académica. Busca que la tecnología acompañe el aprendizaje sin sustituir los procesos de razonamiento del estudiante.

## Probar la aplicación

Abre `index.html` desde un servidor web estático o publica el repositorio con GitHub Pages.

- [Abrir el repositorio](https://github.com/nexiqu/Prototipo)
- [Ver la aplicación (GitHub Pages, cuando esté habilitado)](https://nexiqu.github.io/Prototipo/)

## Funcionalidades del prototipo

### 1. Crear una sesión
El estudiante registra la materia o área y describe la actividad que necesita comprender.

### 2. Pensar primero
La aplicación presenta el problema y un espacio para escribir un primer intento de resolución antes de recibir orientación.

### 3. Recibir pistas progresivas
SYNAPTIA ofrece tres pistas generales para ayudar a reformular el problema, organizar la información y elegir un primer paso. Las pistas están diseñadas para orientar, no para entregar la solución.

### 4. Reflexionar
Al finalizar, el estudiante registra qué comprendió, qué dificultad encontró y cómo participó la inteligencia artificial en su proceso.

### 5. Consultar el progreso
El panel muestra sesiones completadas, minutos de práctica, días consecutivos y un historial de actividades.

### 6. Aprender a utilizar IA conscientemente
Una sección de orientación presenta principios para intentar primero, pedir ayuda de manera intencional, cuestionar los resultados y explicar con palabras propias.

## Cómo ejecutar localmente

No se necesita instalar dependencias ni configurar un proceso de compilación.

1. Descarga o clona este repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta un servidor estático local o abre `index.html` en un navegador moderno.

Los archivos principales son:

```text
Prototipo/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Publicar con GitHub Pages

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios. GitHub Pages publicará el sitio en la URL indicada en la configuración del repositorio.

## Privacidad y almacenamiento

El progreso se guarda en el almacenamiento local (`localStorage`) del navegador utilizado. No existe una cuenta de usuario ni una base de datos remota. Los datos pueden no aparecer en otro navegador o dispositivo y pueden borrarse al limpiar los datos del sitio.

## Alcance y limitaciones

Esta versión es un **prototipo funcional de frontend**. Las pistas son orientaciones predefinidas y no se genera contenido mediante un modelo de inteligencia artificial conectado. Tampoco se envían las actividades a servicios externos. La aplicación no debe presentarse como un asistente de IA conectado.

La estructura permite incorporar posteriormente un servicio de IA, autenticación y almacenamiento remoto, siempre que se implementen de forma segura.

## Relación con el problema del proyecto

El proyecto parte del problema identificado en la investigación grupal: la presión por hacer más en menos tiempo ha normalizado el uso de la inteligencia artificial en la educación, lo que puede generar dependencia y reemplazar procesos de razonamiento, análisis e interpretación fundamentales para el aprendizaje.

SYNAPTIA responde con una experiencia que invita a intentar resolver primero, solicitar orientación progresiva y reflexionar sobre lo aprendido. Su intención no es prohibir la IA, sino promover criterios para utilizarla como apoyo.

---

**SYNAPTIA — La tecnología te acompaña. El pensamiento es tuyo.**
