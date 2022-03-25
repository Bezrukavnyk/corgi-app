import { useState, useEffect } from "react";

import ThemeContext from '../../context/ThemeContext'


const WraperProvider = ({children}) => {
    const [theme, setTheme] = useState('light');


 const changeTheme = (boolean) =>{
  if(boolean){
     setTheme('dark')
  }else if(!boolean){
    setTheme('light')
  }
}
const {Provider} = ThemeContext;

useEffect(()=>{
    
}, [theme])

    return ( 
        <Provider value={{theme, changeTheme}}>
            {children}
        </Provider>
     );
}
 
export default WraperProvider;