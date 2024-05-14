import { useQuery } from "@tanstack/react-query";
import {
  ProductosTemplate,
  SpinnerLoader,
  useEmpresaStore,
  useProductosStore,
} from "../index";
export function Productos() {
  const { mostrarproductos, dataproductos, buscarproductos, buscador } =
    useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar productos", { id_empresa: dataempresa?.id }],
    queryFn: () => mostrarproductos({ id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const { data: buscardata } = useQuery({
    queryKey: [
      "buscar productos",
      { id_empresa: dataempresa.id, descripcion: buscador },
    ],
    queryFn: () =>
      buscarproductos({ id_empresa: dataempresa.id, descripcion: buscador }),
    enabled: dataempresa.id != null,
  });
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error....</span>;
  }

  return <ProductosTemplate data={dataproductos} />;
}
