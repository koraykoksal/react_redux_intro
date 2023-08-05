import { useSelector,useDispatch } from "react-redux"
import "./Counter.css"
import { CLR, DEC, INC, cikarma, counterReducer, reset, toplama } from "../../store/counterReducer"

const Counter = () => {


  // const count = useSelector((state)=>state.count)
  
  //* root katmanı ile ikinci bir katman oluşuyor ve x>y>z şeklinde bir erişim oluşuyor.
  const count = useSelector((state)=>state.counter.count)


  //! custom redux hook. state değişiklikleri dispatch ile yapılır
  const dispatch=useDispatch()
  const decDispatch=useDispatch()
  const incDispatch=useDispatch()
  const clrDispatch=useDispatch()


  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        {/* <button className="counter-button positive" onClick={()=>dispatch({type: INC})}>increase</button> */}
        {/* <button className="counter-button zero" onClick={()=>dispatch({type:CLR})}>reset</button> */}
        {/* <button className="counter-button negative" onClick={()=>dispatch({type:DEC})}>decrease</button> */}
        <button className="counter-button positive" onClick={()=>incDispatch(toplama())}>increase</button>
        <button className="counter-button zero" onClick={()=>clrDispatch(reset())}>reset</button>
        <button className="counter-button negative" onClick={()=>decDispatch(cikarma())}>decrease</button>

      </div>
    </div>
  )
}

export default Counter
