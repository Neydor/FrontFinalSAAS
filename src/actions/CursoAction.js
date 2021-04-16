import HttpCliente from '../servicios/HttpCliente';
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;

export const guardarCurso = async (curso, imagen) => {
    const endPointCurso = '/cursos';
    const promesaCurso = HttpCliente.post(endPointCurso, curso);
    return await Promise.all([promesaCurso]);
};


export const paginacionCurso = () => {
    return new Promise((resolve, eject) => {
        HttpCliente.get('/cursos').then(response => {
            resolve(response);
        })
    })
}

export const consultarCurso = (id) => {
    return new Promise((resolve, eject) => {
        instancia.get(`/cursos/${id}`).then((response) => {
            resolve(response);
        });
    });
}
export const actualizarCurso = (id, curso) => {
    return new Promise((resolve, eject) => {
        console.log("entro a actualizarCurso")
        instancia.put(`/cursos/${id}`, curso).then((response) => {
            resolve(response);
        })
    });
};
