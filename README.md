# SYNAPTIA

**Aprende con inteligencia artificial sin dejar de pensar por ti mismo.**

SYNAPTIA es una aplicación web educativa que promueve el pensamiento crítico y la autonomía académica mediante ejercicios universitarios con contenido concreto, pistas específicas y resoluciones desarrolladas paso a paso.

## Probar la aplicación

- [Abrir SYNAPTIA en GitHub Pages](https://nexiqu.github.io/Prototipo/) — disponible después de habilitar GitHub Pages en la configuración del repositorio.
- [Ver el código fuente](https://github.com/nexiqu/Prototipo)

## ¿Qué incluye esta versión?

La biblioteca inicial tiene **15 ejercicios originales** distribuidos en ocho áreas:

| Área | Temas incluidos |
|---|---|
| Biología | Glucólisis y balance de ATP; regulación de PFK-1; herencia mendeliana |
| Química | Estequiometría y reactivo limitante; molaridad y diluciones |
| Cálculo | Regla del producto; optimización y puntos críticos |
| Física | Segunda ley de Newton; fuerza de fricción cinética |
| Estadística | Error estándar; margen de error e intervalo t |
| Economía | Elasticidad precio de demanda; equilibrio de mercado |
| Psicología | Condicionamiento clásico |
| Salud | Gasto cardíaco y fisiología cardiovascular |

## Cómo funciona el aprendizaje

1. **Elige una materia y un problema.** Cada tarjeta indica el tema, nivel y tiempo aproximado.
2. **Lee el enunciado y los datos.** Las actividades incluyen valores, relaciones o contexto suficiente para resolverlas.
3. **Formula una respuesta.** El prototipo permite seleccionar una opción o ingresar un resultado numérico.
4. **Solicita pistas progresivas.** Cada ejercicio tiene hasta tres pistas específicas relacionadas con el concepto o procedimiento que se está evaluando.
5. **Comprueba tu respuesta.** La aplicación indica si el resultado es correcto y permite volver a intentarlo.
6. **Revisa la resolución.** Se despliega una explicación por etapas, con fórmulas, sustituciones y resultado final.
7. **Consulta las fuentes.** Cada ejercicio incluye enlaces a textos universitarios abiertos que permiten estudiar el concepto con mayor profundidad.
8. **Registra tu progreso.** Se guardan los intentos, respuestas correctas y ejercicios marcados como completados.

## Estructura del proyecto

```text
Prototipo/
├── index.html   # Estructura y vistas de la aplicación
├── styles.css   # Identidad visual y diseño responsive
├── app.js       # Banco de ejercicios, pistas, soluciones y progreso
└── README.md    # Documentación del proyecto
```

## Ejecutar localmente

No se necesita instalar dependencias ni configurar un proceso de compilación.

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto.
3. Abre `index.html` en un navegador moderno o utiliza un servidor estático local.

## Publicar con GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios. GitHub Pages publicará el sitio en la URL que indique la configuración.

## Fuentes académicas

Los problemas son ejercicios didácticos originales, no copias literales de los libros. Los conceptos, fórmulas y criterios de solución se apoyan en recursos académicos abiertos de OpenStax:

- [Biology 2e — Glycolysis](https://openstax.org/books/biology-2e/pages/7-2-glycolysis)
- [Biology 2e — Regulation of Cellular Respiration](https://openstax.org/books/biology-2e/pages/7-7-regulation-of-cellular-respiration)
- [Biology 2e — Mendel's Experiments and the Laws of Probability](https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability)
- [Chemistry 2e — Reaction Stoichiometry](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry)
- [Chemistry 2e — Molarity](https://openstax.org/books/chemistry-2e/pages/3-3-molarity)
- [Calculus Volume 1 — Differentiation Rules](https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules)
- [Calculus Volume 1 — Derivatives and the Shape of a Graph](https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph)
- [University Physics Volume 1 — Newton's Second Law](https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law)
- [University Physics Volume 1 — Friction](https://openstax.org/books/university-physics-volume-1/pages/6-2-friction)
- [Introductory Statistics 2e](https://openstax.org/details/books/introductory-statistics-2e)
- [Principles of Economics 2e — Price Elasticity of Demand and Supply](https://openstax.org/books/principles-economics-2e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply)
- [Principles of Economics 2e — Shifts in Demand and Supply](https://openstax.org/books/principles-economics-2e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services)
- [Psychology 2e — Classical Conditioning](https://openstax.org/books/psychology-2e/pages/6-2-classical-conditioning)
- [Anatomy and Physiology 2e — Cardiac Physiology](https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology)

## Transparencia: qué hace y qué no hace el prototipo

- La biblioteca, las pistas y las explicaciones están escritas de forma explícita en el proyecto.
- La comprobación de respuestas y el registro del progreso se realizan en el navegador.
- **Esta versión no está conectada a un modelo de inteligencia artificial ni genera respuestas abiertas.** No se presenta como si existiera una conexión que todavía no se ha desarrollado.
- Los resultados se guardan en `localStorage` del navegador. No hay cuentas, sincronización entre dispositivos ni base de datos remota.
- El banco es una primera selección de ejercicios de nivel introductorio e intermedio. Antes de un uso académico evaluativo, los docentes deben revisar su adecuación al sílabo de cada materia.

## Relación con el problema del proyecto

El trabajo grupal identificó que la presión por hacer más en menos tiempo ha normalizado el uso de la IA en la educación, lo que puede generar dependencia y reemplazar procesos de razonamiento, análisis e interpretación fundamentales para el aprendizaje.

SYNAPTIA responde con una experiencia que presenta problemas concretos, invita al estudiante a intentar resolverlos, ofrece orientación gradual y explica el procedimiento. La meta no es prohibir la inteligencia artificial, sino enseñar a utilizar herramientas de apoyo sin abandonar el pensamiento propio.

---

**SYNAPTIA — La tecnología te acompaña. El pensamiento es tuyo.**
