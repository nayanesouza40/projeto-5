import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    // PEGA DOS DADOS DO FORMULÁRIO
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // VALIDA OS CAMPOS DO FORMULÁRIO LOL
    const isValidFields = true;

    // LÊ OS DADOS DE TODOS OS USUÁRIOS QUE ESTÃO ARMAZENADOS
    const readUsers = () => JSON.parse(localStorage.getItem('users')) ?? []
    // E COLOCA NESSA ARRAY
    const users = readUsers();

    const loginUsers = (event) => {
        event.preventDefault();
        if (isValidFields) {
            // VERIFICA CADA USUÁRIO
            for(let i=0;i<=users.length;i++) {
                // SE ELE ENCONTRAR O EMAIL E A SENHA CORRETAS
                if((users[i].email == email) && (users[i].senha == password)) {
                  navigate(`/user/${users[i].username}`);
                  console.log(`fiz login com ${email}, ${password}`)
                  break
                  // SE ELE NÃO ENCONTRAR 0 EMAIL O A SENHA CORRETA
                } else if((users[i].email != email) || (users[i].senha != password)) {
                  console.log('deu errado');
                }
            }
        }
    }

  return (
    <>
      <h1>Login</h1>
      <div className="col-1">
        <form className='form-login' onSubmit={(event) => loginUsers(event)}>
            <input type="text" id="email" onChange={(event) => setEmail(event.target.value)} placeholder="digite o email" autoComplete='off'/>
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} placeholder="digite a senha" autoComplete='off'/>
            <button type="submit">Entrar</button>
        </form>
        <a href="/registro">cadastre-se</a>
      </div>
    </>
  )
}

export default Login
