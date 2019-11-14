
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const LoadingSwal = withReactContent(Swal);


function handleLoading(isLoading) {

  if (isLoading) {
    LoadingSwal.fire({
      title: "",
      text: "",
      icon: "",
      width: 600,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      background: '#ffffff00',
      backdrop: "#ffffffad",
      html:'<img src="/loadingGif.gif"/>',
      allowOutsideClick: false,
      onOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods

      }
    })
  }else{
    LoadingSwal.close()
  }

}

  
  export default handleLoading;