export const formReducer = (state = { email: "", valid: false }, action) => {
    const { type, payload } = action;
    switch (type) {
        case "verifyEmail":
            const regexEmail =
                /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
            return {
                ...state,
                valid: regexEmail.test(payload),
            };

        default:
            return state;
    }
};
