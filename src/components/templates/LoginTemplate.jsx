import styled from "styled-components";
import {Btnsave, useUsuariosStore} from "../../index.js"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export function LoginTemplate(){
    const navigate =useNavigate();
    const {insertarUsuarioAdmin}=useUsuariosStore();
    const mutationInsertUser = useMutation({
        mutationKey:["Insertar usuario admin"],
        mutationFn:async()=>{
            const p={
                correo:"pruebas@gmail.com",
                pass:"MAH123"
            }
            const dt = await insertarUsuarioAdmin(p)
            if(dt){
              navigate("/")
            }

        }
    })
    return(<Container>
        <Btnsave titulo="Crear cuenta" bgcolor="#ffffff" funcion={mutationInsertUser.mutateAsync}/>
    </Container>);
}
const Container = styled.div`
     height:100vh;
`