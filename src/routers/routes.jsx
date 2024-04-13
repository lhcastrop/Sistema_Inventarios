import {Routes, Route} from "react-router-dom";
import {Home, Login, ProtectedRoute, UserAuth, useUsuariosStore} from "../index";
import { useQuery } from "@tanstack/react-query";
export function MyRoutes(){
    const { user } = UserAuth();
    const {mostrarUsuarios}=useUsuariosStore();
    const {data,isLoading,error}=useQuery({
      queryKey:["mostrar usuarios"],
      queryFn:mostrarUsuarios,
    });
    if (isLoading){
      return
    }
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    );
  }