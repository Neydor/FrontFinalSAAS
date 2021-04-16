import HttpCliente from "../servicios/HttpCliente";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarUsuario = (usuario) => {
  return new Promise((resolve, eject) => {
    instancia.post("/newuser", usuario).then((response) => {
      resolve(response);
    });
  });
};

export const obtenerUsuarioActual = (dispatch) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/login")
      .then((response) => {
        console.log("reponse del GET", response);
        if (response.data.loggedIn) {
          dispatch({
            type: "INICIAR_SESION",
            sesion: response.data,
            autenticado: true,
          });
        }
        resolve(response);
      })
      .catch((error) => {
        console.log("error actualizar", error);

        resolve(error);
      });
  });
};

export const actualizarUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpCliente.put("/login", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data,
          autenticado: true,
        });

        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const loginUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/login", usuario)
      .then((response) => {
        console.log("el dispatch", response);
        if (response.data.auth) {
          dispatch({
            type: "INICIAR_SESION",
            sesion: response.data.result,
            autenticado: true,
          });
        }
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
