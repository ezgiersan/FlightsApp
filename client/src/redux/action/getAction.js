
import axios from 'axios';
import showToast from '../../utils/ToastService';

// Action Types
function request(namespace) {
  return {
    type: `${namespace}/GET_DATA_REQUEST`,
  };
}

function success(namespace, data) {
  return {
    type: `${namespace}/GET_DATA_SUCCESS`,
    data,
  };
}

function failure(namespace, error) {
  return {
    type: `${namespace}/GET_DATA_FAILURE`,
    error,
  };
}

// Action Creator
export const getAction = (namespace, params = {}) => async (dispatch) => {
  dispatch(request(namespace));
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${namespace}`, {
      params,
    });

    dispatch(success(namespace, response.data));
  } catch (error) {
    dispatch(failure(namespace, error));
    showToast(error, 'error');

  }
};


