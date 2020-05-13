export class GatosModel {
    id:number;
    nombre:string;
    raza:string;
    edad:number;
    foto: string;

    constructor(obj?: any) {
        this.nombre=  obj && obj.nombre || null;
        this.id=  obj && obj.id || null;
        this.raza=  obj && obj.raza || null;
        this.edad=  obj && obj.edad || null;
        this.foto=  obj && obj.foto || null;
    }
}