import { createContext , useContext , useState , useEffect } from "react";


const AppContext = createContext();


export const AppProvider = ({children}) =>{


const [isdark ,setisdark] = useState(false);
const [search , setsearch]  =useState('');

const toggle = () =>{
const dark = !isdark
       setisdark(dark);
       document.body.classList.toggle("dark-theme" , dark)
       
}

return(

    <AppContext.Provider value = {{ isdark , toggle , setsearch , search}} >
 
       {children}

      </AppContext.Provider>
          )

}
export const globalcontext= () =>  useContext(AppContext);


