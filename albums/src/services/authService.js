import apiService from './apiService';

// USER

function userAuthenticated(){
  return 
}

function login(data) {
  return apiService.post('auth/login', data);
}

export { login };
