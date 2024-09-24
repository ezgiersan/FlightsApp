const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  export const getReducer = (namespace) => (state = initialState, action) => {
    switch (action.type) {
      case `${namespace}/GET_DATA_REQUEST`: {
        return { ...state, loading: true, error: null };
      }
      case `${namespace}/GET_DATA_SUCCESS`: {
        return { ...state, data: action.data, loading: false };
      }
      case `${namespace}/GET_DATA_FAILURE`: {
        return { ...state, data: [], loading: false, error: action.error };
      }
      default:
        return state;
    }
  };
  