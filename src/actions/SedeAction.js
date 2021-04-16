import HttpCliente from '../servicios/HttpCliente';


export const guardarSede = async (sede, imagen) => {
    const endPointCurso = '/sedes';
    const promesaCurso = HttpCliente.post(endPointSede, sede);
    
    if(imagen){
        const endPointImagen = '/documento';    
        const promesaImagen = HttpCliente.post(endPointImagen, imagen);
        return await Promise.all([promesaSede, promesaImagen]);
    }else{
        return await Promise.all([promesaSede]);
    }
};


export const paginacionSede = (paginador) => {
    return new Promise((resolve, eject) => {
        HttpCliente.post('/cursos/report', paginador).then(response => {
            resolve(response);
        })
    })
}

