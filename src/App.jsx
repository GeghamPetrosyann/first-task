import "./App.css"
import React, { useState } from 'react'

export default function App() {
const [count, setCount] = useState(1)
const [ppl, setPpl] = useState([
  {id:101, name:"Tiko", surname:"Harutyunyan", salary:200000},
  {id:102, name:"Ano", surname:"Davtyan", salary:350000},
  {id:103, name:"Gago", surname:"Tigranyan", salary:102000},
  {id:104, name:"Maro", surname:"Melqonyan", salary:120000},
  {id:105, name:"Saro", surname:"Harutyunyan", salary:75000},
  {id:106, name:"Varo", surname:"Mnacakanyan", salary:820000},
])
const handleSalaryUp = (id) => {
  const index = ppl.findIndex(i => i.id == id)
  const temp = [...ppl]
  temp[index].salary += 50000
  setPpl(temp)
}
const handleSalaryDown = (id) => {
  const index = ppl.findIndex(i => i.id == id)
  const temp = [...ppl]
  temp[index].salary = ((temp[index].salary - 50000) < 50000) ? temp[index].salary : (temp[index].salary - 50000);
  setPpl(temp)
}

const handleRemove = (id) => {
const index = ppl.findIndex(i => i.id == id)
console.log(ppl[index]);
const temp = ppl.filter(user => user != ppl[index])
setPpl(temp)
}

return <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>lvl up</button>
    {
     ppl.map((person) => <div key={person.id}>
        <p>{person.name}</p>
        <p>{person.surname}</p>
        <strong>{person.salary}AMD</strong>
        <button onClick={() => handleSalaryUp(person.id)}>salary up</button>
        <button onClick={() => handleSalaryDown(person.id)}>salary down</button>
        <button onClick={() => handleRemove(person.id)}>delete</button>
     </div>) 
    }
  </>
}
