
import axios from "axios"
import { createContext, useEffect, useState,} from "react"

export const Context = createContext(null)

const CanchaProvider = ({children}) => {
    const [info, setInfo] = useState([])
    const [futbol, setFutbol] = useState([])
    const [tenis, setTenis] = useState([])
    const [voley, setVoley] = useState([])
    

const getInfo = async () => {
    const response = await axios.get("https://apipdtc.herokuapp.com/deportes")
    setInfo(response.data)
 
}

const getFutbol = async () =>{
    const response = await axios.get("https://apipdtc.herokuapp.com/futbol")
    setFutbol(response.data)

}

const getTenis = async () =>{
    const response = await axios.get("https://apipdtc.herokuapp.com/tenis")
    setTenis(response.data)

}

const getVoley = async () =>{
    const response = await axios.get("https://apipdtc.herokuapp.com/voley")
    setVoley(response.data)

}





useEffect(() =>{
    getInfo()
  }, [])



return(
    <Context.Provider value={{info, setInfo, getInfo, futbol, getFutbol, setFutbol, tenis, setTenis, getTenis, voley, setVoley, getVoley}} >
        {children}

    </Context.Provider>
)
}

export default CanchaProvider