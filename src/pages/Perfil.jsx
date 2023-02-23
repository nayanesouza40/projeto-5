import { useParams } from "react-router-dom";
import '../App.css';
import { useState } from "react";


const Perfil = () => {

    const { username } = useParams(); 
    let user = null
    let isValidFields = true;

    // PEGAR OS DADOS DO USUÁRIO
    const readUsers = () => JSON.parse(localStorage.getItem('users')) ?? []
    const users = readUsers();

    // CRIA UM OBJETO COM OS DADOS DO USUÁRIO
    for(let i=0;i<=users.length;i++){
        if(users[i].username == username) {
            user = {
                nome: users[i].nome,
                salario: users[i].salario,
                email: users[i].email,
                username: users[i].username,
                id: i
            }
            break
        }
    }

    // CADASTRA AS DESPESAS NO LOCALSTORAGE
    const [titulo, setTitulo] = useState();
    const [valor, setValor] = useState();
    const [categoria, setCategoria] = useState();

    const createGastos = (gasto) => {
        const gastos = JSON.parse(localStorage.getItem('gastos')) ?? []
        gastos.push(gasto)
        localStorage.setItem('gastos', JSON.stringify(gastos));
    }

    const saveGastos = (e) => {
        e.preventDefault();
        
        if(isValidFields){
            const gasto = {
                titulo: titulo,
                valor: valor,
                categoria: categoria,
                user_id: user.id
            }
            
            
        createGastos(gasto);        
        }
    }

    
    

    return (
        <>
            <h1>Olá {user.nome}</h1>
           <p>Sua renda mensal: {user.salario}</p>
           <p>Sua despesa mensal: </p>
           <p>Seu saldo: </p>
           <br />
           <hr />
           <br />
           <h3>Formulário adicionar despesas</h3>
           <form onSubmit={(e) => saveGastos(e)}>
            <div>
                <label htmlFor="titulo">Título</label>
                <input onChange={(e) => setTitulo(e.target.value)} type="text" id="titulo" />
            </div>
            <div>
                <label htmlFor="valor">Valor</label>
                <input onChange={(e) => setValor(e.target.value)} type="number" id="valor" />
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select onChange={(e) => setCategoria(e.target.value)} id="categoria">
                    <option value="casa">Casa</option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="transporte">Transporte</option>
                    <option value="saude">Saúde</option>
                    <option value="comunicacao">Comunicação</option>
                    <option value="lazer">Lazer</option>
                    <option value="pessoal">Despesas pessoais</option>
                    <option value="outros">Outros</option>
                </select>
            </div>
            <button type="submit">Adicionar</button>
           </form>
           <a href="/">Sair</a>
        </>
    )
}

export default Perfil;