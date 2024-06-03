import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";
export function Home() {
  const { contarusuariosXempresa, dataempresa } = useEmpresaStore();
  const { data } = useQuery({
    queryKey: ["contar usuarios por empresa", { _idempresa: dataempresa?.id }],
    queryFn: () => contarusuariosXempresa({ _id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
  });
  return <HomeTemplate />;
}
