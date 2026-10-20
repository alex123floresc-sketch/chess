# Análisis de partidas de ajedrez

Página web que analiza partidas de ajedrez con Stockfish 17.1 dentro del navegador.

- **Análisis**: tablero, barra de evaluación, calificación de cada jugada (brillante !!, genial !, mejor, excelente, buena, imprecisión ?!, error ?, error grave ??), precisión por jugador, gráfico de ventaja y la jugada que más cambió la partida.
- **Cargar**: busca tus últimas 10 partidas de Chess.com o Lichess por nombre de usuario, o pega un PGN o un FEN.
- **Ajustes**: elige el motor (Lite de 7 MB o completo de 79 MB) y la profundidad del análisis.
- Mueve las piezas en cualquier posición para probar variantes: el motor califica tu jugada y muestra las mejores continuaciones.
- Usa varios núcleos del procesador cuando el navegador lo permite, y se puede instalar como app en el celular («Agregar a la pantalla de inicio»).

## Publicar con GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. A los pocos minutos la página queda en `https://alex123floresc-sketch.github.io/chess/`.

## Créditos y licencias

- Motor: [Stockfish.js 17.1](https://github.com/nmrugg/stockfish.js) (GPLv3, ver `COPYING-stockfish.txt`).
- Reglas del juego: [chess.js](https://github.com/jhlywa/chess.js) (BSD).
- Piezas: Colin M. L. Burnett.
