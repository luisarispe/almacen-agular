export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public correo: string,
        public createdAt: Date,
        public updatedAt: Date,
        public estado: boolean,
        public contrasena?: string
    ) { }
}