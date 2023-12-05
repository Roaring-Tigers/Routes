
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const userArr = [
    {id:1, name: 'John', age: 20},
    {id:2, name: 'Peter', age: 30},
    {id:3, name: 'Jill', age: 40},
    {id:4, name: 'Mark', age: 50},
    {id:5, name: 'Marry', age: 25},
]

const User = () => {

     const [user, setUser] = useState(userArr)
     const {id} =  useParams() 
     
    //   useEffect(()=>{
    //     let x =  userArr.filter(user => user.id == id)
    //     //  console.log(x[0])
    //      setUser(x[0])
    //   },[id])

    return(
        <div>
              <h1> Welcome User</h1>
              {
                userArr.filter(user => user.id == id).map(user =>(
                      <div key={user.id}>
                          <p> Name: {user.name}</p>
                          <p> Age: {user.age}</p>
                    </div>
                ))
              }
        </div>
    )
}

export default User;