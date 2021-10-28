export const verifyEmail = (email) => {
    return {
        type: "verifyEmail",
        payload: email,
    };
};
