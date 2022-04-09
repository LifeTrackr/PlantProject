export const GET_COMPANIONS = "GET_COMPANIONS";
const SET_COMPANIONS_REQUEST = "SET_COMPANIONS_REQUEST";
const SET_COMPANIONS_SUCCESS = "SET_COMPANIONS_SUCCESS";
const SET_COMPANIONS_FAILURE = "SET_COMPANIONS_FAILURE";

export const getCompanions = () => ({
  type: GET_COMPANIONS,
});

export const setCompanionsRequest = () => ({
  type: SET_COMPANIONS_REQUEST,
});

export const setCompanionsSuccess = (companions) => ({
  type: SET_COMPANIONS_SUCCESS,
  companions,
});
export const setCompanionsFailure = (error) => ({
  type: SET_COMPANIONS_REQUEST,
  error,
});

const initialState = {
  token: null,
  companions: [],
  error: "",
  message: null,
  loading: false,
};

export const companionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANIONS_REQUEST:
      return { ...state, loading: true };
    case SET_COMPANIONS_SUCCESS:
      return { ...state, companions: action.companions, loading: false };
    case SET_COMPANIONS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
