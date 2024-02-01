import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Detailpet= () =>{
    const [mascota, setMascota] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/detalle/${id}`);
                setMascota(response.data);
            } catch (error) {
                console.error('Error al obtener detalles de la mascota:', error);
            }
        };
    })
    return(
          <div className='resipiente1'>
            <h1>Pet Shelter</h1>
            <h2>details about: </h2>
            <div>
            {mascota ? (
                <div>
                    <p>ID: {mascota._id}</p>
                    <p>Nombre: {mascota.nombre}</p>
                    <p>Tipo de Animal: {mascota.tipo_de_animal}</p>
                    <p>Descripción: {mascota.descripcion_de_amimal}</p>
                </div>
            ) : (
                <p>Cargando detalles...</p>
            )}
            </div>
        </div>
    )
};
export default Detailpet;