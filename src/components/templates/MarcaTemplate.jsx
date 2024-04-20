import styled from "styled-components";
import { Btnfiltro, Header, Title, ContentFiltro, AccionTabla, v } from "../../index";
import { useState } from "react";
export function MarcaTemplate() {
  
  return (
    <Container>
    
     
      <header className="header">
        <Header
          
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Marcas
          </Title>
          <Btnfiltro funcion={nuevoRegistro} bgcolor="#f6f3f3"
            textcolor="#353535"
            icono={<v.agregar/>}/>
          
        </ContentFiltro>
       
      </section>
      <section className="area2">
        
      </section>
      <section className="main">
        
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content:end;
  }

`;