import { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=> {
      setUsers(res)
      setLoading(false)
    }).catch(err=>{
      console.log(err)
    })
  },[])


  if(loading){
    <div>loading..</div>
  }

  return(
    <div>
      <h1>User List</h1>
        <ul>
           {users.map(({id, email,name, phone, website, address })=>{
            return(<li key={id}>
              <div>id: {id} </div>
              <div>email: {email}</div>
              <div>name: {name} </div>
              <div>address: <span>zipcode:  {address.zipcode} </span> <span>city:  {address.city} </span> <span>street:  {address.street} </span></div>
              <div>phone: {phone} </div>
              <div><a href={`https://${website}`} target="_blank" rel="noreferrer">website: {website}</a>  </div>
            </li>)
           })}
          
        </ul>
    </div>
  )

}

export default App;
