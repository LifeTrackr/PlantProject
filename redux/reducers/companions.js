export const GET_COMPANIONS = "GET_COMPANIONS";
export const GET_EVENTS = "GET_EVENTS";
const SET_EVENTS_REQUEST = "SET_EVENTS_REQUEST";
const SET_EVENTS_SUCCESS = "SET_EVENTS_SUCCESS";
const SET_EVENTS_FAILURE = "SET_EVENTS_FAILURE";
const SET_COMPANIONS_REQUEST = "SET_COMPANIONS_REQUEST";
const SET_COMPANIONS_SUCCESS = "SET_COMPANIONS_SUCCESS";
const SET_COMPANIONS_FAILURE = "SET_COMPANIONS_FAILURE";

export const getCompanions = (token) => ({
  type: GET_COMPANIONS,
  token,
});

export const setCompanionsRequest = () => ({
  type: SET_COMPANIONS_REQUEST,
});

export const setCompanionsSuccess = (companions) => ({
  type: SET_COMPANIONS_SUCCESS,
  companions,
});
export const setCompanionsFailure = (error) => ({
  type: SET_COMPANIONS_FAILURE,
  error,
});

export const getEvents = (token) => ({
  type: GET_EVENTS,
  token,
});

export const setEventsRequest = () => ({
  type: SET_EVENTS_REQUEST,
});

export const setEventsSuccess = (events) => ({
  type: SET_EVENTS_SUCCESS,
  events,
});

export const setEventsFailure = (error) => ({
  type: SET_EVENTS_FAILURE,
  error,
});

const initialState = {
  token: null,
  companions: [],
  error: "",
  message: null,
  events: [],
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
    case SET_EVENTS_REQUEST:
      return { ...state, loading: true };
    case SET_EVENTS_SUCCESS:
      return { ...state, events: action.events, loading: false };
    case SET_EVENTS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
