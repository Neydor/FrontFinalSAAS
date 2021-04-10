export const initialState = {
  usuario: {
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    sexo: "",
    tipo_documento: "",
    numero_documento: "",
    correo_electronico: "",
    celuar: "",
    password: "",
    t003_roles_id_rol: 1,
  },
  auth: false,
};

const sesionUsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado,
      };
    case "SALIR_SESION":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      };
    case "ACTUALIZAR_USUARIO":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      };
    default:
      return state;
  }
};

export default sesionUsuarioReducer;
