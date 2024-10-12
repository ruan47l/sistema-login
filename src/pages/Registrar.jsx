import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaLock, FaUser } from "react-icons/fa"
import "./Registrar.css"


const Registrar = () =>{

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const navigate = useNavigate()
    
    const cadastrar = async (e) =>{
        e.preventDefault()

        if(senha !== confirmarSenha){
            alert('as senhas não coincidem')
            return
        }

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

            const data = await response.json();
            console.log(data); 

            navigate("/home");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar. Tente novamente.");
        }
    
    }

    return(
        <div className='containerLogin'>
            <h3>Sistema de login</h3>
            <form onSubmit={cadastrar}>
               <div className="inputFirst">
                    <input type="text" 
                        placeholder="Digite seu email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className="user"/>
                </div>

                <div className="inputSecond">
                    <input type="password" 
                        placeholder="Digite sua senha" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className="lock"/>
                </div>

                <div className="inputSecond">
                    <input type="password" 
                        placeholder="confirme sua senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                    <FaLock className="lock"/>
                </div>

                <button type="submit">
                    <p>inscreva-se</p>
                </button>

                <p>
                    Já tem uma conta? <Link className="registrar" to="/">Entre</Link>
                </p>
            </form>
        </div>
    )
}

export default Registrar