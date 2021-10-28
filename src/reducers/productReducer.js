const initialState = [
    {
        image: "",
        title: "Pufi RAIN",
        description: "Descripción del producto. Este es un texto simulado",
        buttonToggle: true,
    },
    {
        image: "",
        title: "Pufi PUFF",
        description: "Descripción del producto. Este es un texto simulado",
        buttonToggle: false,
    },
    {
        image: "",
        title: "Pufi CART",
        description: "Descripción del producto. Este es un texto simulado",
        buttonToggle: false,
    },
    {
        image: "",
        title: "Pufi NAP",
        description: "Descripción del producto. Este es un texto simulado",
        buttonToggle: false,
    },
];

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "addProduct":
            return [
                ...state,
                {
                    image: payload.image,
                    title: payload.title,
                    description: payload.description,
                    buttonToggle: payload.buttonToggle,
                },
            ];
        default:
            return state;
    }
};
