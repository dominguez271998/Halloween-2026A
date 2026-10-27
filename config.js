/*
 * Configuración compartida para el Escape Room de ARBOLEAS (6 Estaciones).
 * Salida y Meta: Ayuntamiento de Arboleas.
 *
 * El orden de STATIONS (0 a 5) debe coincidir con ESTACIONES de Code.gs.
 */
window.ESCAPE_CONFIG = {
  // ⚠️ Asegúrate de pegar aquí la URL /exec de tu Google Apps Script de Arboleas
  WEB_APP_URL: "https://script.google.com/macros/s/PON_AQUI_LA_URL_DE_ARBOLEAS/exec",

  // Tiempo en segundos para que aparezca el botón de pista tras desbloquear la estación (300 s = 5 minutos)
  HINT_DELAY_SEC: 300,

  // Bloqueo por proximidad GPS: obliga a acercarse a menos de GPS_RADIUS_M metros para ver el acertijo
  // (Pon GPS_LOCK: false si quieres hacer pruebas desde casa sin desplazarte)
  GPS_LOCK: true,
  GPS_RADIUS_M: 45,

  STORY: {
    prologueTitle: "📜 La Maldición de los Seis Sellos",
    prologue: [
      "Hace más de cien años, cuando el reloj de Arboleas dio trece campanadas en una noche de difuntos, un antiguo aquelarre selló un pacto con las tinieblas. Seis fragmentos de una misma maldición fueron ocultados por las calles del pueblo para que nadie pudiera liberarla jamás.",
      "Esta noche, los seis sellos se han resquebrajado. Los lamentos se escuchan tras las puertas cerradas, una figura sin rostro cuenta los minutos de los vivos en los callejones oscuros y antiguos enigmas bloquean el camino de quienes intentan escapar.",
      "Vuestro grupo ha sido convocado frente al Ayuntamiento de Arboleas con una única misión: recorrer las 6 estaciones malditas, acudir físicamente a cada rincón para desbloquear sus pruebas y regresar al Ayuntamiento antes de que la oscuridad reclame vuestras almas."
    ],
    epilogue: "Habéis roto los seis sellos y cerrado el círculo ritual frente al Ayuntamiento de Arboleas. El eco de las trece campanadas se apaga en la noche y el pueblo recupera la paz… al menos hasta el próximo Halloween."
  },

  STATIONS: [
    {
      id: 0,
      title: "Estación 1: La Casa de los Susurros (C. Flores, 8)",
      name: "Estación 1 (C. Flores, 8)",
      lat: 37.351150, lng: -2.075120, approx: true, // 📍 C. Flores, 8
      unlockCode: "FLORES",                         // Código manual de respaldo si a un móvil le falla el GPS
      lore: "En el número 8 de la Calle Flores la temperatura cae de golpe y la oscuridad parece tener pulso propio. Quienes se han atrevido a cruzar el umbral aseguran que las paredes repiten una y otra vez los ecos de una ceremonia prohibida.",
      desc: "Entra en la estancia en penumbra y guarda absoluto silencio. Escucha con mucha atención la psicofonía que se repite en el ambiente para descubrir la palabra clave.",
      hint: "Escucha la voz más grave de la grabación: pronuncia una palabra de 9 letras que da nombre a la reunión nocturna de brujas y hechiceros (empieza por A y termina por E).",
      staff: "Prueba 1: Psicofonía en C. Flores, 8 (Clave: AQUELARRE | Desbloqueo GPS: FLORES)"
    },
    {
      id: 1,
      title: "Estación 2: El Callejón de las Ánimas (Calle Oscura)",
      name: "Estación 2 (Calle Oscura)",
      lat: 37.349167, lng: -2.076417,               // 📍 Exacta: 37°20'57.0"N 2°04'35.1"W
      unlockCode: "ANIMAS",
      lore: "En este paso sombrío la luz de las farolas muere antes de tocar el suelo. Aquí os aguarda el Guardián de las Horas, un espíritu condenado a medir el tiempo que les queda a los mortales. En las paredes dejó grabados los números de su tormento.",
      desc: "El actor te señalará la primera cifra. Usa el botón '🔦 Linterna' para buscar las otras dos cifras ocultas en la calle y deduce el orden correcto de las tres. Cuando aciertes ante el Guardián, él te revelará la cuarta y última cifra según el minuto exacto de la hora actual.",
      hint: "Las tres primeras cifras que debes decirle al Guardián en orden son 3, 7 y 1. Como cuarta cifra, añade al final el último dígito del minuto que marque el reloj de tu móvil ahora mismo.",
      staff: "Prueba 2: Calle Oscura (Clave: 371 + minuto | Desbloqueo GPS: ANIMAS)"
    },
    {
      id: 2,
      title: "Estación 3: La Cripta de los Huesos (Enigma Matemático)",
      name: "Estación 3 (Cripta de los Huesos)",
      lat: 37.350306, lng: -2.070944,               // 📍 Exacta: 37°21'01.1"N 2°04'15.4"W
      unlockCode: "CRIPTA",
      lore: "Bajo este punto de Arboleas, un antiguo nigromante selló el paso con un candado numérico de tres cifras extraído del recuento exacto de las criaturas y restos óseos utilizados en su ritual.",
      desc: "Calcula el código de la cripta contando todos los restos del ritual:\n\n• 4 arañas viudas negras (de 8 patas cada una).\n• 6 cuervos disecados (de 2 patas cada uno).\n• 3 esqueletos humanos completos (con sus 206 huesos cada uno).\n• 5 calaveras sueltas sobre el altar de piedra.\n\nPara romper el sello, SUMA el número total de patas y el número total de huesos (incluyendo las calaveras sueltas).",
      hint: "Hazlo por partes: en total hay 44 patas (32 de las arañas + 12 de los cuervos). A esas 44 patas súmales los 618 huesos de los 3 esqueletos (3 × 206) y las 5 calaveras sueltas.",
      staff: "Prueba 3: Acertijo Matemático (Clave: 667 | Desbloqueo GPS: CRIPTA)"
    },
    {
      id: 3,
      title: "Estación 4: El Ritual de los Cinco Elementos (C. Barranco, 13)",
      name: "Estación 4 (C. Barranco, 13)",
      lat: 37.351420, lng: -2.074650, approx: true, // 📍 C. Barranco, 13
      unlockCode: "BARRANCO",
      lore: "En la Calle Barranco, para apagar la llama negra que consume este lugar es necesario colocar cinco ofrendas sobre el pentagrama en el orden exacto que dicta el grimorio: Ceniza (C), Hueso (H), Lino (L), Plata (P) y Sangre (S).",
      desc: "Deduce el orden exacto de los 5 elementos (del 1º al 5º) siguiendo estas reglas:\n\n1. La Sangre (S) debe verterse justo después de la Plata (P), sin ningún elemento entre medias.\n2. El Hueso (H) es el primer elemento que abre el ritual.\n3. La Ceniza (C) es el último elemento que cierra el hechizo.\n4. El Lino (L) debe quemarse antes de tocar la Plata (P).\n\nEscribe las 5 iniciales seguidas en el orden exacto del 1º al 5º (ejemplo: CHLPS).",
      hint: "Sabes que el 1º es la H y el 5º es la C (H _ _ _ C). En los tres huecos del centro, el Lino (L) va antes que la Plata (P), y la Plata va pegada a la Sangre (PS).",
      staff: "Prueba 4: C. Barranco, 13 (Clave: HLPSC | Desbloqueo GPS: BARRANCO)"
    },
    {
      id: 4,
      title: "Estación 5: El Epitafio del Sepulturero (C. de La Parra, 1)",
      name: "Estación 5 (C. de La Parra, 1)",
      lat: 37.350780, lng: -2.074980, approx: true, // 📍 C. de La Parra, 1
      unlockCode: "PARRA",
      lore: "En la Calle de La Parra vivió el viejo sepulturero de Arboleas, quien enloqueció la noche en que escuchó golpes desde el interior de la tierra. Antes de desaparecer, dejó escrita una adivinanza en su pala oxidada.",
      desc: "Adivina la respuesta al enigma del sepulturero:\n\n«Cuanto más me quitas, más grande me vuelvo.\nLos vivos tiemblan al asomarse a mi borde en el cementerio, pero si me llenas de tierra, desaparezco por completo.\n\n¿Qué soy?»\n\n(Escribe una sola palabra como clave).",
      hint: "Piensa en lo que cava el sepulturero con su pala en el suelo: cuanta más tierra le quitas, más grande se hace. Es una palabra de 7 letras que empieza por A (también vale su sinónimo de 4 letras con H).",
      staff: "Prueba 5: C. de La Parra, 1 (Clave: AGUJERO / HOYO | Desbloqueo GPS: PARRA)"
    },
    {
      id: 5,
      title: "Estación 6: El Reloj de las Trece Campanadas",
      name: "Estación 6 (Sexto Sello)",
      lat: 37.350917, lng: -2.075833,               // 📍 Exacta: 37°21'03.3"N 2°04'33.0"W
      unlockCode: "RELOJ",
      lore: "Habéis llegado al lugar del Sexto Sello. El viejo relojero de Arboleas fue hallado sin vida junto a este punto tras descubrir que la Sombra solo ataca en los intervalos de silencio que quedan entre campanada y campanada.",
      desc: "Resuelve el enigma del relojero (¡cuidado con la trampa!):\n\n«El reloj maldito tarda exactamente 12 segundos en dar las 4 campanadas de las cuatro de la madrugada (contando desde que suena la primera hasta que suena la cuarta).\n\nSi el tiempo entre una campanada y la siguiente es siempre idéntico… ¿cuántos segundos tardará en dar las 13 campanadas de la medianoche de los muertos?»\n\n(Introduce el número de segundos).",
      hint: "¡Ojo! Entre 4 campanadas solo hay 3 silencios de espera (12 s ÷ 3 silencios = 4 segundos entre campanada y campanada). Para dar 13 campanadas hay 12 silencios de espera. Multiplica 12 × 4.",
      staff: "Prueba 6: 37°21'03.3\"N 2°04'33.0\"W (Clave: 48 | Desbloqueo GPS: RELOJ)"
    }
  ],

  // Zona de inicio y de fin: Ayuntamiento de Arboleas
  BASE: {
    title: "🏁 Inicio y Meta: Ayuntamiento de Arboleas",
    name: "Base: Ayuntamiento de Arboleas",
    lat: 37.351250, lng: -2.074450,
    salida: "en el Ayuntamiento de Arboleas",
    regreso: "al Ayuntamiento de Arboleas",
    lore: "Habéis reunido las 6 llaves del pacto, pero la Sombra os persigue de cerca por las calles del pueblo. El círculo solo puede cerrarse allí donde comenzó todo.",
    desc: "¡Habéis superado las 6 estaciones! Regresad de inmediato al Ayuntamiento de Arboleas con la Organización para introducir el Código Final y detener vuestro cronómetro.",
    staff: "Punto de Inicio, Control y Meta (Clave final: FIN2026)"
  }
};
