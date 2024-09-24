
import toast from 'react-hot-toast';

const showToast = (message, type) => {
  if (type === 'success') {
    toast.success(message);
  } else if (type === 'error') {
    toast.error(message);
  } else {
    toast(message); // Varsayılan bildirim
  }
};

export default showToast;
