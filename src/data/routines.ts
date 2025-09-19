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
        routine: "Pecho y Tríceps",
        description:
            "Enfoque en el desarrollo de la fuerza y volumen para el pecho y los tríceps.",
        points_key: [
            "Controla el movimiento en todas las fases del ejercicio.",
            "Evita usar peso excesivo que comprometa la técnica.",
            "Mantén el core activo y la espalda recta en todo momento.",
        ],
        exercises: [
            {
                name: "Press de banca",
                slug: "press-de-banca",
                sets: 4,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Pectorales", "Tríceps"],
                description:
                    "El press de banca es un ejercicio de levantamiento de pesas que apunta a los músculos del pecho, hombros y tríceps. Se realiza típicamente acostado en una banca con una barra o mancuernas, y consiste en presionar el peso hacia arriba desde el pecho.",
                tips: [
                    "Mantén los pies bien plantados en el suelo.",
                    "Controla el descenso y exhala al empujar.",
                    "Baja la barra de manera controlada hasta que toque ligeramente tu pecho.",
                    "Manten los codos en un ángulo de 45°.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/24401105-Barbell-Bench-Press-female_Chest_max.webp",
                video: "https://eresfitness.com/wp-content/uploads/2020/04/00251205-Barbell-Bench-Press_Chest-flat.mp4?_=1",
            },
            {
                name: "Press inclinado con mancuernas",
                slug: "press-inclinado-con-mancuernas",
                sets: 3,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Pectorales superiores", "Tríceps"],
                description:
                    "El press de banca inclinado con barra es un ejercicio clásico para el fortalecimiento del pecho y los hombros. Es una excelente manera de agregar variedad a tu entrenamiento y trabajar diferentes partes de los músculos del pecho. Este ejercicio también puede mejorar tu fuerza general en la parte superior del cuerpo, lo que puede tener un impacto positivo en tu rendimiento en otros ejercicios. ",
                tips: [
                    "Mantén el core firme y evita arquear la espalda.",
                    "Controla la bajada de las mancuernas.",
                    "Pausa brevemente en la posición final y luego baja las mancuernas lentamente a la posición inicial mientras inhalas. Repite el movimiento para completar el número deseado de repeticiones.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/24411105-Dumbbell-Incline-Bench-Press-female_Chest_max.webp",
                video: "https://eresfitness.com/wp-content/uploads/00471205-Barbell-Incline-Bench-Press_Chest-flat.mp4?_=1",
            },
            {
                name: "Press de banca con agarre cerrado",
                slug: "press-de-banca-con-agarre-cerrado",
                sets: 3,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Tríceps", "Pectorales"],
                description:
                    "Este ejercicio es una variación del press de banca tradicional que enfatiza el trabajo de los tríceps. Se realiza con un agarre más cerrado, lo que reduce la participación de los pectorales y aumenta la carga sobre los tríceps.",
                tips: [
                    "Coloca las manos a una distancia ligeramente menor al ancho de los hombros.",
                    "Mantén los codos pegados al cuerpo durante el movimiento.",
                    "Evita usar un peso excesivo para no comprometer la técnica.",
                    "Controla el descenso y empuja explosivamente al subir.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/2019/11/Press-cerrado-para-triceps.webp",
                video: "https://eresfitness.com/wp-content/uploads/2019/11/00301205-Barbell-Close-Grip-Bench-Press_Upper-Arms.mp4?_=1",
            },
            {
                name: "Aperturas con mancuernas",
                slug: "aperturas-con-mancuernas",
                sets: 3,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Pectorales"],
                description:
                    "Los músculos que se trabajan con la apertura con mancuernas en banco plano son el esternocostal del pectoral mayor, la zona de los hombros y los pectorales. En suma, se trata de un ejercicio del que se necesita cierto nivel de esfuerzo muscular.",
                tips: [
                    "Mantén una ligera flexión en los codos.",
                    "No bajes las mancuernas demasiado para evitar tensar los hombros.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/22531105-Dumbbell-Fly-female_Chest_max.webp",
                video: "https://eresfitness.com/wp-content/uploads/03081205-Dumbbell-Fly_Chest-flat.mp4?_=1",
            },
            {
                name: "Extensiones de tríceps en polea",
                slug: "extensiones-de-triceps-en-polea",
                sets: 3,
                reps: "10-12",
                rest: "60-90 segundos",
                muscles_worked: ["Tríceps"],
                description:
                    "Este ejercicio solo trabaja los tríceps y el ancóneo. Debido a que son los requeridos para este entrenamiento. Entre 10 y 15 repeticiones, permitirán la tonificación de la musculatura en unos días. De esta forma, podrás ver resultados en poco tiempo sin tener que cambiar la rutina que hayas establecido.",
                tips: [
                    "Mantén los codos fijos durante el movimiento.",
                    "Controla tanto la subida como la bajada.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/24381105-Cable-Pushdown-with-rope-attachment-female_Upper-Arms_max.webp",
            },
            {
                name: "Press francés",
                slug: "press-frances",
                sets: 3,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Tríceps"],
                description:
                    "El press francés o rompecráneos es un ejercicio completamente de aislamiento que ha sido utilizado de muchas formas en el mundo deportivo, a través de diferentes tipos de levantamiento de pesas. De hecho, es uno de los ejercicios que genera mayor estimulación a nivel del grupo muscular del tríceps.",
                tips: [
                    "Evita mover los codos hacia afuera.",
                    "Baja la barra controladamente hacia la frente.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/2019/05/Press-franc%C3%A9s.jpg.webp",
            },
        ],
    },
    martes: {
        day: "Martes",
        slug: "martes",
        routine: "Espalda y Bíceps",
        description:
            "Rutina enfocada en el desarrollo de los dorsales, bíceps y la fuerza de tracción.",
        points_key: [
            "Mantén la espalda recta y el core activo en todos los ejercicios.",
            "Controla el movimiento para evitar usar impulso.",
        ],
        exercises: [
            {
                name: "Jalón al pecho",
                slug: "jalon-al-pecho",
                sets: 3,
                reps: "10-12",
                rest: "60-90 segundos",
                muscles_worked: ["Dorsales", "Bíceps"],
                description:
                    "Desarrolla los dorsales y mejora la amplitud de la espalda.",
                tips: [
                    "Inclina ligeramente el torso hacia atrás.",
                    "Tira de la barra hacia tu pecho mientras aprietas los omóplatos.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/2020/02/01971105-Cable-Pulldown-pro-lat-bar_Back_max.png",
                video: "https://eresfitness.com/wp-content/uploads/2020/02/01971205-Cable-Pulldown-pro-lat-bar_Back-flat.mp4?_=1",
            },
            {
                name: "Remo con polea baja",
                slug: "remo-con-polea-baja",
                sets: 4,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Dorsales", "Romboides", "Bíceps"],
                description:
                    "Trabaja la parte media de la espalda con un movimiento controlado.",
                tips: [
                    "Tire con los codos, no con los bíceps.",
                    "La espalda debe estar recta y los codos cerca del cuerpo. Sostenga el torso en situación vertical.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/2020/02/02391105-Cable-Straight-Back-Seated-Row_Back_max.png",
                video: "https://eresfitness.com/wp-content/uploads/2020/02/26611205-Cable-Seated-Row-with-V-bar_Back-flat.mp4?_=1",
            },
            {
                name: "Pullover en polea o máquina",
                slug: "pullover-en-polea-o-maquina",
                sets: 3,
                reps: "12 - 15",
                rest: "60 - 90 segundos",
                muscles_worked: ["Dorsales"],
                description:
                    " Excelente para aislar los dorsales sin involucrar demasiado los brazos.",
                tips: [
                    "Mantén los codos ligeramente flexionados.",
                    "Lleva la barra hacia los muslos en un movimiento controlado.",
                ],
                //video: "https://eresfitness.com/wp-content/uploads/2020/02/18651205-Hammer-Grip-Pull-up-on-Dip-Cage_Back-flat.mp4?_=1",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbn7LQm_xQr72nW-Az8qzycT7QuFrpGCjolwF4D7El6cLiUj70nry_vbrAG2vqXM-oV1DF1bfAeJxW6XUTow9n9uIxbdEGxG4R4yYun9nDkaCBezCVTih2Q0XitzxPieIH42O8dDtFkEA/s1600/pullover-polea-barra.jpg",
            },
            {
                name: "Curl de bíceps con barra",
                slug: "curl-de-biceps-con-barra",
                sets: 3,
                reps: "10-12",
                rest: "60-90 segundos",
                muscles_worked: ["Bíceps braquial"],
                description:
                    "El curl con barra Z agarre supino es un ejercicio altamente efectivo para trabajar los músculos de los brazos, especialmente los bíceps. Este movimiento es ideal para aquellos que buscan aumentar la fuerza y el tamaño de sus brazos. ¡Agrega este ejercicio a tu rutina y comienza a ver los resultados!.",
                tips: [
                    "Mantén los codos pegados al torso.",
                    "Controla el movimiento tanto al subir como al bajar.",
                ],
                video: "https://eresfitness.com/wp-content/uploads/04471205-EZ-Barbell-Curl_Upper-Arms-flat.mp4?_=1",
                image: "https://eresfitness.com/wp-content/uploads/04471205-EZ-Barbell-Curl_Upper-Arms-flat.mp4?_=1",
            },
            {
                name: "Curl martillo",
                slug: "curl-martillo",
                sets: 3,
                reps: "10-12",
                rest: "60-90 segundos",
                muscles_worked: ["Bíceps", "Antebrazos"],
                description: "Desarrolla tanto los bíceps como los antebrazos.",
                tips: [
                    "Mantén una postura erguida y evita el impulso.",
                    "Controla el movimiento en ambas fases.",
                    "En la posición contraída, aprieta los músculos de los brazos durante un segundo y luego baja lentamente las mancuernas a la posición inicial.",
                    "Sin mover los brazos, dobla los codos y lleva las mancuernas hacia los hombros, manteniendo las palmas hacia adentro en todo momento. Siente la contracción en los bíceps y antebrazos.",
                ],
                video: "https://eresfitness.com/wp-content/uploads/2019/05/03131205-Dumbbell-Hammer-Curl_Forearms-flat.mp4?_=1",
                image: "https://eresfitness.com/wp-content/uploads/03131105-Dumbbell-Hammer-Curl_Forearm_max.webp",
            },
            {
                name: "Predicador",
                slug: "predicador",
                sets: 3,
                reps: "12-15",
                rest: "60-90 segundos",
                muscles_worked: ["Bíceps braquial"],
                description: "Aísla los bíceps para un trabajo más enfocado.",
                tips: [
                    "Evita despegar el brazo del soporte (banco).",
                    "Controla el movimiento y evita usar impulso.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/31031105-Lever-Preacher-Curl-plate-loaded-female_Upper-Arms_max.webp",
                video: "https://eresfitness.com/wp-content/uploads/2020/12/18721205-Lever-Preacher-Curl-plate-loaded_Upper-Arms.mp4?_=1",
            },
        ],
    },
    miercoles: {
        day: "Miercoles",
        slug: "miercoles",
        routine: "Piernas",
        description:
            "Rutina enfocada en el desarrollo del tren inferior, incluyendo fuerza y resistencia.",
        points_key: [
            "Mantén el core activo para proteger la zona lumbar.",
            "Realiza los movimientos de forma controlada.",
            "Evita sobrecargar si compromete la técnica.",
        ],
        exercises: [
            {
                name: "Sentadilla",
                slug: "sentadilla",
                sets: 4,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
                description:
                    "Ejercicio compuesto para trabajar todo el tren inferior.",
                tips: [
                    "Mantén la espalda recta y el peso en los talones.",
                    "Baja hasta que los muslos estén paralelos al suelo.",
                ],
                video: "https://eresfitness.com/wp-content/uploads/14621205-Barbell-Full-Squat-Side-POV_Thighs-flat.mp4?_=2",
                image: "https://eresfitness.com/wp-content/uploads/Sentadilla-completa-con-barra.webp",
            },
            {
                name: "Prensa de piernas",
                slug: "prensa-de-piernas",
                sets: 4,
                reps: "10-12",
                rest: "90 segundos",
                muscles_worked: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
                description:
                    "Ejercicio para trabajar el tren inferior con menor estrés en la espalda.",
                tips: [
                    "Evita bloquear las rodillas al extender las piernas.",
                    "Mantén los pies bien posicionados en la plataforma.",
                ],
            },
            {
                name: "Peso muerto rumano",
                slug: "peso-muerto-rumano",
                sets: 3,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Isquiotibiales", "Glúteos", "Espalda baja"],
                description:
                    "Ejercicio para fortalecer la parte posterior de las piernas.",
                tips: [
                    "Mantén la espalda recta durante todo el movimiento.",
                    "Empuja las caderas hacia atrás y controla la bajada.",
                ],
                image: "https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp",
                video: "https://eresfitness.com/wp-content/uploads/14591205-Dumbbell-Romanian-Deadlift_Hips-flat_1.mp4?_=1",
            },
            {
                name: "Extensiones de piernas",
                slug: "extensiones-de-piernas",
                sets: 3,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Cuádriceps"],
                description: "Aisla y trabaja específicamente los cuádriceps.",
                tips: [
                    "Controla el movimiento tanto al subir como al bajar.",
                    "Evita usar impulso para levantar el peso.",
                ],
            },
            {
                name: "Curl de piernas",
                slug: "curl-de-piernas",
                sets: 3,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Isquiotibiales"],
                description: "Ejercicio para aislar los isquiotibiales.",
                tips: [
                    "Controla el peso en la fase de bajada.",
                    "Evita despegar las caderas del asiento.",
                ],
            },
            {
                name: "Elevación de talones (gemelos)",
                slug: "elevacion-de-talones-gemelos",
                sets: 4,
                reps: "12-15",
                rest: "60 segundos",
                muscles_worked: ["Pantorrillas"],
                description: "Fortalece los músculos de la pantorrilla.",
                tips: [
                    "Mantén el control al subir y bajar.",
                    "Evita rebotar en la parte inferior del movimiento.",
                ],
            },
        ],
    },
    jueves: {
        day: "Jueves",
        slug: "jueves",
        routine: "Hombros y Trapecio",
        description:
            "Enfoque en el desarrollo de los deltoides y trapecios, fortaleciendo la parte superior.",
        points_key: [
            "Controla el movimiento para evitar lesiones.",
            "Mantén el core activo durante los ejercicios.",
            "Evita usar peso excesivo que comprometa la técnica.",
        ],
        exercises: [
            {
                name: "Press militar con barra",
                slug: "press-militar-con-barra",
                sets: 4,
                reps: "8-12",
                rest: "90 segundos",
                muscles_worked: ["Deltoides", "Tríceps", "Trapecios"],
                description: "Ejercicio base para desarrollar los hombros.",
                tips: [
                    "Mantén una ligera flexión en las rodillas para estabilidad.",
                    "Evita balancearte y controla el movimiento.",
                ],
            },
            {
                name: "Elevaciones laterales",
                slug: "elevaciones-laterales",
                sets: 3,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Deltoides laterales"],
                description:
                    "Aisla los deltoides laterales para mejorar la amplitud del hombro.",
                tips: [
                    "Mantén una ligera flexión en los codos.",
                    "Evita balancearte y controla la subida.",
                ],
            },
            {
                name: "Elevaciones frontales",
                slug: "elevaciones-frontales",
                sets: 3,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Deltoides anteriores"],
                description: "Fortalece los deltoides frontales.",
                tips: [
                    "No subas más allá de la altura de los hombros.",
                    "Controla el movimiento al bajar.",
                ],
                video: "https://eresfitness.com/wp-content/uploads/2019/09/03101205-Dumbbell-Front-Raise_Shoulders-flat.mp4?_=1",
                image: "https://eresfitness.com/wp-content/uploads/22331105-Dumbbell-Front-Raise-female_Shoulders_max.webp",
            },
            {
                name: "Face pull",
                slug: "remo-pull",
                sets: 3,
                reps: "12-15",
                rest: "60-90 segundos",
                muscles_worked: ["Trapecios", "deltoides posteriores"],
                description:
                    "Mejora la postura y fortalece los trapecios y deltoides traseros.",
                tips: [
                    "ira de la cuerda hacia tu cara manteniendo los codos elevados.",
                    "Asegúrate de apretar los omóplatos al final del movimiento.",
                ],
            },
            {
                name: "Encogimientos de hombros",
                slug: "encogimientos-de-hombros",
                sets: 4,
                reps: "10-15",
                rest: "60-90 segundos",
                muscles_worked: ["Trapecios superiores"],
                description: "Ejercicio para fortalecer los trapecios.",
                tips: [
                    "Encoge los hombros hacia arriba como si quisieras tocar las orejas.",
                    "Evita girar los hombros, simplemente sube y baja.",
                ],
            },
        ],
    },
    viernes: {
        day: "Viernes",
        slug: "viernes",
        routine: "Full Body Metabólico + Abdomen",
        description:
            "Circuito de cuerpo completo con énfasis en alta repetición y activación del core.",
        points_key: [
            "Haz 3 rondas sin descanso entre ejercicios.",
            "Descansa 30-45 seg entre rondas.",
            "Mantén una técnica controlada.",
        ],
        exercises: [
            {
                name: "Sentadilla con mancuernas",
                slug: "sentadilla-mancuernas",
                sets: 3,
                reps: "12-15",
                rest: "30-45 seg",
                muscles_worked: ["Piernas", "Glúteos", "Core"],
                description:
                    "Ejercicio base para el tren inferior en circuito.",
                tips: [
                    "Mantén la espalda recta",
                    "Aprieta el abdomen al subir",
                ],
            },
            {
                name: "Press militar con mancuernas",
                slug: "press-militar-mancuernas",
                sets: 3,
                reps: "12-15",
                rest: "30-45 seg",
                muscles_worked: ["Hombros", "Tríceps"],
                description: "Ejercicio para hombros con carga ligera.",
                tips: ["Evita balancearte", "Controla la bajada"],
            },
            {
                name: "Peso muerto rumano (ligero)",
                slug: "peso-muerto-rumano",
                sets: 3,
                reps: "12-15",
                rest: "30-45 seg",
                muscles_worked: ["Isquiotibiales", "Glúteos", "Espalda baja"],
                description: "Variación ligera para enfoque metabólico.",
                tips: ["Desciende con control", "No curvar la espalda"],
            },
            {
                name: "Remo con mancuerna",
                slug: "remo-mancuerna",
                sets: 3,
                reps: "12-15",
                rest: "30-45 seg",
                muscles_worked: ["Espalda", "Bíceps"],
                description: "Trabajo de tracción en circuito.",
                tips: ["Lleva el codo hacia atrás", "Mantén el torso estable"],
            },
            {
                name: "Zancadas alternadas",
                slug: "zancadas-alternadas",
                sets: 3,
                reps: "12-15 por pierna",
                rest: "30-45 seg",
                muscles_worked: ["Piernas", "Glúteos"],
                description: "Ejercicio dinámico para tren inferior.",
                tips: ["Mantén el torso recto", "Controla el movimiento"],
            },
            {
                name: "Curl de bíceps + patada de tríceps (combo)",
                slug: "combo-biceps-triceps",
                sets: 3,
                reps: "12-15",
                rest: "30-45 seg",
                muscles_worked: ["Bíceps", "Tríceps"],
                description: "Ejercicio combinado para brazos.",
                tips: ["Controla ambos movimientos", "Evita balancearte"],
            },
            {
                name: "Plancha 1 min + 20 crunches",
                slug: "core-circuito",
                sets: 3,
                reps: "1 min plancha + 20 crunches",
                rest: "30 seg",
                muscles_worked: ["Core", "Abdominales"],
                description: "Combo abdominal para cerrar el circuito.",
                tips: ["Aprieta el abdomen", "No subas la cadera"],
            },
        ],
    },
    sabado: {
        day: "Sabado",
        slug: "sabado",
        routine: "HIIT + Core",
        description:
            "Entrenamiento cardiovascular de alta intensidad con énfasis en abdomen.",
        points_key: [
            "Haz 4 ejercicios en bloques de 30 seg trabajo / 15 seg descanso.",
            "Repite 3-4 bloques según condición.",
            "Enfócate en la técnica en core.",
        ],
        exercises: [
            {
                name: "Jumping jacks",
                slug: "jumping-jacks",
                sets: 4,
                reps: "30 seg",
                rest: "15 seg",
                muscles_worked: ["Piernas", "Hombros", "Core"],
                description: "Calentamiento y cardio base.",
            },
            {
                name: "Sentadillas con salto",
                slug: "sentadillas-salto",
                sets: 4,
                reps: "30 seg",
                rest: "15 seg",
                muscles_worked: ["Piernas", "Glúteos", "Core"],
                description: "Explosividad y trabajo de piernas.",
            },
            {
                name: "Mountain climbers",
                slug: "mountain-climbers",
                sets: 4,
                reps: "30 seg",
                rest: "15 seg",
                muscles_worked: ["Core", "Piernas", "Hombros"],
                description: "Cardio intenso con core activo.",
            },
            {
                name: "Burpees",
                slug: "burpees",
                sets: 4,
                reps: "30 seg",
                rest: "15 seg",
                muscles_worked: ["Full body", "Core"],
                description: "Ejercicio full body de alta intensidad.",
            },
            {
                name: "Crunch inverso",
                slug: "crunch-inverso",
                sets: 3,
                reps: "20",
                rest: "30 seg",
                muscles_worked: ["Abdominales inferiores", "Core"],
                description: "Trabajo del abdomen inferior.",
            },
            {
                name: "Plancha lateral",
                slug: "plancha-lateral",
                sets: 3,
                reps: "30 seg por lado",
                rest: "30 seg",
                muscles_worked: ["Oblicuos", "Core"],
                description: "Aísla oblicuos y fortalece el core.",
            },
            {
                name: "Russian twists",
                slug: "russian-twists",
                sets: 3,
                reps: "30",
                rest: "30 seg",
                muscles_worked: ["Abdominales oblicuos", "Core"],
                description: "Rotación para abdominales oblicuos.",
            },
            {
                name: "Ab wheel o crunch con mancuerna",
                slug: "ab-wheel-o-crunch",
                sets: 3,
                reps: "15",
                rest: "30 seg",
                muscles_worked: ["Abdominales"],
                description: "Trabajo profundo de recto abdominal.",
            },
        ],
    },
};
