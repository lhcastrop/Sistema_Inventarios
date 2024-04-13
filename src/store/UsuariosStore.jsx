import { create } from "zustand";
import { InsertarUsuarios, supabase } from "../index";
import { MostrarUsuarios } from "../supabase/crudUsuarios";

export const useUsuariosStore = create((set, get) => ({
  insertarUsuarioAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
   
    console.log("data del registro del user auth", data);
    if (error) return;
    const datauser = await InsertarUsuarios({
      idauth: data.user.id,
      fecharegistro: new Date(),
      tipouser: "admin",
    });
    return datauser;
  },
  idusuario:0,
  mostrarUsuarios: async()=>{
    const response = await MostrarUsuarios();
    set({idusuario:response.id})
  }
}));