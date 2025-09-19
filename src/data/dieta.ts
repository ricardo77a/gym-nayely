export interface Dieta {
    comida: string;
    detalles: { titulo: string; items: string[] }[];
}

export const dieta: Record<string, Dieta> = {
    comida1: {
        comida: "Desayuno",
        detalles: [
            {
                titulo: "Choque Metabólico + Detox (Día 1-7)",
                items: [
                    "4 claras + 1 huevo entero con espinacas",
                    "Té verde",
                    "½ aguacate",
                ],
            },
        ],
    },
    comida2: {
        comida: "Comida",
        detalles: [
            {
                titulo: "Choque Metabólico + Detox (Día 1-7)",
                items: [
                    "150 g de pechuga a la plancha",
                    "Ensalada verde con aceite de oliva",
                    "Calabacitas o espárragos",
                ],
            },
        ],
    },
    comida3: {
        comida: "Merienda",
        detalles: [
            {
                titulo: "Choque Metabólico + Detox (Día 1-7)",
                items: [
                    "Puño de nueces o almendras",
                    "Té de manzanilla o jamaica",
                ],
            },
        ],
    },
    comida4: {
        comida: "Cena",
        detalles: [
            {
                titulo: "Choque Metabólico + Detox (Día 1-7)",
                items: [
                    "1 lata de atún en agua con pepino y limón",
                    "Té de menta",
                ],
            },
        ],
    },
};
