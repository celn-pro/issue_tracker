import SideBar from './SideBar';
import Home from './Home'

import {SelectedAdminSideBarProvider} from '../contexts/SelectedAdminSideBar';

function StaffDashboard() {

	return (
		<SelectedAdminSideBarProvider>
			<div className='px-[50px] py-[50px]'>
				<SideBar />
				<Home />
			</div>
		</SelectedAdminSideBarProvider>
	)
}

export default StaffDashboard;