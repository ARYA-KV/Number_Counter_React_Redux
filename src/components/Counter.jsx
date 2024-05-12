import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

const Counter = ()=> {
  const dispatch=useDispatch()
  const {count}=useSelector(state=>state.counterReducer)
  const [amount,setAmount]=useState(0)
  const handleIncrementAmount=()=>{
    if (amount) {
      dispatch(incrementByAmount(Number(amount)))

      
    }else{
      alert("please enter the amount!!")

    }
  }
  return (
    <div>
        <h1 className='text-center'>Counter App</h1>
        <div style={{width:'800px'}} className="border p-5 rounded mt-5">
            <h1 style={{fontSize:'80px'}} className='text-center text-warning'>{count}</h1>
            <div className="d-flex justify-content-around align-items-center mt-3 w-100">
                <button  onClick={()=>dispatch(decrement())} className='btn btn-primary'>DECREMENT</button>
                <button  onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
                <button  onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>

            </div>
            <div className="d-flex justify-content-between align-items-center mt-5 w-100">
                <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='incremented counter amount' />
                <button  onClick={handleIncrementAmount} style={{color:'white'}} className='btn btn-warning ms-2'>INCREMENT BY AMOUNT</button>
               

            </div>
        </div>
    </div>
  )
}

export default Counter
