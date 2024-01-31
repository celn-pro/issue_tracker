import {SelectedAdminSideBarContext} from "../contexts/SelectedAdminSideBar";
import {useContext} from "react";

export const useSelectedAdminSideBar=()=>{
	return useContext(SelectedAdminSideBarContext)
}