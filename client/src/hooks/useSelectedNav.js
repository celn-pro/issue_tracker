import {SelectedNavContext} from "../contexts/SelectNavContext";
import {useContext} from "react";

export const useSelectedNav  = ()=>{
    
    return useContext(SelectedNavContext);
}