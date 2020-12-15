export function crearSolicitud(descripcionEquipo,resumenCV,idFotografo,onSuccess,onError){

    setTimeout(()=>{onSuccess()},1000);

}
import Solicitud from "../objects/solicitud.js";

export function obtenerSolicitudes(onSuccess,onError){

    setTimeout(()=>{onSuccess([
        new Solicitud("1", new Date(),"resumenCV","pendiente"),
        new Solicitud("2", new Date(),"resumenCV","pendiente"),
        new Solicitud("3", new Date(),"resumenCV","pendiente"),
      ],)},1000);

}
