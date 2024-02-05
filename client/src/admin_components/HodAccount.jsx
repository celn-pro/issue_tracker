import SideBar from './SideBar';
import Home from './Home'

import {SelectedAdminSideBarProvider} from '../contexts/SelectedAdminSideBar';

function AdminDashboard({userData}) {

	return (
		<SelectedAdminSideBarProvider>
			<div className='px-[50px] py-[50px]'>
				<SideBar />
				<Home userData={userData} />
			</div>
		</SelectedAdminSideBarProvider>
	)
}

export default AdminDashboard;