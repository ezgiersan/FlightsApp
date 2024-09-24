
import axios from 'axios';
import showToast from '../../utils/ToastService';

// Action Types
function request(namespace) {
  return {
    type: `${namespace}/POST_DATA_REQUEST`,
  };
}

function success(namespace, data) {
  return {
    type: `${namespace}/POST_DATA_SUCCESS`,
    data,
  };
}

function failure(namespace, error) {
  return {
    type: `${namespace}/POST_DATA_FAILURE`,
    error,
  };
}

// Action Creator
export const postAction = (namespace, values) => async (dispatch) => {
  dispatch(request(namespace));
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/${namespace}`, values);

    dispatch(success(namespace, response.data));
    showToast('Flight reservation completed successfully', 'success');
  } catch (error) {
    dispatch(failure(namespace, error));

    // Hata durumu 409 ise özel mesaj göster
    if (error.response && error.response.status === 409) {
      console.log(error)
      showToast(error.response?.data?.error, 'error');
    } else {
      showToast('An error occurred: ' + (error.response?.data?.message || 'Please try again.'), 'error');
    }
  }
};



