export const INITIAL_STATE_CHARACTER_BY_ID = {
    character: [],
    transformations: [],
    loading: true,
    error: null
};

export const characterByIdReducer = (state, action) => {
    switch (action.type) {
        case "GET_CHARACTER_BY_ID":
            return { ...state, character: action.payload };
        case "GET_TRANSFORMATIONS":
            return { ...state, transformations: action.payload };
        case "LOADING":
            return { ...state, loading: false };
        case "ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
