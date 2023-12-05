import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const userArr = [
    {id: 1, name: 'John', age: 20, status: 'active'},
    {id: 2, name: 'Peter', age: 30, status: 'inactive'},
    {id: 3, name: 'Jill', age: 40, status: 'active'},
    {id: 4, name: 'Mark', age: 50, status: 'inactive'},
    {id: 5, name: 'Marry', age: 25, status: 'active'},
    {id: 6, name: 'Aarav', age: 32, status: 'inactive'},
    {id: 7, name: 'Priya', age: 28, status: 'active'},
    {id: 8, name: 'Vijay', age: 35, status: 'inactive'},
    {id: 9, name: 'Anjali', age: 22, status: 'active'},
    {id: 10, name: 'Rahul', age: 45, status: 'inactive'},
    {id: 11, name: 'Deepika', age: 29, status: 'active'},
    {id: 12, name: 'Arjun', age: 27, status: 'inactive'},
    {id: 13, name: 'Sunita', age: 38, status: 'active'},
    {id: 14, name: 'Rohan', age: 33, status: 'inactive'},
    {id: 15, name: 'Neha', age: 31, status: 'active'},
    {id: 16, name: 'Amit', age: 42, status: 'inactive'},
    {id: 17, name: 'Kiran', age: 36, status: 'active'},
    {id: 18, name: 'Geeta', age: 24, status: 'inactive'},
    {id: 19, name: 'Sanjay', age: 47, status: 'active'},
    {id: 20, name: 'Lata', age: 26, status: 'inactive'}
];


const FilterUser = () => {

    const [user, setUser] = useState(userArr)

    const [searchParams, setSearchParams]   = useSearchParams()

     const status = searchParams.get('status')  // null
     const age = searchParams.get('age') // 30

     console.log(status, age)


    useEffect(() => {
       if(status == null){
        setUser(userArr.filter(user=> (user.age >= (age||0))))
       }
       else{
        setUser(userArr.filter(user=> (user.status== status) && (user.age >= (age||0))))
       }
    }, [status, age])

    return(
        <div>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
             {
                user.map(user =>(
                      <div key={user.id} style={{
                        backgroundColor: user.status === 'active' ? 'green' : 'red',
                        color: 'white',
                        border: '1px solid black',
                      }}>
                          <p> Name: {user.name}</p>
                          <p> Age: {user.age}</p>
                          <p> Status: {user.status}</p>
                    </div>
                ))
             }

             
        </div>
               <button onClick={
                     () =>{setSearchParams({status: 'active'})}
               }> Active User</button>
              <button
              onClick={
                () =>{setSearchParams({status: 'inactive'})}
               }
              > Inactive User</button>
        </div>
    )
}

export default FilterUser;