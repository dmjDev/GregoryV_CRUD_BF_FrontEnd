import { useEffect, useState } from "react"       // Para poder hacer peticiones FETCH con React
import UserBox from "./components/UsersBox"
import CreateUser from "./components/CreateUser"

function App() {                                  // este método APP se carga dentro de una constante llamada ROOT en index.js, la cual mediante ReactDOM hace referencia a un DIV también llamado ROOT en public/index.html
  const [users, setUsers] = useState([])          // constante USERS que va a contener los datos de usuarios de nuestro BackEnd incializado con un estado de array vacio
  useEffect(()=> {                                // se puede hacer también con async/await para proyectos mayores
    //fetch('http://localhost:8000/api/users')      // LA IP DE NUESTRO BACKEND - origen de los recursos que van a llegar desde el BackEnd - desde un puerto BackEnd de nuestra máquina LOCAL
    fetch('http://172.18.0.3:8000/api/users')   // LA IP DE NUESTRO BACKEND - origen de los recursos que van a llegar desde el BackEnd - desde la network de nuestro contenedor BackEnd DOCKER
    .then(res => res.json())                      // formateamos la respuesta como JSON
    .then(res => setUsers(res))                   // asignamos el nuevo estado en formato JSON a la constante USERS
  },[])                                           // pasamos una array vacío como segundo parámetro para que únicamente ejecute una única petición a nuestro BackEnd
  return (
    <main>
      <h1>FrontEnd & BackEnd app CRUD</h1>
      <CreateUser />
      {
        users.map(user => (
          <UserBox name={user.name} password={user.password} id={user.id} key={user.id} />  //importante añadir el parámetro key para identificar de forma única cada registro
        ))
      }
    </main>
  );
}

export default App;
