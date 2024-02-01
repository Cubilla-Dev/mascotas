import {
  Routes,
  Route,
} from "react-router-dom";

import Addpet from "./componentes/Addpet/addpet";
import Editpet from "./componentes/Editpet/editpet";
import Detailspet from "./componentes/detailspet/detailspet";
import Pethome from "./componentes/PetHome/petshome";



function App() {
  return (
    <Routes>
        <Route path="/" element={<Addpet/>} />
        <Route path="/mostrar" element={<Pethome/>} />
        <Route path="/editar/:id" element={<Editpet/>} /> 
        <Route path="/detalles/:id" element={<Detailspet/>} /> 
        <Route path="/borrar/:id" /> 
    </Routes>
  );
}

export default App;
