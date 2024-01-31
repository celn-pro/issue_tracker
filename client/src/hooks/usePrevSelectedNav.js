import {PrevSelectedNavContext} from "../contexts/PrevSelectedNavContext";
import {useContext} from "react";

export const usePrevSelectedNav  = ()=>{
    
    return useContext(PrevSelectedNavContext);
}