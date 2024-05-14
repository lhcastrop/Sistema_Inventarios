export * from "./styles/breackpoints";

export * from "./styles/themes";

export * from "./styles/variables";

export { Device } from "./styles/breackpoints";

export { Dark, Light } from "./styles/themes";

export { v } from "./styles/variables";

export { supabase } from "./supabase/supabase.config";

export { default as App, ThemeContext } from "./App";
export { AuthContextProvider, UserAuth } from "./context/AuthContext";
export {} from "./main";
export { Home } from "./pages/Home";
export { MyRoutes } from "./routers/routes";
export {
  DataModulosConfiguracion,
  DesplegableUser,
  LinksArray,
  SecondarylinksArray,
  TemasData,
  TipoDocData,
  TipouserData,
} from "./utils/dataEstatica";

export * from "./components/organismos/MenuHambur";
export * from "./components/organismos/ToogleTema";
export * from "./components/organismos/sidebar/Sidebar";
export * from "./components/organismos/sidebar/SidebarCard.jsx";

export * from "./components/atomos/Icono";
export * from "./components/atomos/Title";
export * from "./components/moleculas/Btnsave";
export * from "./components/moleculas/CardDatosEmpresa";

export * from "./components/templates/HomeTemplate";

export * from "./store/AuthStore";

export * from "./store/UsuariosStore";

export * from "./components/templates/LoginTemplate";

export * from "./pages/Login";
export * from "./pages/PageBase";

export * from "./hooks/ProtectedRoute";
export * from "./components/moleculas/BtnCircular";

export { InsertarUsuarios } from "./supabase/crudUsuarios";
export * from "./components/organismos/formularios/InputText";
export * from "./components/organismos/FooterLogin";
export * from "./components/organismos/ListaMenuDesplegable";
export * from "./components/organismos/BannerEmpresa";
export * from "./components/organismos/Header";
export * from "./components/organismos/formularios/RegistrarAdmin";

export * from "./supabase/crudEmpresa";

export * from "./components/moleculas/ErrorMolecula";
export * from "./components/moleculas/SpinnerLoader";

export * from "./store/EmpresaStore";

export * from "./supabase/globalsupabase";

export * from "./components/templates/ConfiguracionTemplate";
export * from "./pages/Configuracion";

export * from "./pages/Marca";
export * from "./components/templates/MarcaTemplate";
export * from "./store/MarcaStore";
export * from "./components/organismos/tablas/TablaMarca";
export * from "./components/organismos/ContentAccionesTabla";
export * from "./components/atomos/AccionTabla";
export * from "./supabase/crudMarca";
export * from "./components/organismos/formularios/RegistrarMarca";

export * from "./utils/Conversiones";
export * from "./components/moleculas/Btnfiltro";
export * from "./components/atomos/ContentFiltro";
export * from "./components/organismos/Buscador";

export * from "./components/organismos/tablas/Paginacion";

export * from "./components/templates/CategoriasTemplate";
export * from "./pages/Categorias";
export * from "./store/CategoriasStore";
export * from "./supabase/crudCategorias";
export * from "./components/organismos/formularios/RegistrarCategorias";
export * from "./components/organismos/tablas/TablaCategorias";
export * from "./components/atomos/Colorcontent";

export * from "./components/templates/ProductosTemplate";
export * from "./pages/Productos.jsx";
export * from "./supabase/crudProductos";
export * from "./store/ProductosStore";
export * from "./components/organismos/tablas/TablasProductos";
export * from "./components/atomos/ColorcontentTable";
export * from "./components/organismos/formularios/RegistrarProductos";
export * from "./components/atomos/ContainerSelector";
export * from "./components/organismos/tablas/ListaGenerica";
export * from "./components/atomos/BtnCerrar";
export * from "./components/organismos/tablas/Selector";
