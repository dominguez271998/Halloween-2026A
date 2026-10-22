/*
 * Configuración compartida para el Escape Room de ARBOLEAS (5 Estaciones).
 * La URL del Apps Script, la historia, los acertijos, las pistas y las coordenadas se cambian AQUÍ.
 *
 * El orden de STATIONS (0, 1, 2, 3, 4) debe coincidir con ESTACIONES de Code.gs.
 */
window.ESCAPE_CONFIG = {
  // ⚠️ Asegúrate de dejar aquí la URL /exec de tu Google Apps Script de Arboleas
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxUdNYwz0hFX9IyBzbEjm4I2ABqtgKlj6AWbcV2nLDK5MBE_l-6NTpDjzeZGSNsDCafEg/exec",

  // Tiempo en segundos para que aparezca el botón de pista en una estación (300 s = 5 minutos)
  HINT_DELAY_SEC: 300,

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
      lat: 37.351500, lng: -2.074800, approx: true,
      lore: "Tras estos muros la temperatura cae de golpe y la oscuridad parece tener pulso propio. Quienes se han atrevido a cruzar el umbral aseguran que las paredes repiten una y otra vez los ecos de una ceremonia prohibida. Una voz atrapada en el más allá susurra la única palabra capaz de romper el primer sello.",
      desc: "Entra en la estancia en penumbra y guarda absoluto silencio. Escucha con mucha atención la psicofonía que se repite en el ambiente para descubrir la palabra clave.",
      hint: "Escucha la voz más grave de la grabación: pronuncia una palabra de 9 letras que da nombre a la reunión nocturna de brujas y hechiceros (empieza por A y termina por E).",
      staff: "Prueba 1: Psicofonía en la oscuridad (Clave: AQUELARRE)"
    },
    {
      id: 1,
      title: "Estación 2: El Callejón de las Ánimas (Calle Oscura)",
      name: "Estación 2 (Calle Oscura)",
      lat: 37.352100, lng: -2.073900, approx: true,
      lore: "En este paso sombrío la luz de las farolas muere antes de tocar el suelo. Aquí os aguarda el Guardián de las Horas, un espíritu condenado a medir el tiempo que les queda a los mortales. En las paredes dejó grabados los números de su tormento, pero jamás regala la última cifra a quienes dudan.",
      desc: "El actor te señalará la primera cifra. Usa el botón '🔦 Linterna' para buscar las otras dos cifras ocultas en la calle y deduce el orden correcto de las tres. Cuando aciertes ante el Guardián, él te revelará la cuarta y última cifra según el minuto exacto de la hora actual.",
      hint: "Las tres primeras cifras que debes decirle al Guardián en orden son 3, 7 y 1. Como cuarta cifra, añade al final el último dígito del minuto que marque el reloj de tu móvil ahora mismo.",
      staff: "Prueba 2: Búsqueda de números + Orden con el actor (Clave: 371 + minuto)"
    },
    {
      id: 2,
      title: "Estación 3: La Cripta de los Huesos (Enigma Matemático)",
      name: "Estación 3 (Cripta de los Huesos)",
      lat: 37.350800, lng: -2.075200, approx: true,
      lore: "En las catacumbas ocultas bajo el suelo de Arboleas, un antiguo nigromante selló la puerta con un candado numérico de tres cifras extraído del recuento exacto de las criaturas y restos óseos utilizados en su ritual.",
      desc: "Calcula el código de la cripta contando todos los restos del ritual:\n\n• 4 arañas viudas negras (de 8 patas cada una).\n• 6 cuervos disecados (de 2 patas cada uno).\n• 3 esqueletos humanos completos (con sus 206 huesos cada uno).\n• 5 calaveras sueltas sobre el altar de piedra.\n\nPara romper el sello, SUMA el número total de patas y el número total de huesos (incluyendo las calaveras sueltas).",
      hint: "Hazlo por partes: en total hay 44 patas (32 de las arañas + 12 de los cuervos). A esas 44 patas súmales los 618 huesos de los 3 esqueletos (3 × 206) y las 5 calaveras sueltas.",
      staff: "Prueba 3: Acertijo Matemático (Clave: 667)"
    },
    {
      id: 3,
      title: "Estación 4: El Ritual de los Cinco Elementos (Enigma Lógico)",
      name: "Estación 4 (Cinco Elementos)",
      lat: 37.350200, lng: -2.074100, approx: true,
      lore: "Para apagar la llama negra que consume este lugar es necesario colocar cinco ofrendas sobre el pentagrama en el orden exacto que dicta el grimorio: Ceniza (C), Hueso (H), Lino (L), Plata (P) y Sangre (S). Un solo error en el orden desatará la ira del espíritu.",
      desc: "Deduce el orden exacto de los 5 elementos (del 1º al 5º) siguiendo estas reglas:\n\n1. La Sangre (S) debe verterse justo después de la Plata (P), sin ningún elemento entre medias.\n2. El Hueso (H) es el primer elemento que abre el ritual.\n3. La Ceniza (C) es el último elemento que cierra el hechizo.\n4. El Lino (L) debe quemarse antes de tocar la Plata (P).\n\nEscribe las 5 iniciales seguidas en el orden exacto del 1º al 5º (ejemplo: CHLPS).",
      hint: "Sabes que el 1º es la H y el 5º es la C (H _ _ _ C). En los tres huecos del centro, el Lino (L) va antes que la Plata (P), y la Plata va pegada a la Sangre (PS).",
      staff: "Prueba 4: Acertijo de Orden Lógico (Clave: HLPSC)"
    },
    {
      id: 4,
      title: "Estación 5: El Epitafio del Sepulturero (Adivinanza Final)",
      name: "Estación 5 (Acertijo Sepulturero)",
      lat: 37.351800, lng: -2.073200, approx: true,
      lore: "El viejo sepulturero de Arboleas enloqueció la noche en que escuchó golpes desde el interior de la tierra. Antes de desaparecer sin dejar rastro, dejó escrita una última adivinanza en su pala oxidada. Quien no logre responderla ocupará su lugar bajo el suelo.",
      desc: "Adivina la respuesta al enigma del sepulturero:\n\n«Cuanto más me quitas, más grande me vuelvo.\nLos vivos tiemblan al asomarse a mi borde en el cementerio, pero si me llenas de tierra, desaparezco por completo.\n\n¿Qué soy?»\n\n(Escribe una sola palabra como clave).",
      hint: "Piensa en lo que cava el sepulturero con su pala en el suelo: cuanta más tierra le quitas, más grande se hace. Es una palabra de 7 letras que empieza por A (también vale su sinónimo de 4 letras con H).",
      staff: "Prueba 5: Adivinanza del Sepulturero (Clave: AGUJERO / HOYO)"
    }
  ],

  BASE: {
    title: "🏁 Inicio y Meta: Mesa de Control (Arboleas)",
    name: "Base: Mesa de Control",
    lat: 37.351200, lng: -2.074500, approx: true,
    salida: "en el Punto de Inicio",
    regreso: "a la Mesa de Control",
    lore: "Habéis reunido las 5 llaves del pacto, pero la Sombra os persigue de cerca por las calles de Arboleas. Solo queda cerrar el sello en el punto de partida.",
    desc: "¡Habéis superado las 5 pruebas! Regresad corriendo a la Mesa de Control con la Organización y pedid el Código Final para sellar la maldición y detener vuestro tiempo.",
    staff: "Punto de Inicio, Control y Meta"
  }
};
