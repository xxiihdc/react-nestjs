import React from 'react'
import { Outlet } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/index';

const DefaultLayout = () => {
  return (
    <div>
      <div className="navbar my-2">
        <SearchBar/>
      </div>

      <main>
        <Outlet />
      </main>

      <div>Footer</div>
    </div>
  )
}

export default DefaultLayout