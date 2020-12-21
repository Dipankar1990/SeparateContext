import React,{useContext} from 'react'
const CurrentThemeContext = useContext()
export default function ThemeContext({children}) {
    return (
        <CurrentThemeContext.Provider value={}>
            {children}
        </CurrentThemeContext.Provider>
        
    )
}
