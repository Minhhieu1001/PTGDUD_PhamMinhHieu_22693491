import { useState } from 'react'
import './Baitap1.css'


function Baitap1() {
 
  const [numberA,setNumberA] = useState(0)
  const [numberB,setNumberB] = useState(0)
  const [results,setResult] = useState(0)

  const handleOnclick = () =>{
      setNumberA(numberA)
      setNumberA(numberB)

  }

  const handleRadio = (e) =>{
    if(e.target.value == '+'){
      setResult(parseInt(numberA) + parseInt(numberB))
    }
    if(e.target.value == '-'){
      setResult(parseInt(numberA) - parseInt(numberB))
    }
    if(e.target.value == '*'){
      setResult(parseInt(numberA) * parseInt(numberB))
    }
    if(e.target.value == '/'){
      setResult(parseInt(numberA) / parseInt(numberB))
    }
  }

  return (
    <div>
      <input value={numberA} onChange={e => setNumberA(e.target.value)} type="text" placeholder='Nhap A' />
      <br />
      <br />
      <input value={numberB} onChange={e => setNumberB(e.target.value)} type="text" placeholder='Nhap B' />
      <br />

       <input onChange={handleRadio} value={'+'} type="radio" name='group'/><label htmlFor="">+</label>
       <input onChange={handleRadio} value={'-'} type="radio" name='group'/><label htmlFor="">-</label>
       <input onChange={handleRadio} value={'*'} type="radio" name='group'/><label htmlFor="">*</label>
       <input onChange={handleRadio} value={'/'} type="radio" name='group'/><label htmlFor="">/</label>

       <br />
       <br />
      <button onClick={handleOnclick}>Click</button>
      <br />
      <h3>Result: {results}</h3>
    </div>
  )
}

export default Baitap1
