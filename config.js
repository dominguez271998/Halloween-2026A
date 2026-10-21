/*
 * Configuración compartida para el Escape Room de ARBOLEAS (5 Estaciones).
 * La URL del Apps Script, la historia, los acertijos y las coordenadas se cambian AQUÍ.
 *
 * El orden de STATIONS (0, 1, 2, 3, 4) debe coincidir con ESTACIONES de Code.gs.
 */
window.ESCAPE_CONFIG = {
  // ⚠️ RECUERDA: Pon aquí la nueva URL /exec del Google Apps Script de la hoja de Arboleas
  WEB_APP_URL: "https://script.google.com/macros/s/PON_AQUI_LA_URL_DE_ARBOLEAS/exec",

  STORY: {
    prologueTitle: "📜 La Maldición de las Cinco Llaves",
    prologue: [
      "Hace más de cien años, cuando el reloj de la torre de Arboleas dio trece campanadas en una noche de difuntos, un antiguo aquelarre selló un pacto con las tinieblas. Cinco fragmentos de una misma maldición fueron escondidos por los rincones del pueblo para que nadie pudiera liberarla jamás.",
      "Esta noche, el sello se ha quebrado. Los lamentos vuelven a escucharse tras las puertas cerradas, una figura sin rostro cuenta los minutos de los vivos en los callejones oscuros y tres enigmas ancestrales bloquean el camino de quienes intentan escapar.",
      "Vuestro grupo ha sido convocado para recorrer las 5 estaciones malditas, superar las pruebas de ingenio y regresar al Punto de Control antes de que la oscuridad reclame vuestras almas. Manteneos unidos… el tiempo ya corre en vuestra contra."
    ],
    epilogue: "Habéis resuelto los cinco sellos y cerrado el círculo en Arboleas. El eco de las trece campanadas se desvanece en el viento y el pueblo recupera la paz… al menos por este año."
  },

  STATIONS: [
    {
      id: 0,
      title: "Estación 1: La Casa de los Susurros (Psicofonía)",
      name: "Estación 1 (Psicofonía)",
      lat: 37.351500, lng: -2.074800, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
      lore: "Tras estos muros la temperatura cae de golpe y la oscuridad parece tener pulso propio. Quienes se han atrevido a cruzar el umbral aseguran que las paredes repiten una y otra vez los ecos de una ceremonia prohibida. Una voz atrapada en el más allá susurra la única palabra capaz de romper el primer sello.",
      desc: "Entra en la estancia en penumbra y guarda absoluto silencio. Escucha con mucha atención la psicofonía que se repite en el ambiente para descubrir la palabra clave.",
      staff: "Prueba 1: Psicofonía en la oscuridad"
    },
    {
      id: 1,
      title: "Estación 2: El Callejón de las Ánimas (Calle Oscura)",
      name: "Estación 2 (Calle Oscura)",
      lat: 37.352100, lng: -2.073900, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
      lore: "En este paso sombrío la luz de las farolas muere antes de tocar el suelo. Aquí os aguarda el Guardián de las Horas, un espíritu condenado a medir el tiempo que les queda a los mortales. En las paredes dejó grabados los números de su tormento, pero jamás regala la última cifra a quienes dudan.",
      desc: "El actor te señalará la primera cifra. Usa el botón '🔦 Linterna' para buscar las otras dos cifras ocultas en la calle y deduce el orden correcto de las tres. Cuando aciertes ante el Guardián, él te revelará la cuarta y última cifra según el minuto exacto de la hora actual.",
      staff: "Prueba 2: Búsqueda de números + Orden con el actor"
    },
    {
      id: 2,
      title: "Estación 3: El Panteón de las Edades (Enigma Matemático)",
      name: "Estación 3 (Acertijo Matemático)",
      lat: 37.350800, lng: -2.075200, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
      lore: "Frente a vosotros se alza el lugar donde fueron juzgadas las tres brujas del valle: la Madre y sus dos hijas Gemelas, nacidas la misma noche de luna roja. Sobre la piedra fría dejaron tallado el cálculo de su inmortalidad para que solo una mente fría pudiera romper su hechizo.",
      desc: "Resuelve este acertijo matemático:\n\n«La Madre bruja tenía exactamente 28 años cuando dio a luz a sus hijas Gemelas. Hoy, en la noche del ritual, la suma de las edades de las tres brujas es exactamente 100 años.\n\n¿Cuántos años tiene HOY la Madre bruja?»\n\n(Introduce el número de 2 cifras como clave).",
      staff: "Prueba 3: Acertijo Matemático (Respuesta: 52)"
    },
    {
      id: 3,
      title: "Estación 4: El Altar de los Cinco Cálices (Enigma de Lógica)",
      name: "Estación 4 (Acertijo Lógico)",
      lat: 37.350200, lng: -2.074100, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
      lore: "En este rincón la Sombra preparó su trampa más cruel: cinco cálices de plata alineados en fila, numerados del 1 al 5 de izquierda a derecha. Cuatro de ellos contienen sangre envenenada que apaga el corazón al instante; solo uno guarda el elixir que permite seguir con vida.",
      desc: "Deduce qué cáliz contiene el antídoto siguiendo estas 3 pistas grabadas en el altar:\n\n1. El cáliz salvador NO está en ninguno de los dos extremos de la fila.\n2. Su número NO es par.\n3. Está situado justo al lado del cáliz número 4, que desprende humo negro.\n\n¿Qué número de cáliz debes beber para sobrevivir? (Escribe el número en cifra o con letras).",
      staff: "Prueba 4: Acertijo de Deducción (Respuesta: 3 o TRES)"
    },
    {
      id: 4,
      title: "Estación 5: El Epitafio del Sepulturero (Acertijo Final)",
      name: "Estación 5 (Acertijo Sepulturero)",
      lat: 37.351800, lng: -2.073200, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
      lore: "El viejo sepulturero de Arboleas enloqueció la noche en que escuchó golpes desde el interior de la tierra. Antes de desaparecer sin dejar rastro, dejó escrita una última adivinanza en su pala oxidada. Quien no logre responderla ocupará su lugar bajo el suelo.",
      desc: "Adivina la respuesta al enigma del sepulturero:\n\n«Cuanto más me quitas, más grande me vuelvo.\nLos vivos tiemblan al asomarse a mi borde en el cementerio, pero si me llenas de tierra, desaparezco por completo.\n\n¿Qué soy?»\n\n(Escribe una sola palabra como clave).",
      staff: "Prueba 5: Adivinanza de Terror (Respuesta: AGUJERO / HOYO)"
    }
  ],

  BASE: {
    title: "🏁 Inicio y Meta: Mesa de Control (Arboleas)",
    name: "Base: Mesa de Control",
    lat: 37.351200, lng: -2.074500, approx: true, // 📍 Pendiente de ubicación definitiva en Arboleas
    salida: "en el Punto de Inicio",
    regreso: "a la Mesa de Control",
    lore: "Habéis reunido las 5 llaves del pacto, pero la Sombra os persigue de cerca por las calles de Arboleas. Solo queda cerrar el sello en el punto de partida.",
    desc: "¡Habéis superado las 5 pruebas! Regresad corriendo a la Mesa de Control con la Organización y pedid el Código Final para sellar la maldición y detener vuestro tiempo.",
    staff: "Punto de Inicio, Control y Meta"
  }
};