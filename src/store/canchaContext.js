
import axios from "axios"
import { createContext, useEffect, useState,} from "react"

export const Context = createContext(null)

const CanchaProvider = ({children}) => {
    const [info, setInfo] = useState([])
    

const getInfo = async () => {
    const response = await axios.get("https://apipdtc.herokuapp.com/deportes")
    setInfo(response.data)
 
}

useEffect(() =>{
    getInfo()
  }, [])



return(
    <Context.Provider value={{info, setInfo, getInfo}} >
        {children}

    </Context.Provider>
)
}

export default CanchaProvider