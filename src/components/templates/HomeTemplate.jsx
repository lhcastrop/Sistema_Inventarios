import styled from "styled-components";
import {Btnsave, useAuthStore} from "../../index"
export function HomeTemplate(){
    const {signOut} = useAuthStore();
    return(
    <Container>
          <h1>Home template</h1>
          <Btnsave titulo="Cerrar sesion"
          bgcolor="#fff" funcion={signOut}/>
    </Container>       
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;