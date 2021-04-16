import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    InputLabel,
    Select, MenuItem
} from '@material-ui/core';
import style from '../Tool/Style';
import { guardarCurso } from '../../actions/CursoAction';
import { Link } from 'react-router-dom';

const RegistrarCurso = (props) => {
    const [curso, setCurso] = useState({
        estado: "",
        codigo_curso: '',
        nombre_curso: '',
        descripcion_curso: '',
        creditos_curso: '',
        categoria_curso: '',
    })

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setCurso(anterior => ({
            ...anterior,
            [name]: value
        }))
    }

    const guardarCursoBoton = e => {
        e.preventDefault();

        guardarCurso(curso).then(response => {
            console.log('se registro exitosamente el curso', response);
            props.history.push("/");
        });
    }

    return (
        <Container component='main' maxWidth="md" justify='center'>
            <div style={style.paper}>
                {/* Typografy es un titulo */}
                <Typography component="h1" variant="h5">
                    Registro de curso
            </Typography>
                <form style={style.form} action="">
                    {/* Grid es igual a un div en HTML 5 */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="label-estado">Estado</InputLabel>
                            <Select fullWidth
                                labelId="label-estado"
                                id="estado_select"
                                value={curso.estado}
                                name="estado"
                                onChange={ingresarValoresMemoria}
                            >
                                <MenuItem value={1}>Válido</MenuItem>
                                <MenuItem value={2}>Inválido</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={curso.codigo_curso} type="number" name="codigo_curso" onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese codigo del curso" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={curso.nombre_curso} name="nombre_curso" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese el nombre del curso" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={curso.descripcion_curso} name="descripcion_curso" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese la descripcion del curso" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={curso.creditos_curso} type="number" name="creditos_curso" onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese los creditos del curso" />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <InputLabel id="label-estado">Categoría</InputLabel>
                            <Select fullWidth
                                labelId="label-estado"
                                id="estado_select"
                                value={curso.categoria_curso}
                                name="categoria_curso"
                                onChange={ingresarValoresMemoria}
                            >
                                <MenuItem value={1}>Matematicas</MenuItem>
                                <MenuItem value={2}>Programación</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button type="submit" onClick={guardarCursoBoton} component={Link} button to="/auth/perfil" fullWidth variant="contained" color="secondary" size="large" style={style.submit}>
                                Guardar curso nuevo
                </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarCurso;