# Análisis de partidas de ajedrez

Página web que analiza partidas de ajedrez con Stockfish 17.1 dentro del navegador.

- Pega un PGN (Chess.com, Lichess) o un FEN, o importa tus últimas partidas por nombre de usuario.
- Cada jugada recibe una calificación: brillante, genial, mejor, excelente, buena, imprecisión, error o error grave.
- Precisión por jugador, barra de evaluación y gráfico de ventaja.
- Mueve las piezas en cualquier posición para probar variantes: el motor califica tu jugada y muestra las mejores continuaciones.

## Publicar con GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. A los pocos minutos la página queda en `https://alex123floresc-sketch.github.io/chess/`.

## Créditos y licencias

- Motor: [Stockfish.js 17.1](https://github.com/nmrugg/stockfish.js) (GPLv3, ver `COPYING-stockfish.txt`).
- Reglas del juego: [chess.js](https://github.com/jhlywa/chess.js) (BSD).
- Piezas: Colin M. L. Burnett.
