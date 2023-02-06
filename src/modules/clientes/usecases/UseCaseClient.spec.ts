import { Cliente } from "../../../model/Cliente";
import { ClienteRepo } from "../../../repository/cliente/ClienteRepo";
import { UseCaseClient } from "./UseCaseClient"


describe("Teste dos casos de uso do Cliente", () => {


//Testes unitarios
// const ucc: UseCaseClient = new UseCaseClient();

// test("Testando recuperar cliente", () => {
    
//     expect(ucc.recuperarPeloId(1)).toBeDefined();

// });

// test("recuperando cliente que não existe", () => {
//     expect(ucc.recuperarPeloId(2)).toBe(null);
// });


//Teste Mock

//preciso indicar ao JEST qual é a definição do que ele precisa criar
jest.mock("../../../repository/cliente/ClienteRepo")

const ClienteRepoMock = ClienteRepo as jest.Mock<ClienteRepo>;

//crio uma instância do objeto "oco, vazio, mockado"
const cliRepo = new ClienteRepoMock() as jest.Mocked<ClienteRepo>;

//agora defino o comportamento dos métodos
cliRepo.REPO_recuperarTodos.mockResolvedValue([]);

const cliente: Cliente = new Cliente();
cliRepo.REPO_recuperarPeloId.mockResolvedValue(cliente)

const ucc: UseCaseClient = new UseCaseClient(cliRepo);
test("Recuperando todos os clientes", async () =>{
    expect(await ucc.recuperarTodos()).toBeDefined();
});

test("Recuperando cliente com ID Valido", async () => {
    expect(await ucc.recuperarPeloId(1)).toBeDefined();
});

});