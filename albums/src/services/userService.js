import apiService from './apiService';
import {get} from '../utils/storageUtils/accessToken'

function fetchUserInfo() {
  var user = get()
  return apiService.post(`/users/${user.id}`)
}

export { fetchUserInfo }