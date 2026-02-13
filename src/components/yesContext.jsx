import { createContext, useState } from "react"

export const yesContext = createContext(null)

export const YesProvider = ({ children }) => {
    const [yes, setYes] = useState(false)

    return (
        <yesContext.Provider value={{ yes, setYes }}>
            {children}
        </yesContext.Provider>
    )

}