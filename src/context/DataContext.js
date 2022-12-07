import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';

const SiteContext = createContext();
export const useSiteContext = () => useContext(SiteContext);


const DataContext = ({ children }) => {

    const [simpsons, setSimpsons] = useState();
    const [newSimpsons, setNewSimpsons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("newSimpsons") && localStorage.getItem("newSimpsons") !== "[]" && localStorage.getItem("newSimpsons") !== 'undefined') {
            setSimpsons(JSON.parse(localStorage.getItem("newSimpsons")))
            return;
        } else {
            axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
                .then((res) => setSimpsons(res.data)).finally(() => setLoading(false));
        }
    }, [])



    const data = {
        loading,
        setLoading,
        simpsons,
        setSimpsons,
        newSimpsons,
        setNewSimpsons,
    }


    return (
        <SiteContext.Provider value={data} >
            {children}
        </SiteContext.Provider>
    )
}

export default DataContext