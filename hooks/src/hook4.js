import React,{useState}from 'react'

function Hook4() {

    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
        <form>
        <input type="text" value={name.firstName} onChange={e1 =>setName({...name,firstName:e1.target.value})}/>
        <input type="text" value={name.lastName} onChange={e1 =>setName({...name,lastName:e1.target.value})}/>
        <h1>your first name is - {name.firstName} </h1>
        
        <h1>your first name is - {name.lastName} </h1>

        <h1>{JSON.stringify(name)}</h1>
        </form>
    </div>
  )
}
export default Hook4
