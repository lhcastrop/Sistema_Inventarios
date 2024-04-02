import styled from "styled-components";
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../moleculas/CardDatosEmpresa";
export function BannerEmpresa() {
  return (
    <Container>
      <div className="content-wrapper-context">
        <span className="titulo">Nombre de empresa</span>
        <div className="content-text">
          En esta pagina puedes gestionar el inventario de tu empresa
        </div>
        <ContentCards>
          <CardDatosEmpresa titulo="Moneda" valor="$" />

          <CardDatosEmpresa titulo="Usuarios" valor="100" />
        </ContentCards>
      </div>
    </Container>
  );
}
const Container = styled.div``;
const ContentCards = styled.div``;
