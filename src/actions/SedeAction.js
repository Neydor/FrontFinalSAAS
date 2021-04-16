import HttpCliente from "../servicios/HttpCliente";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarSede = (sede) => {
  return new Promise((resolve, eject) => {
    instancia.post("/sedes", sede).then((response) => {
      resolve(response);
    });
  });
};

export const consultarSede = (id) => {
    return new Promise((resolve, eject) => {
        instancia.post('/Curso/:id_curso', id).then((response) => {
          resolve(response);
        });
      });
}
export const actualizarSede = (sede, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpCliente.put("/sedes", sede)
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


