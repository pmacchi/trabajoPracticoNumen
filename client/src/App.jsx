import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="font-bold">Home Page</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<h1>Mostrar Tareas</h1>} />
          <Route path="/add-tasks" element={<h1>Agregar Tarea</h1>} />
          <Route path="/tasks/:id" element={<h1>Buscar Tarea por ID</h1>} />
          <Route path="/profile" element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App