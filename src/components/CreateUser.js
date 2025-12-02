import { useState } from "react"

export default function CreateUser(){
    const [ textName, setTextName ] = useState('')          //constante TEXTNAME que va a contener el valor de nombre de usuario de nuestro formulario incializado con un estado de string vacio
    const [ textPassword, setTextPassword ] = useState('')  //constante TEXTPASSWORD que va a contener el valor de password de usuario de nuestro formulario incializado con un estado de string vacio
    function handleTextName(e){
        setTextName(e.target.value)                         //asignamos el valor del campo a la variable TEXTNAME
    }
    function handleTextPassword(e){
        setTextPassword(e.target.value)                     //asignamos el valor del campo a la variable TEXTPASSWORD
    }
    function handleClickForm(e){
        e.preventDefault()                          //evitamos que se envíe el formulario al hacer click en el submit
        fetch(
            //'http://localhost:8000/api/users',      //LA IP DE NUESTRO BACKEND - origen de los recursos que van a llegar desde el BackEnd - desde un puerto BackEnd de nuestra máquina LOCAL
            'http://172.18.0.3:8000/api/users',   //LA IP DE NUESTRO BACKEND - origen de los recursos que van a llegar desde el BackEnd - desde la network de nuestro contenedor BackEnd DOCKER
            {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(
                    {
                        name: textName,             //el nombre de los parámetros name y password debe de coincidir con los del archivo de BackEnd crud.py en su método create_user
                        password: textPassword
                    }
                )
            }
        ).then(()=>{
            setTextName('')
            setTextPassword('')
        })
    }
    return(
        <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" onChange={handleTextName} value={textName} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={handleTextPassword} value={textPassword} />
            <input type="submit" value="Create User" onClick={handleClickForm} />
        </form>
    )
}