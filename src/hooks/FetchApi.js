export const fetchApi = async (dispatch, page, limit) => {
    dispatch({ type: "LOADING" });

    try {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
        const response = await res.json();

        const lastPage = response.meta.totalPages;
        dispatch({ type: "GET_CHARACTERS", payload: response.items });
        dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
};
