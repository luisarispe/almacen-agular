export class Usuario {
    constructor(
        public id: string,
        public nombre: string,
        public correo: string,
        public createdAt: Date,
        public updatedAt: Date,
        public estado: boolean,
        public contrasena?: string
    ) { }
}