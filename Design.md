Toma de requisitos: Parchivial Triviachi

Descripción:
- Juego de tablero fusión de Parchis y trivial
- Mínimo 2 jugadores. Máximo 4.

El juego consiste en un tablero similar al del parchís con otro número de casillas. 
Hay 6 casillas entre cada punto de salva, una por cada categoría del Trivial.
Cada jugador tiene 4 fichas de su color. El objetivo es colocar las 4 tras dar una vuelta completa al tablero.

Al caer en una casilla, el jugador deberá responder una pregunta de un tipo asociado a dicha casilla.
Si un jugador puede comer a otro, se inicia un reto, en el que ambos deberán contestar dos tarjetas distintas de 6 preguntas.
El que más acierte gana y avanza esa ficha en 6 casillas. El perdedor retrocede 12.

Pantallas:
Pantalla cero:
    - Introducción al juego.
    - Reglas
    - Iniciar partida
Primera pantalla: 
    - Creación de partida: Introducir jugadores y sortear colores. Orden: Rojo>Verde>Amarillo>Azul
Segunda pantalla:
    - Tablero
    - Dados
    - Temporizador
Tercera pantalla:
    - Modales de pregunta (alerts?)
Cuarta pantalla:
    - Modales de celebrar ganador

Componentes:
    * Creación de partida: Formulario dínamico.
    * Dados: componente de una librería importada
    * Tablero: DIV que contiene:
        * 60 casillas normales de pregunta:
            - 8 de cada tipo Trivial
            - 4 casillas de salida de color Parchis
            - 4 casillas de volver a tirar intermedio
            - 4 casillas de entrada a casa color Parchis
        * 24 casillas de entrada a casa:
            - 4 de cada tipo Trivial o 6 de cada color Parchis
        * 4 Zonas de casa, una por cada color Parchis:
            - Zonas reservadas de casa
        * 4 Zonas de llegada finales, una por cada color parchis
    


