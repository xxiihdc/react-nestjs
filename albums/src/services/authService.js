import apiService from './apiService';

// USER
function login(data) {
  return apiService.post('auth/login', data);
}

export { login };
