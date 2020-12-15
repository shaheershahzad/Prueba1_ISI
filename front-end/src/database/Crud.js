const axios = require('axios').default;



export function crearSolicitud(descripcionEquipo,resumenCV,idFotografo,onSuccess,onError){

    var message = JSON.stringify({
        descripcion: descripcionEquipo,
        resumen: resumenCV,
        estado: idFotografo
      })

    //setTimeout(()=>{onSuccess()},1000);
    console.log(message)
    axios.post('http://localhost:3000/api/solicitud/', message)
      .then(function (response) {
        onSuccess();
      })
      .catch(function (error) {
        console.log(error);
        onError(error);
      });

}
import Solicitud from "../objects/solicitud.js";

export function obtenerSolicitudes(onSuccess,onError){

    setTimeout(()=>{onSuccess([
        new Solicitud("1", new Date(),"resumenCV","pendiente"),
        new Solicitud("2", new Date(),"resumenCV","pendiente"),
        new Solicitud("3", new Date(),"resumenCV","pendiente"),
      ],)},1000);

}
