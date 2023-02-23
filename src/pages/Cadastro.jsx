import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const navigate = useNavigate();

    // VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO LOL
    const isValidFields = true;

    // PEGAM OS DADOS DO FORMULÁRIO
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [salario, setSalario] = useState();

    // CONVERTE O OBJETO USUÁRIO EM JSON E FAZ PUSH NO LOCALSTORAAGE
    const createUsers = (user) => {
        const users = JSON.parse(localStorage.getItem('users')) ?? []
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // SALVA OS DADOS DO USUÁRIO EM UM OBJETO
    const saveUsers = () => {
        if(isValidFields){
            const users = {
                nome: nome,
                email: email,
                senha: password,
                username: username,
                salario: salario
            }

        createUsers(users);
        navigate("/");
        }
    }
    

    return (
        <>
            <div className="col-1" >
                <h1>Cadastro usuário</h1>
                <form id="form-cadastro-usuario" onSubmit={(e) => saveUsers(e)}>
                    <h3>Parte 1 cadastro</h3>
                    <input onChange={(e) => setNome(e.target.value)} type="text" id="nome" placeholder='Nome' autoComplete='off'/>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" placeholder='Email' autoComplete='off'/>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder='Username' autoComplete='off'/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder='Senha' autoComplete='off'/>
                    <input onChange={(e) => setSalario(e.target.value)} type="text" id="salario" placeholder="Salário"/>

                    
                    <button type="submit">Cadastrar</button>
                    <br/><br/>
                </form>
                <a href="/">fazer login</a>
            </div>
        </>
    )

    }
export default Cadastro