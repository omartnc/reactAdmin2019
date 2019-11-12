
import * as  authActions from '../redux/actions/authActions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ErrorSwal = withReactContent(Swal);
function handleError(error) {
  console.error("Bir hata oluştu");
  if (error.response && error.response.status && error.response.status === 400) {


    ErrorSwal.fire({
      title: "Hata !",
      text: error.response.data,
      icon: "error",
      onOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods

      }
    }).then(() => {
      return error.response.data
    })

  }
  if (error.response && error.response.status && error.response.status === 401) {
    authActions.logoutUser();
    window.location.href = '/login';
  }
  throw error;
}
export default handleError;