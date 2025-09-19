export interface Exercise {
    name: string;
    sets: number;
    reps: string;
    rest: string;
    muscles_worked: string[];
    description: string;
    tips?: string[];
    grip?: string[];
    slug: string;
    image?: string;
    video?: string;
}

export interface Routine {
    day: string;
    routine: string;
    description: string;
    points_key: string[];
    exercises: Exercise[];
    slug: string;
}

export const routines: Record<string, Routine> = {
    lunes: {
        day: "Lunes",
        slug: "lunes",
        routine: "Glúteo y Pierna (enfoque en glúteo)",
        description:
            "Entrenamiento enfocado en desarrollar fuerza y volumen en glúteos, con trabajo complementario de pierna para mejorar la forma y tonicidad.",
        points_key: [
            "Concéntrate en la contracción de glúteos en cada repetición.",
            "Mantén el core firme para proteger la espalda baja.",
            "No uses más peso del que puedas controlar con buena técnica.",
        ],
        exercises: [
            {
                name: "Hip Thrust con barra",
                slug: "hip-thrust-barra",
                sets: 4,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales"],
                description:
                    "Ejercicio clave para el desarrollo del glúteo. Se realiza apoyando la espalda en un banco, colocando una barra sobre la cadera y empujando hacia arriba hasta contraer completamente.",
                tips: [
                    "Mantén la barbilla ligeramente hacia abajo.",
                    "Aprieta fuerte los glúteos arriba con pausa de 2 segundos.",
                    "No arquees la espalda baja, controla el movimiento.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Prensa inclinada",
                slug: "prensa-inclinada",
                sets: 4,
                reps: "12-15",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Cuádriceps", "Isquiotibiales"],
                description:
                    "La prensa inclinada permite trabajar piernas y glúteos con un rango de movimiento seguro. Coloca los pies en la parte alta de la plataforma para enfocar más en glúteo.",
                tips: [
                    "No bloquees las rodillas al extender.",
                    "Baja lento y empuja con fuerza al subir.",
                    "Mantén pies arriba y separados al ancho de hombros.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Abductores en máquina",
                slug: "abductores-maquina",
                sets: 4,
                reps: "20",
                rest: "60 segundos",
                muscles_worked: ["Glúteo medio", "Glúteo menor"],
                description:
                    "Ejercicio aislado para glúteos laterales, clave para redondear la cadera y mejorar estabilidad de cadera.",
                tips: [
                    "Aprieta fuerte al abrir y mantén 1 segundo de pausa.",
                    "Evita impulsarte, controla la bajada.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Peso muerto rumano con mancuernas",
                slug: "peso-muerto-rumano-mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales", "Espalda baja"],
                description:
                    "Con mancuernas, baja la carga deslizando frente a tus piernas con rodillas ligeramente flexionadas y sube apretando glúteos.",
                tips: [
                    "Mantén la espalda recta en todo momento.",
                    "Siente el estiramiento en la parte posterior de las piernas.",
                    "No bajes más allá de donde tu movilidad lo permita.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Patada de glúteo en máquina",
                slug: "patada-gluteo-maquina",
                sets: 3,
                reps: "15 por pierna",
                rest: "60-75 segundos",
                muscles_worked: ["Glúteos"],
                description:
                    "Ejercicio aislado en máquina para trabajar glúteos de forma unilateral. Se realiza empujando hacia atrás con la pierna contra la resistencia.",
                tips: [
                    "Mantén el torso estable, no te balancees.",
                    "Exhala al empujar y aprieta el glúteo arriba.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Planchas laterales",
                slug: "planchas-laterales",
                sets: 3,
                reps: "40 segundos por lado",
                rest: "45-60 segundos",
                muscles_worked: ["Core", "Oblicuos"],
                description:
                    "Ejercicio isométrico que fortalece la zona media, en especial oblicuos y estabilizadores de cadera.",
                tips: [
                    "Mantén la cadera alineada, no la dejes caer.",
                    "Aprieta abdomen y glúteos para mayor estabilidad.",
                ],
                image: "",
                video: "",
            },
        ],
    },
    martes: {
        day: "Martes",
        slug: "martes",
        routine: "Espalda y Brazos",
        description:
            "Rutina enfocada en fortalecer la espalda, mejorar postura y desarrollar fuerza en bíceps, hombros y tríceps.",
        points_key: [
            "Controla cada repetición sin impulsarte.",
            "Mantén el core firme para proteger la zona lumbar.",
            "Respira de manera constante y no aguantes el aire.",
        ],
        exercises: [
            {
                name: "Jalón al pecho en polea",
                slug: "jalon-al-pecho-polea",
                sets: 4,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Dorsales", "Bíceps", "Hombros posteriores"],
                description:
                    "Ejercicio de tracción vertical que trabaja la espalda, principalmente los dorsales, y ayuda a desarrollar amplitud.",
                tips: [
                    "Lleva la barra al pecho, no detrás de la cabeza.",
                    "Mantén la espalda recta y el pecho arriba.",
                    "Aprieta los dorsales al final del movimiento.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Remo sentado en polea baja",
                slug: "remo-sentado-polea-baja",
                sets: 4,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: [
                    "Dorsales",
                    "Trapecios",
                    "Romboides",
                    "Bíceps",
                ],
                description:
                    "Ejercicio de tracción horizontal para dar grosor a la espalda y trabajar la zona media junto con bíceps.",
                tips: [
                    "Mantén el torso firme, sin echarte hacia atrás.",
                    "Lleva los codos pegados al cuerpo.",
                    "Haz una pausa al final de la contracción.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Facepull en polea",
                slug: "facepull-polea",
                sets: 3,
                reps: "12-15",
                rest: "60-75 segundos",
                muscles_worked: [
                    "Hombros posteriores",
                    "Trapecios",
                    "Deltoides",
                ],
                description:
                    "Ejercicio que fortalece la parte posterior de los hombros y ayuda a la salud del hombro.",
                tips: [
                    "Lleva la cuerda hacia la cara con codos altos.",
                    "Aprieta los omóplatos juntos en cada repetición.",
                    "Usa peso moderado para no comprometer técnica.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Curl de bíceps con mancuernas",
                slug: "curl-biceps-mancuernas",
                sets: 4,
                reps: "10-12",
                rest: "60-75 segundos",
                muscles_worked: ["Bíceps"],
                description:
                    "Ejercicio básico de aislamiento para trabajar los bíceps de forma directa con mancuernas.",
                tips: [
                    "Evita balancear el torso.",
                    "Mantén los codos pegados al cuerpo.",
                    "Controla la bajada, no dejes caer el peso.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Press militar con mancuernas",
                slug: "press-militar-mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Hombros", "Tríceps"],
                description:
                    "Ejercicio de empuje vertical que desarrolla fuerza en hombros y tríceps.",
                tips: [
                    "Mantén la espalda recta y evita arquear la zona lumbar.",
                    "Exhala al empujar hacia arriba.",
                    "Controla el descenso lentamente.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Fondos en banco",
                slug: "fondos-en-banco",
                sets: 3,
                reps: "10-12",
                rest: "60-75 segundos",
                muscles_worked: ["Tríceps", "Pectorales"],
                description:
                    "Ejercicio con peso corporal para trabajar principalmente tríceps, con participación secundaria de pecho.",
                tips: [
                    "Coloca las manos al ancho de los hombros.",
                    "Baja lento hasta formar un ángulo de 90° en los codos.",
                    "No dejes que los hombros roten hacia adelante.",
                ],
                image: "",
                video: "",
            },
        ],
    },
    miercoles: {
        day: "Miercoles",
        slug: "miercoles",
        routine: "Glúteo y Pierna (foco posterior y fuerza)",
        description:
            "Rutina centrada en la fuerza de glúteos, isquiotibiales y zona posterior, con ejercicios básicos y accesorios para ganar masa y firmeza.",
        points_key: [
            "Cuida la técnica en los básicos para evitar molestias en rodillas o espalda.",
            "Enfócate en sentir el trabajo en glúteos e isquios más que en cargar excesivo.",
            "Controla siempre la bajada y explota en la subida.",
        ],
        exercises: [
            {
                name: "Hip Thrust con barra pesada",
                slug: "hip-thrust-barra-pesada",
                sets: 5,
                reps: "8-10",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales"],
                description:
                    "Versión pesada del hip thrust para ganar fuerza e hipertrofia en glúteos. Enfocado en trabajar con cargas altas manteniendo la contracción máxima arriba.",
                tips: [
                    "Mantén los pies firmes al ancho de cadera.",
                    "Aprieta fuerte los glúteos arriba y haz una pausa de 2 segundos.",
                    "Evita arquear demasiado la espalda baja.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Peso muerto convencional",
                slug: "peso-muerto-convencional",
                sets: 4,
                reps: "6-8",
                rest: "120 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales", "Espalda baja"],
                description:
                    "Ejercicio compuesto de tracción que trabaja la cadena posterior, ideal para fuerza y volumen en glúteos y femorales.",
                tips: [
                    "Mantén la barra cerca de las piernas.",
                    "Activa el core antes de subir.",
                    "No encorves la espalda, baja con control.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Buenos días con barra ligera",
                slug: "buenos-dias-barra",
                sets: 3,
                reps: "12",
                rest: "75-90 segundos",
                muscles_worked: ["Isquiotibiales", "Glúteos", "Espalda baja"],
                description:
                    "Ejercicio de bisagra de cadera para reforzar la musculatura posterior con menos carga que el peso muerto.",
                tips: [
                    "Flexiona ligeramente las rodillas.",
                    "Inclínate hacia adelante manteniendo la espalda recta.",
                    "Detente cuando sientas estiramiento en los femorales.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Extensión de cadera en banco (hip extension)",
                slug: "hip-extension-banco",
                sets: 3,
                reps: "15",
                rest: "75 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales", "Espalda baja"],
                description:
                    "Ejercicio en máquina/banco inclinado donde se sube el torso contrayendo glúteos y espalda baja.",
                tips: [
                    "No te hiperextiendas demasiado arriba.",
                    "Aprieta glúteos en cada repetición.",
                    "Haz el movimiento controlado, no rebotes.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Prensa inclinada pies altos",
                slug: "prensa-inclinada-pies-altos",
                sets: 3,
                reps: "12-15",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales"],
                description:
                    "Variación de prensa colocando los pies arriba en la plataforma para dar mayor estímulo al glúteo y femorales.",
                tips: [
                    "Baja lento hasta que los muslos lleguen cerca al pecho.",
                    "Empuja con talones.",
                    "No bloquees rodillas.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Abductores en máquina",
                slug: "abductores-maquina",
                sets: 3,
                reps: "20",
                rest: "60 segundos",
                muscles_worked: ["Glúteo medio", "Glúteo menor"],
                description:
                    "Ejercicio de aislamiento para glúteos laterales, ayuda a dar redondez y estabilidad a la cadera.",
                tips: [
                    "Haz el movimiento controlado.",
                    "Mantén 1 segundo de contracción en cada apertura.",
                ],
                image: "",
                video: "",
            },
        ],
    },
    jueves: {
        day: "Jueves",
        slug: "jueves",
        routine: "Pecho, Hombro y Tríceps",
        description:
            "Entrenamiento de empuje enfocado en fortalecer el pecho, los hombros y los tríceps, mejorando fuerza y definición en la parte superior del cuerpo.",
        points_key: [
            "Mantén la espalda apoyada y estable en todos los presses.",
            "No uses pesos que comprometan la técnica.",
            "Exhala al empujar y controla la fase de bajada.",
        ],
        exercises: [
            {
                name: "Press banca con barra",
                slug: "press-banca-barra",
                sets: 4,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Pectorales", "Tríceps", "Hombros anteriores"],
                description:
                    "Ejercicio básico de empuje horizontal que desarrolla el pecho y los tríceps, además de involucrar los hombros.",
                tips: [
                    "Mantén los pies firmes en el suelo.",
                    "Controla la bajada de la barra.",
                    "Evita despegar los glúteos del banco.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Press inclinado con mancuernas",
                slug: "press-inclinado-mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: [
                    "Pectorales superiores",
                    "Hombros anteriores",
                    "Tríceps",
                ],
                description:
                    "Variación en banco inclinado que trabaja la parte superior del pecho y los hombros.",
                tips: [
                    "No arquees la espalda en exceso.",
                    "Controla la bajada de las mancuernas.",
                    "Exhala al empujar hacia arriba.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Elevaciones laterales con mancuernas",
                slug: "elevaciones-laterales-mancuernas",
                sets: 4,
                reps: "12-15",
                rest: "60 segundos",
                muscles_worked: ["Deltoides laterales"],
                description:
                    "Ejercicio de aislamiento para los hombros que da amplitud y redondez a la parte superior.",
                tips: [
                    "Mantén los codos ligeramente flexionados.",
                    "No subas más arriba de los hombros.",
                    "Haz el movimiento controlado, evita impulsarte.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Press militar en máquina o con mancuernas",
                slug: "press-militar",
                sets: 3,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Deltoides", "Tríceps"],
                description:
                    "Ejercicio de empuje vertical que fortalece principalmente los hombros, con asistencia de tríceps.",
                tips: [
                    "Mantén la espalda recta y el core activo.",
                    "No bloquees los codos arriba.",
                    "Exhala al empujar hacia arriba.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Extensión de tríceps en polea con cuerda",
                slug: "extension-triceps-polea-cuerda",
                sets: 3,
                reps: "12-15",
                rest: "60-75 segundos",
                muscles_worked: ["Tríceps"],
                description:
                    "Ejercicio de aislamiento para tríceps realizado en polea alta con cuerda, permitiendo un rango mayor de movimiento.",
                tips: [
                    "Mantén los codos fijos al costado del cuerpo.",
                    "Separa la cuerda al final del movimiento.",
                    "Controla la subida, no dejes que el peso te gane.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Flexiones al fallo",
                slug: "flexiones-al-fallo",
                sets: 2,
                reps: "Al fallo",
                rest: "60 segundos",
                muscles_worked: ["Pectorales", "Tríceps", "Core"],
                description:
                    "Ejercicio con peso corporal para terminar de fatigar el pecho y tríceps, se realiza hasta no poder más repeticiones con buena técnica.",
                tips: [
                    "Mantén el cuerpo alineado como tabla.",
                    "No colapses la cadera.",
                    "Baja el pecho casi hasta tocar el suelo.",
                ],
                image: "",
                video: "",
            },
        ],
    },
    viernes: {
        day: "Viernes",
        slug: "viernes",
        routine: "Glúteo y Pierna (volumen y bombeo)",
        description:
            "Entrenamiento de alto volumen enfocado en glúteos y piernas, con énfasis en congestión y bombeo para mejorar la forma y tonicidad.",
        points_key: [
            "Concéntrate en la contracción máxima en cada repetición.",
            "Mantén los descansos cortos para lograr mayor congestión.",
            "Prioriza técnica sobre peso para evitar lesiones en rodillas o cadera.",
        ],
        exercises: [
            {
                name: "Sentadilla búlgara con mancuernas",
                slug: "sentadilla-bulgara-mancuernas",
                sets: 4,
                reps: "12 por pierna",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Cuádriceps", "Isquiotibiales"],
                description:
                    "Ejercicio unilateral que trabaja glúteos y piernas de forma intensa, ideal para corregir desbalances y dar forma a los glúteos.",
                tips: [
                    "Mantén el torso ligeramente inclinado hacia adelante.",
                    "No dejes que la rodilla delantera sobrepase mucho la punta del pie.",
                    "Aprieta el glúteo al subir.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Hip Thrust con dropset",
                slug: "hip-thrust-dropset",
                sets: 4,
                reps: "10-12 + dropset",
                rest: "90 segundos",
                muscles_worked: ["Glúteos", "Isquiotibiales"],
                description:
                    "Versión del hip thrust con técnica de dropset: tras llegar al fallo con un peso, se reduce la carga y se continúa hasta el fallo nuevamente.",
                tips: [
                    "Haz una pausa de 2 segundos arriba.",
                    "Aprieta fuerte los glúteos al final de cada repetición.",
                    "Controla la bajada.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Prensa inclinada ligera (altas repeticiones)",
                slug: "prensa-inclinada-ligera",
                sets: 3,
                reps: "20",
                rest: "75 segundos",
                muscles_worked: ["Glúteos", "Cuádriceps", "Isquiotibiales"],
                description:
                    "Prensa con peso ligero enfocada en repeticiones altas para congestionar glúteos y piernas.",
                tips: [
                    "Coloca los pies arriba para mayor activación del glúteo.",
                    "No bloquees las rodillas.",
                    "Baja lento y sube controlado.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Patada de glúteo en máquina",
                slug: "patada-gluteo-maquina",
                sets: 3,
                reps: "15 por pierna",
                rest: "60 segundos",
                muscles_worked: ["Glúteos"],
                description:
                    "Ejercicio de aislamiento en máquina para trabajar el glúteo mayor de forma unilateral.",
                tips: [
                    "Mantén el torso estable.",
                    "Aprieta fuerte arriba en cada repetición.",
                    "Haz el movimiento controlado.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Abductores en máquina",
                slug: "abductores-maquina",
                sets: 4,
                reps: "20",
                rest: "60 segundos",
                muscles_worked: ["Glúteo medio", "Glúteo menor"],
                description:
                    "Ejercicio de aislamiento lateral para dar redondez y estabilidad a la cadera.",
                tips: [
                    "Haz las repeticiones de forma lenta.",
                    "Mantén la contracción al final 1 segundo.",
                ],
                image: "",
                video: "",
            },
            {
                name: "Plancha con elevación de pierna",
                slug: "plancha-elevacion-pierna",
                sets: 3,
                reps: "40 segundos por lado",
                rest: "45-60 segundos",
                muscles_worked: ["Core", "Glúteos", "Oblicuos"],
                description:
                    "Variación de plancha que combina trabajo de abdomen y activación de glúteos al elevar la pierna.",
                tips: [
                    "No dejes que la cadera se caiga.",
                    "Haz elevaciones controladas.",
                    "Mantén el core activado.",
                ],
                image: "",
                video: "",
            },
        ],
    },
};
