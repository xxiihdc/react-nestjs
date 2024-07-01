import apiService from 'services/apiService';

// USER
function login(data) {
  return apiService.post('user/login', data);
}

export { login};
