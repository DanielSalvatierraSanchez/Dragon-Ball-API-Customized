export const INITIAL_STATE_CHARACTERS = {
    firstPage: 1,
    lastPage: 1,
    page: 1,
    limit: 10,
    loading: false,
    error: null,
    characters: [],
    newCharacters: []
};

export const charactersReducer = (state, action) => {
    switch (action.type) {
        case "GO_TO_FIRST_PAGE":
            return { ...state, loading: false, page: state.firstPage };
        case "GO_TO_LAST_PAGE":
            return { ...state, loading: false, page: state.lastPage };
        case "SET_LAST_PAGE":
            return { ...state, lastPage: action.payload };
        case "NEXT_PAGE":
            return { ...state, loading: false, page: state.page + 1 };
        case "PREVIOUS_PAGE":
            return { ...state, loading: false, page: state.page - 1 };
        case "LOADING":
            return { ...state, loading: true };
        case "ERROR":
            return { ...state, error: action.payload };
        case "GET_CHARACTERS":
            return { ...state, loading: false, characters: [...action.payload] };
        case "ADD_CHARACTER":
            return { ...state, loading: false, newCharacters: [...state.newCharacters, action.payload] };
        default:
            return state;
    }
};
