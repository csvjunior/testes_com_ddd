import { Cliente } from "../../model/Cliente"

export class ClienteRepo {

    public async REPO_recuperarTodos() {
        try {
            return await Cliente.findAll(); // aqui vai fazer o SELECT
        } 
        
        catch (err) {
            console.error(err)
        }
    }

    public async REPO_recuperarPeloId(id: number) {
        try {
            return await Cliente.findByPk(id);
        } 
        
        catch (error) {
            console.error(error)
        }
    }
}