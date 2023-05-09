import React from 'react'
import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import {Outlet, Link} from 'react-router-dom'
const Admin = () => {
  return (
	<div>
		Admin
		<AdminLogin />
		{/* <AdminSidebar /> kontrollerad import av AdminSidebar när man är inloggad */}
		<div> {/** container för Admin Dashboard */}
			<Outlet />
		</div>
	</div>
  )
}

export default Admin