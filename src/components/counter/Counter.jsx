import { useSelector,useDispatch } from "react-redux"
import "./Counter.css"
import { CLR, DEC, INC, cikarma, counterReducer, toplama } from "../../store/counterReducer"

const Counter = () => {


  const count = useSelector((state)=>state.count)
  
  //! custom redux hook. state değişiklikleri dispatch ile yapılır
  const dispatch=useDispatch()


  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        {/* <button className="counter-button positive" onClick={()=>dispatch({type: INC})}>increase</button> */}
        <button className="counter-button positive" onClick={()=>toplama()}>increase</button>
        <button className="counter-button zero" onClick={()=>dispatch({type:CLR})}>reset</button>
        <button className="counter-button negative" onClick={()=>dispatch({type:DEC})}>decrease</button>
        {/* <button className="counter-button negative" onClick={cikarma()}>decrease</button> */}

      </div>
    </div>
  )
}

export default Counter
