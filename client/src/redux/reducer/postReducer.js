const initialState = {
    loading: false,
    data: [],
    error: null,
    success: null
  };
  
  export const postReducer = (namespace) => (state = initialState, action) => {
    switch (action.type) {
      case `${namespace}/POST_DATA_REQUEST`: {
        return { ...state, loading: true, error: null };
      }
      case `${namespace}/POST_DATA_SUCCESS`: {
        return { ...state, data: action.data, loading: false, success: true };
      }
      case `${namespace}/POST_DATA_FAILURE`: {
        return { ...state, data: [], loading: false, error: action.error };
      }
      default:
        return state;
    }
  };
  