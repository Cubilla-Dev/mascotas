import './Css/add.css';0
import React, {useEffect, useState} from 'react';


const Pethome = () => {
    const [mascota, setMascota] = useState(null);

    useEffect () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/detalle`);
                setMascota(response.data);
            } catch (error) {
                console.error('Error al obtener detalles de la mascota:', error);
            }
        };
    }


    return(
        <div className="contenedor">
            <h1 className='contenedor1'>Pet Shelter</h1>
            <br />
            <h2 className='contenedor2'>These pets are looking for a good home </h2>

            <br />

            <table>
                <thead>
                    <tr className='cont3colun1'>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='cont3fil1'>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr className='cont3fil1'>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr className='cont3fil1'>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>

        </div>   
    )
}

export default Pethome;
