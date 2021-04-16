import React, { useEffect,useState } from 'react';
import { obtenerSede } from "../../actions/SedeAction";

const DetalleSede = () => {

    const [imagen, setImagen] = useState("");

    useEffect(() => {

        obtenerSede().then(response => {
            console.log('response', response);
            console.log('response', response.data.fotoPortada);
            setImagen("data:image/jpeg;base64," + response.data.fotoPortada)
        })


    }, [imagen])

    return (
       
    );
};

export default DetalleSede;