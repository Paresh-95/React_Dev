import './App.css'
import {add,sub,multi,div} from './Calc.js'
function App() {


  return (
    <>
    {/* <form action="post" onSubmit={handleSubmit}>
      <input className='button' type="number" placeholder='1st number' name='first'/>
      <input className='button' type="number" placeholder='2nd number' name='second'/>
      <button type='submit' className='button'>Call All Basic Maths Operations</button>
      </form> */}
      <ul>
        <li>Addition of two no is {add(10,3)}</li>
        <li>Substraction of two no is {sub(30,3)}</li>
        <li>Multiplication of two no is {multi(30,3)}</li>
        <li>Divison of two no is {div(40,3)}</li>

      </ul>
    
    </>
  )
}

export default App
