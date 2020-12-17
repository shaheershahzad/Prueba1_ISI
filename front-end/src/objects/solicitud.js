export default class Solicitud {
    constructor(_id, createdDate,descripcion,resumenCV,estado,dniFotografo) {
      this._id=_id,
      this.createdDate = createdDate,
      this.descripcionEquipo = descripcion;
      this.resumenCV = resumenCV;
      this.estado = estado;
      this.dniFotografo = dniFotografo;
    }
  }
  