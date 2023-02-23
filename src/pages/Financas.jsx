import { useParams } from "react-router-dom";
import '../App.css'

const Financas = () => {

    const { username } = useParams();

    const readUsers = () => JSON.parse(localStorage.getItem('users')) ?? []
    const users = readUsers();

    for(let i=0;i<=users.length;i++) {

    }

    return (
        <>
            <h1>Olá {username}</h1>            
            <h2>Formulário cadastro categorias</h2>
            <form className="categorias">
                <input type="text" id="nome" placeholder="Categoira"/>
                <input type="number" id="valor" placeholder="Quando vou gastar?"/>
                <button type="submit">Cadastrar</button>
            </form>
            -----------------
        </>
    )
}

export default Financas;