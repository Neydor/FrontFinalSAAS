import React, { useState, useEffect } from "react";
import style from "../Tool/Style";
import { Container } from "@material-ui/core";
import {
  obtenerUsuarioActual,
  actualizarUsuario,
} from "../../actions/UsuarioAction";
import { allSedes } from "../../actions/SedeAction";
import { useStateValue } from "../../contexto/store";
import "leaflet/dist/leaflet.css";
import { MapContainer, Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const PerfilUsuario = (props) => {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [sedes, setSedes] = useState({
    data:[],
    lenght:0
  });
  console.log(sedes);
    
  // useEffect(()=>{
  //   allSedes().then(response => {
  //     console.log('Se trajo todas las sedes',sedes);
  //     setSedes(response.data);
  //     console.log('Se trajo todas las sedes',sedes);
  //     window.localStorage.setItem("token_seguridad", response.data.token);
  //   });
  // })

  const posicionTulua = [4.09098, -76.196281];
  const listaGasolinerasCoordenada = [
    [4.08654, -76.20139],
    [4.06028, -76.19903],
    [4.06028, -76.19903],
    [4.08413, -76.19456],
    [4.08782, -76.21574],
    [4.07042, -76.19759],
    [4.08441, -76.20173],
    [4.10181, -76.1932],
    [4.09192, -76.17874],
    [4.09234, -76.17843],
    [4.08418, -76.18639],
    [4.07668, -76.18924],
    [4.0699, -76.193],
    [4.06521, -76.19667],
    [4.06926, -76.19722],
    [4.08968, -76.19186],
    [4.08985, -76.19155],
  ];
  const styleMap = { width: "100%", height: "700px" };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}></div>
      <div>
        <MapContainer
          style={styleMap}
          center={posicionTulua}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sedes.data.map((cord) => (
            <Marker position={[cord[0], cord[1]]}>
              <Popup minWidth={90}>
                Estacion: Tales <br />
                Direccion:xxxxxx <br />
                Telefono:asdss <br />
                Latitud: {cord[0]} <br />
                Longitud: {cord[1]} <br />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};
export default PerfilUsuario;
