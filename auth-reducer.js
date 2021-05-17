import { authConstants } from "../actions/constants"


const initialState={
    user:{
        email:'',
        password:'',
        token:""
    },

    user1:{
        _id:'',
        jobid:'',
        seekerEmail:''
    },
    authenticate:false,
    authenticating:false,
    email1:'',
    message:'',
    update:"",
    already:'',
}

export const authReducer=(state=initialState,action)=>{
    console.log("auth reducer",action)
    switch(action.type){
       case authConstants.SIGNIN_REQUEST :
           state={
               ...state,
               authenticating:true
           }
           break;

           case authConstants.SIGNIN_SUCCESS :
               state={
                   ...state,
                //    user:action.payload.recuiter,
                //    token:action.payload.token,
                   authenticating:false,
                   authenticate:true,
                   email1:action.payload,
                   already:''
               }
               break;

               case authConstants.REGISTER_SUCCESS:
                   state={
                       ...state,
                    message:action.payload
                   }
                   break;
                   case authConstants.UPDATE_SUCCESS:
                   state={
                    ...state,update:action.payload
                   }
               case authConstants.LOGOUT_SUCCESS :
                   state={
                       authenticate:false
                   }
                   break;
                   case authConstants.GET_SUCCESS :
                       state={
                           ...state,
                           user1:action.payload
                       }
                       break;
                    case authConstants.APPLIED_ALREADY:
                        console.log("Reducer",action.payload)
                        state={
                            ...state,
                            already:action.payload
                        }
    }
    return state
}