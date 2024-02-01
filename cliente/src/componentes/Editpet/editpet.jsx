import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Css/edit.css';


const Editpet = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/detallsmascota/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener datos de las mascotas:', error);
            }
        };

        fetchData();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        navigate('/mostrar')
        try {
            const response = await axios.put(`http://127.0.0.1:3000/api/editmascota/${id}`, {
                nombre: nombre,
                tipo_de_animal: tipo,
                descripcion_de_amimal: descripcion,
            });

            console.log('Mascota actualizada con éxito:', response.data);
        } catch (error) {
            console.error('Error al actualizar mascota:', error);
        }
    };

    return (
        <div className='cofre1'>
            <h1 className='cofretitulo1'>Pet Shelter</h1>
            <h2 className='cofretitulo2'>Edit</h2>

            <div className='cofre2'>
                <form onSubmit={onSubmit}>
                    <br />
                    <label className='cofrepequeños1'>Pet Name: </label>
                    <br />
                    <input className='cofrecito1' onChange={(e) => setNombre(e.target.value)} />
                    <br />
                    <label className='cofrepequeñao2'>Pet Type</label>
                    <br />
                    <input className='cofrecito2' onChange={(e) => setTipo(e.target.value)} />
                    <br />
                    <label className='cofrepequeños3'>Pet Description</label>
                    <br />
                    <input className='cofrecito3'  onChange={(e) => setDescripcion(e.target.value)} />
                    <br />
                    <button className='botoncofre' type="submit">Edit Pet</button>
                </form>
            </div>
        </div>
    );
};

export default Editpet;