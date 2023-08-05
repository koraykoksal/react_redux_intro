
export const INC = 'değeri artırma'
export const DEC = 'değeri azaltma'
export const CLR = 'değeri sıfırlama'


export const toplama=()=>{

    return{type:INC}
}

export const cikarma=()=>({type:DEC})

//! redux da başlangıç olarak initialState state belirlenmesi gerekir.

const initialState={

    count:0,
}

//? pure reducer function (reducer)
//! bu fonction bir obje döndüreceği için return kullanılması gerekir.
export const counterReducer=(state=initialState,action)=>{

    

    switch(action.type){
        case INC: //? count : state.count + 1

        return{count : state.count+1}
            
        case DEC:
            return{count : state.count-1}

        case CLR:
            return{count : 0}

        //* default bilgisi her zaman return döndürmek zorundadır
        default:
            return state
    }
}