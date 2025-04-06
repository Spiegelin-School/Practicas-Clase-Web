//Router:	Envuelve la aplicación y gestiona la navegación.
//Routes:	Agrupa múltiples rutas y muestra solo la primera coincidencia.
//Route:	Define una URL específica y qué componente renderizar.

//Instala lo siguiente
//npm install sockjs-client stompjs


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/mainPages/Home";
import About from "./pages/mainPages/About";
import Dashbord from "./pages/mainPages/Dashbord";
import Default from "./pages/mainPages/Default";
import Ticket from "./pages/mainPages/Ticket";


function App() {
  return (
    <Router>
      <div className="app">
        {/* Barra de navegación */}
        <Navbar />
        {/* Contenido de la página */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="*" element={<Default />} />
            <Route path="/add-ticket" element={<Ticket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
