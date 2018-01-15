Lunar Lander versión defitiva con JavaScript y CSS
---
Mi proyecto de Lunar Lander empieza en 0 en el eje y porque me parecía más emocionante de esa manera, también es capaz de rebotar en el techo del vídeojuego y no atravesarlo cuando se llega al tope de la pantalla en la que se esté jugando con la nave.

Mi nave aterriza y una vez aterrizado es incapaz de usar combustible o volver a despegar, dispongo de un botón de reinicio que reinicia el juego completamente desde 0 y un botón de pausa que desactiva todas las funciones de la nave y pone a disposición nuestra un menú dónde se pueden observar las instrucciones y botones que dirigen a más información, el llamado "About" y un botón para volver y reanudar el juego.

Mi proyecto está validado en el W3C Validator y aquí tengo el link del proyecto para visualizarlo en todas sus formas:
https://rawgit.com/HighYitan/Lunar-Lander-JavaScript/master/nave.html

Mi proyecto tiene una peculariaridad y es que clickeando o pulsando solo se puede acelerar la nave si clickeas directamente sobre ella o bien si pulsas algún botón del teclado (Presumible y preferiblemente el espacio o el shift, son los más cómodos para ello).




# Lunar lander con html, css y javascript
Versión esqueleto del juego Lunar Landing que incluye:

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* Js: programación realista básica necesaria para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* No dispone de imágenes.

Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas a desarrollar:
* Ponerlo bonito según vuestro diseño anterior. No te olvides de optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Poner los menús (móvil y escritorio) según vuestro diseño anterior.
* Al pulsar una tecla, hacer click en el botón de power o bien hacer click en la pantalla la nave debe cambiar de aspecto a *nave con motor encendido* y debe cambiar la aceleración de g a -g (ejecutar motorOn).
* Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.
* Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *reiniciar*
* Debes poder elegir diferentes valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil.
* Debe haber una página de *How to play* y una página de *About* accesibles desde el menú (vas a otras páginas saliendo del juego con un avisador o mensaje de comfirmación de que sales de la partida).

Cualquier otra funcionalidad o cambio debe quedar debidamente documentado.

**Este repositorio es susceptible de sufrir modificaciones sin previo aviso**
