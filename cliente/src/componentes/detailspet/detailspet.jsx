import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detailspet= () =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const [mascota, setMascota] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:3000/api/detallsmascota/${id}`);
            setMascota(response.data);
        } catch (error) {
            console.error('Error al obtener datos de las mascotas:', error);
        }
        };

        fetchData();
    }, [id]);


    const adoptar = async (id) => {
        await axios.get(`http://127.0.0.1:3000/api/borrar/${id}`);
        navigate('/mostrar')
    }

    return(
        <div className='resipiente1'>
            <h1>Pet Shelter</h1>
            <div>
                <h2>details about: </h2>
                <button onClick={() => adoptar(mascota._id)}>Adopt Garfield</button>
            </div>
            <div>
            {mascota ? (
                <div>
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
export default Detailspet;