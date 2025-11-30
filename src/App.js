import { useEffect, useState } from "react"
import UserBox from "./components/UsersBox"
import CreateUser from "./components/CreateUser"

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    //fetch('http://localhost:8000/api/users')
    fetch('http://172.18.0.3:8000/api/users')   //UNA VEZ LOS TRES CONTENEDORES CONECTADOS DESDE NUESTRA RED DOCKER SE ASIGNA A NUESTRO FRONTEND LA IP DE NUESTRO BACKEND
    .then(res => res.json())
    .then(res => setUsers(res))
  },[])
  return (
    <main>
      <h1>FrontEnd & BackEnd app</h1>
      <CreateUser />
      {
        users.map(user => (
          <UserBox name={user.name} password={user.password} id={user.id} key={user.id} />
        ))
      }
    </main>
  );
}

export default App;
