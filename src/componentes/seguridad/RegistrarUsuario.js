import React, {useState} from 'react';
import { Container,
    Typography,
    Grid,
    TextField,
    Button,
    Avatar,
    InputLabel,
    Select,MenuItem} from '@material-ui/core';
import style from '../Tool/Style';
import {  registrarUsuario } from '../../actions/UsuarioAction';

const RegistrarUsuario = () => {
    const [usuario, setUsuario] = useState({
        primer_nombre:"",
    segundo_nombre:"",
    primer_apellido:"",
    segundo_apellido:"",
    sexo:"",
    tipo_documento:"",
    numero_documento:"",
    correo_electronico:"",
    celuar:"",
    password:"",
    t003_roles_id_rol:1
    })

    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
            //NombreCompleto : 'vaxi drez'
        }))
    }

    const registrarUsuarioBoton =  e => {
        e.preventDefault();
        
        registrarUsuario(usuario).then(response => {
            console.log('se registro exitosamente el usuario', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
            window.location = '/auth/login';
        });

    }

    return (
        <Container component='main' maxWidth="md" justify='center'>
          <div style={style.paper}>
            {/* Typografy es un titulo */}
            <Typography component="h1" variant="h5">
              Registro de usuario
            </Typography>
            <form style={style.form} action="">
              {/* Grid es igual a un div en HTML 5 */}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputLabel id="label-tipodoc">Tipo de documento</InputLabel>
                  <Select fullWidth
                    labelId="label-tipodoc"
                    id="tipodoc_select"
                    value={usuario.tipo_documento}
                    name="tipo_documento"
                    onChange={ingresarValoresMemoria}
                  >
                    <MenuItem value={1}>Cedula de ciudadania</MenuItem>
                    <MenuItem value={2}>Numero de pasaporte</MenuItem>
                    <MenuItem value={3}>NIT</MenuItem>
                    <MenuItem value={4}>Tarjeta de identidad</MenuItem>
                    <MenuItem value={5}>Registro civil</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.numero_documento} name="numero_documento" onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese numero de documento" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.primer_nombre} name="primer_nombre" variant="standard" onChange={ingresarValoresMemoria}  fullWidth label="Ingrese su primer nombre" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.segundo_nombre} name="segundo_nombre" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese su segundo nombre" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.primer_apellido} name="primer_apellido" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese su primer apellido" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.segundo_apellido} name="segundo_apellido" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese su segundo apellido" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.celuar} type="number" name="celuar" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese su numero de celular" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel id="label-sexo">Sexo</InputLabel>
                  <Select fullWidth
                    labelId="label-sexo"
                    id="sexo"
                    value={usuario.sexo} 
                    name="sexo"
                    onChange={ingresarValoresMemoria}
                  >
                    <MenuItem value={1}>Hombre</MenuItem>
                    <MenuItem value={2}>Mujer</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.correo_electronico} name="correo_electronico" variant="standard" onChange={ingresarValoresMemoria} fullWidth label="Ingrese su Email" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField value={usuario.password} name="password" variant="standard" onChange={ingresarValoresMemoria} type="password" fullWidth label="Ingrese su contraseña" />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={12} md={6}>
                  <Button type="submit" onClick={registrarUsuarioBoton} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                    Registrarme
                </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
}

export default RegistrarUsuario;