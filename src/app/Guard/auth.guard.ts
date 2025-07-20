import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let token=localStorage.getItem('token')
  if(token){
    return true;
  }else{
   alert('Login Plz!')
   return false;
  }
  
};
