export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'


export const addTodo = (payload)=>({type:ADD_TODO,payload})
export const clearTodo = ()=>({type:CLEAR_TODO})


const initialState = {

    todoList:[
        {id:new Date().getTime(),text:"work redux",completed:false},
    ],
}




export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    //! todolist bir obje ve içinde array var. todolist içinde ki değerleri bozmadan farklı bir kayıt yapmak için önce içini açmak lazım.
    return {todoList:[
        
        ...state.todoList,{id:new Date().getTime(),text:payload,completed:false},
        
    ]}

    case CLEAR_TODO:
        return{todoList:[]}

  default:
    return state
  }
}
