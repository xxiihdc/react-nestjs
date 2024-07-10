import { jwtDecode } from 'jwt-decode';

function get(){
  return jwtDecode(localStorage.getItem("accessToken"));
}

export { get };
