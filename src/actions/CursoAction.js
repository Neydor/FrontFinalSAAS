import HttpCliente from '../servicios/HttpCliente';


export const guardarCurso = async (curso, imagen) => {
    const endPointCurso = '/cursos';
    const promesaCurso = HttpCliente.post(endPointCurso, curso);
    return await Promise.all([promesaCurso]);
};


export const paginacionCurso = (paginador) => {
    return new Promise((resolve, eject) => {
        HttpCliente.get('/cursos', paginador).then(response => {
            resolve(response);
        })
    })
}

export const consultarCurso = (id) => {
    return new Promise((resolve, eject) => {
      
      instancia.get(`/cursos/:id_curso${id}`).then((response) => {
        resolve(response);
      });
    });
  }
  export const actualizarCurso = (id, curso) => {
    return new Promise((resolve, eject) => {
      console.log("entro a actualizarCurso")
      instancia.put(`/cursos/:id_curso${id}`, curso).then((response) => {
        resolve(response);
      })
    });
  };
