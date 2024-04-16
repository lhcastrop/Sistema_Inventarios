import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";
export function Home() {
  const { contarusuariosXempresa, dataempresa } = useEmpresaStore();
  const { data } = useQuery({
    queryKey: [
      "contar usuarios por empresa",
      { id_empresa: dataempresa.empresa?.id },
    ],
    queryFn: () =>
      contarusuariosXempresa({ id_empresa: dataempresa.empresa?.id }),
    enabled: !!dataempresa
  });
  return <HomeTemplate />;
}
