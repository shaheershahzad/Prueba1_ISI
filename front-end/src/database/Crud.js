const axios = require('axios').default;



export function crearSolicitud(descripcionEquipo, resumenCV, dniFotografo, onSuccess, onError) {

  var message = JSON.stringify({
    descripcion: descripcionEquipo,
    resumen: resumenCV,
    dniFotografo: dniFotografo
  })

  //setTimeout(()=>{onSuccess()},1000);
  console.log(message)
  axios.post('http://localhost:3000/api/solicitud/', {
    descripcion: descripcionEquipo,
    resumen: resumenCV,
    dniFotografo: dniFotografo

  })
    .then(function (response) {
      onSuccess();
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}

export function crearFotografo(dni, nombre, apellidos, direccion, ciudad, codigoPostal, telefono, onSuccess, onError) {

  axios.post('http://localhost:3000/api/fotografo/', {
    dni: dni,
    nombre: nombre,
    apellidos: apellidos,
    direccion: direccion,
    ciudad: ciudad,
    codigoPostal: codigoPostal,
    telefono: telefono

  })
    .then(function (response) {
      onSuccess();
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}

export function rechazarSolicitud(idSolicitud,onSuccess,onError) {

  axios.put('http://localhost:3000/api/solicitud/updateEstado', {
    id: idSolicitud,
    estado: "rechazado",
  })
    .then(function (response) {
      onSuccess();
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}

export function aceptarSolicitud(idSolicitud,onSuccess,onError) {

  axios.put('http://localhost:3000/api/solicitud/updateEstado', {
    id: idSolicitud,
    estado: "aceptado",
  })
    .then(function (response) {
      onSuccess();
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}

import Solicitud from "../objects/solicitud.js";
import Fotografo from "../objects/fotografo.js";

export function obtenerSolicitudes(onSuccess, onError) {

  /* setTimeout(() => {
    onSuccess([
      new Solicitud("1", new Date(),"descrip1", "resumenCV", "pendiente","dnifoto"),
      new Solicitud("2", new Date(),"descrip1", "resumenCV", "pendiente","dnifoto"),
      new Solicitud("3", new Date(),"descrip1", "resumenCV", "pendiente","dnifoto"),
    ])
  }, 1000); */
  axios.get('http://localhost:3000/api/solicitud/', { })
    .then(function (response) {
      console.log(response.data);
      onSuccess(response.data);
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });
}

export function obtenerSolicitudesQueAprobar(onSuccess, onError) {

  /* setTimeout(() => {
    onSuccess([
      new Solicitud("1", new Date(), "descrip1","resumenCV", "pendiente","dnifoto"),
      new Solicitud("2", new Date(),"descrip1", "resumenCV", "pendiente","dnifoto"),
      new Solicitud("3", new Date(),"descrip1", "resumenCV", "pendiente","dnifoto"),
    ])
  }, 1000); */

  axios.get('http://localhost:3000/api/solicitud/pending', { })
    .then(function (response) {
      console.log(response.data);
      onSuccess(response.data);
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}

export function obtenerFotografos(onSuccess, onError) {

  /* setTimeout(() => {
    onSuccess([
      new Fotografo("dni1234", "nombre1", "apellidos1", "direccion1", "ciudad1", "codigoPostal1", 123456789),
      new Fotografo("dni11111", "nombre2", "apellidos2", "direccion2", "ciudad2", "codigoPostal2", 123456789),
      new Fotografo("dni22222", "nombre3", "apellidos3", "direccion3", "ciudad3", "codigoPostal3", 123456789),
    ])
  }, 1000); */

  axios.get('http://localhost:3000/api/fotografo/', { })
    .then(function (response) {
      console.log(response.data);
      onSuccess(response.data);
    })
    .catch(function (error) {
      console.log(error);
      onError(error);
    });

}
