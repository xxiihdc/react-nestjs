import React, {useEffect} from 'react'
import { fetchUserInfo } from '../../services/userService.js';


const UserPage = () => {
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return(
    <div>
      User Page
    </div>
  )
}

export default UserPage