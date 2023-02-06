import { ClienteRepo } from "../../../repository/cliente/ClienteRepo"; 

export class UseCaseClient {

    public constructor (private clienteRepo: ClienteRepo){

    }
    
    public cadastrar(): void {

    }

    public async recuperarPeloId(id: number) {

            return await this.clienteRepo.REPO_recuperarPeloId(id);
    }

    public async recuperarTodos() {
        return await this.clienteRepo.REPO_recuperarTodos;
    }
}
