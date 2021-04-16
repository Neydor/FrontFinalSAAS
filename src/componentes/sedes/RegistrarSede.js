import React, { useState } from 'react';
import {Container, Typography, Grid, TextField, Button} from '@material-ui/core';
import style from '../Tool/Style';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ImageUploader from 'react-images-upload';
import {v4 as uuidv4} from 'uuid';
import {obtenerDataImagen} from '../../actions/ImagenAction';
import { guardarSede } from '../../actions/SedeAction';
import { useStateValue } from '../../contexto/store';

const NuevaSede = () => {
    const [{sesionUsuario}, dispatch]  = useStateValue();
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

    const [imagenCurso , setImagenCurso] = useState(null);

    const [curso, setSede] = useState({
        nombre : '',
        descripcion : '',
        ubicacion : '',
    });

    const resetearForm = () => {
        setFechaSeleccionada(new Date());
        setImagenCurso(null);
        setSede({
            nombre : '',
            descripcion : '',
            ubicacion : '',
        })
    }

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;

         setSede( (anterior) => ({
             ...anterior,
             [name] : value
         })); 

    }

    const subirFoto = imagenes => {
        const foto = imagenes[0];
        
        obtenerDataImagen(foto).then((respuesta) => {
            setImagenCurso(respuesta);
        })

    }

    const guardarCursoBoton = e => {
        e.preventDefault();
        const cursoId = uuidv4();

        const objetoCurso = {
            nombre : sede.nombre,
            descripcion : sede.descripcion,
            ubicacion: sede.ubicacion,
            fechaPublicacion :  fechaSeleccionada,
            sedeId : sedeId 
        };

        let objetoImagen = null;

        if(imagenCurso){
            objetoImagen = {
                nombre : imagenCurso.nombre,
                data : imagenCurso.data,
                extension : imagenCurso.extension,
                objetoReferencia : cursoId
            };
        }
        
                

        guardarSede(objetoSede, objetoImagen).then(respuestas => {
            const responseSede = respuestas[0];
            const responseImagen = respuestas[1];
            let mensaje = "";

            if(responseSede.status === 200) {
                mensaje += "Se guardo exitosamente la sede"
                resetearForm();
            }else{
                mensaje += "Errores :" + Object.keys(responseSede.data.errors);
            }

            if(responseImagen) {
                if(responseImagen.status === 200){
                    mensaje += ",Se guardo la imagen correctamente"
                }else{
                    mensaje += ",Errores en imagen:" + Object.keys(responseImagen.data.errors);
                }
            }
            
            dispatch({
                type : "OPEN_SNACKBAR",
                openMensaje : {
                    open : true,
                    mensaje : mensaje
                }
            })

        })
    }


    const fotoKey = uuidv4();

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Nueva Sede
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField 
                                name="nombre"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Nombre"
                                value = {sede.nombre}
                                onChange = {ingresarValoresMemoria}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField 
                                name="descripcion"
                                variant="outlined"
                                fullWidth
                                label = "Ingrese Descripcion"
                                value = {curso.descripcion}
                                onChange = {ingresarValoresMemoria}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                name="ubicacion"
                                variant="outlined"
                                fullWidth
                                label = "Ingrese ubicacion de la sede"
                                value = {sede.ubicacion}
                                onChange={ingresarValoresMemoria}
                            />
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker 
                                    value = {fechaSeleccionada}
                                    onChange= {setFechaSeleccionada}
                                    margin="normal"
                                    id="fecha-publicacion-id"
                                    label="Seleccione Fecha de Publicacion"
                                    format="dd/MM/yyyy"
                                    fullWidth
                                    KeyboardButtonProps = {{
                                        "aria-label" : "change date"
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ImageUploader 
                                withIcon = {false}
                                key = {fotoKey}
                                singleImage = {true}
                                buttonText = "Seleccion imagen del curso"
                                onChange = {subirFoto}
                                imgExtension = {[".jpg",".gif",".png","jpeg"]}
                                maxFileSize = {5242880}
                            />
                        </Grid>

                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                style={style.submit}
                                onClick = {guardarSedeBoton}
                            >
                                Guardar nueva Sede
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default RegistrarSede;