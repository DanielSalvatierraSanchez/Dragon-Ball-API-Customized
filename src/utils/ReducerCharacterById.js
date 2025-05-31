export const INITIAL_STATE_CHARACTER_BY_ID = {
    character: [],
    transformations: [],
    loading: false,
    error: null
};

export const characterByIdReducer = (state, action) => {
    switch (action.type) {
        case "GET_CHARACTER_BY_ID":
            return { ...state, loading: false, character: action.payload };
        case "GET_TRANSFORMATIONS":
            return { ...state, loading: false, transformations: action.payload };
        case "LOADING":
            return { ...state, loading: true };
        case "ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
