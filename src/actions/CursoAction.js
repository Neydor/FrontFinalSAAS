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

