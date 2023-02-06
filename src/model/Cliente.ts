export class Cliente {
    static findAll() {
        throw new Error("Method not implemented.");
    }
    static findByPk(id: number) {
        throw new Error("Method not implemented.");
    }
    private id: number;
    private nome: string;
    private email: string;
    private whatsapp: string;

    public constructor(id: number, no: string, em: string, wh: string) {
        this.id = id;
        this.nome = no;
        this.email = em;
        this.whatsapp = wh;
    }
}