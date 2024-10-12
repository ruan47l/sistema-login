import { Link, useNavigate} from "react-router-dom"
import { useState} from "react"
import { FaUser, FaLock } from "react-icons/fa"

import "./Login.css"


const Login = () =>{

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const entrar = async (e) =>{
        e.preventDefault()

       try{
            const response  =  await fetch('http://localhost:5000/users')

            
            const data = await response.json()
            console.log(data)

            const usuario = data.find(usuario => usuario.email === email && usuario.senha === senha);

            if(usuario){
                navigate('/home')
            }else{
                alert('email ou senha incorretos')
            }

       } catch(error){
        alert('erro ao tentar logar no banco de dados')
       }
    }

    return(
        <div className='containerLogin'>
            <h3>Sistema de login</h3>
            <form onSubmit={entrar}>
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

                    <button type="submit">
                        <p>entre</p>
                    </button>

                    <p>
                        Não tem uma conta? <Link className="registrar" to='/registrar'>Registre-se</Link>
                    </p>
                       
            </form>
        </div>
    )
}

export default Login