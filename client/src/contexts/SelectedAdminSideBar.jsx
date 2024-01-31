import React, {createContext, useState} from 'react';

export const SelectedAdminSideBarContext = createContext();

export const SelectedAdminSideBarProvider = ({children}) => {
	const [selectedAdminSideBar, setSelectedAdminSideBar] = useState('Stats');


	const toggleSelectedAdminSideBar = (value) => {
		setSelectedAdminSideBar(value);
	};


	return (
		<SelectedAdminSideBarContext.Provider value={[selectedAdminSideBar, toggleSelectedAdminSideBar]}>
			{children}
		</SelectedAdminSideBarContext.Provider>
	);
};

