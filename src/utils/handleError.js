
import * as  authActions from '../redux/actions/authActions';

function handleError(error) {
  debugger;
  console.error("Bir hata oluştu");
  if (error.response && error.response.status && error.response.status === 400) {
    return error.response.data
  }
  if (error.response && error.response.status && error.response.status === 401) {
    authActions.logoutUser();
    window.location.href = '/login';
  }
  throw error;
}
export default handleError;