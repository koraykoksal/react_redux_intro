export const ADDTodo = 'addTodo'
export const BTNDel = 'btnDel'
export const BTnOk = 'btnOk'
export const CLEARTodo = 'clearTodo'


export const addTodo = (payload)=>({type:ADDTodo,payload})



const initialState = {

    todoList:[
        {id:new Date().getTime(),text:"work redux",completed:false},
    ],
}




export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTodo:
    //! todolist bir obje ve içinde array var. todolist içinde ki değerleri bozmadan farklı bir kayıt yapmak için önce içini açmak lazım.
    return {todoList:[
        
        ...state.todoList,{id:new Date().getTime(),text:"work redux",completed:false},
        
        ]}

  default:
    return state
  }
}
