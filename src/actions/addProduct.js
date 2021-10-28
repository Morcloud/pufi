export const addProduct = (product) => {
    return {
        type: "addProduct",
        payload: product,
    };
};
