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
    
    instancia.get(`/sedes/${id}`).then((response) => {
      resolve(response);
    });
  });
}


export const actualizarSede = (id, sede) => {
  return new Promise((resolve, eject) => {
    console.log("entro a actualizarSede")
    instancia.put(`/sedes/${id}`, sede).then((response) => {
      resolve(response);
    })
  });
};


export const allSedes = () => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/sedes").then((response) => {
      resolve(response);
    });
  });
};
