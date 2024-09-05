import { CanActivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const adminGuard: CanActivateFn = (route, state) => {

  const role = localStorage.getItem('role');
  if(role==='admin')
  {
    return true;
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Permissions Restricted.",
      text: "Please try for other Features",
     
    });
    return false;
  }
};
