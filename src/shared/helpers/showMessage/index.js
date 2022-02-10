import {showMessage} from 'react-native-flash-message';
import Colors from '../../styles/colors';

const showSuccess = (msg) => {
  showMessage({
    message: msg,
    type: 'success',
    icon: 'success',
    duration: 3000,
    color: Colors.white,
  });
};

const showError = (msg) => {
  showMessage({
    message: msg,
    type: 'danger',
    icon: 'warning',
    duration: 3000,
    color: Colors.white,
  });
};

export {showSuccess, showError}