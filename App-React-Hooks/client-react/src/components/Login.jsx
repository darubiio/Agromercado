import React, {useState} from 'react'
import './styles/Login.css';
import axios from 'axios'

const Login = ({setstate}) => {
  const [msjError, setmsjError] = useState('');
  const [pswValido, setpswValido] = useState('')
  const [emailValido, setemailValido] = useState('')  

  const manejoOnChange = (e) => {
    const valido = validaEmail(e.target.value)
    setemailValido(valido ? 'is-valid' : 'is-invalid')
  }
  const manejoOnChangeP = (e) => {
    const valido = validaPasw(e.target.value)
    setpswValido(valido ? 'is-valid' : 'is-invalid')
  }
  const validaEmail =(email) => {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }
  const validaPasw =(psw) => {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(psw))
  }
  const onPaste = (e) => {
    e.preventDefault()
    alert('No se puede usar copiar y pegar. Escriba el valor copiado "'
        +e.clipboardData.getData('text')+'" directamente en el campo');
  }
  const onKeyPress = (e) => {
    if (e.target.id==='email' && e.key === 'Enter' && emailValido==='is-valid')
      document.getElementById('clave').focus()
    else if (e.target.id==='clave' && e.key === 'Enter' && emailValido==='is-valid')
      onClick()
  }
  const onClick = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('clave').value;
    const validoP = validaEmail(email);
    const validoC = validaPasw(pass)
    if (validoP && validoC){
        setmsjError('')
        onRegistro()
      }
    else if(!validoP)
        setmsjError('Email incorrecto')
    else
        setmsjError('Contraseña Incorrecta')
  }
  const onRegistro = () => {
    const email = document.getElementById('email').value;
    const psw = document.getElementById('clave').value;
    axios.post('http://localhost:5000/login', {
      email: email,
      psw: psw,
    }).then(({data}) => { setstate(data)})
  }

  return (

    <div className='App App-header border-3 border-success'>
          <div align='center'>
            <div className=' border rounded-3 shadow border-success border-3 mt-3 p-3'>
              <h4 className='mb-2'>Iniciar Sesion</h4>
              <form>
                <small className='bg-danger'>{msjError}</small>
                <div className="input-group mt-5 pb-3">            
                <input className={"form-control "+emailValido} id='email'
                  type="email" placeholder="darubio@mail.com"
                  onChange={manejoOnChange}
                  onPaste={onPaste}
                  onKeyPress={onKeyPress}/>
                </div>
                <div className="input-group pb-3">
                <input id='clave'className={"form-control "+pswValido}
                  type="password" placeholder="Abretesesamo1!"
                  onChange={manejoOnChangeP}
                  onPaste={onPaste}
                  onKeyPress={onKeyPress}/>
                </div>
                <a href onClick={onClick} className="btn btn-success mr-2 text-white" id='acceder'>
                <i className="fa fa-user pr-2 text-white"></i>Acceder </a>
              </form>
            </div>
          </div>
        </div>

  )
}



export default Login
