import axiosInstance from "../helpers/axios"
import { authConstants } from "./constants"


export const signin=(user)=>{

    return async (dispatch)=>{
        //console.log(user)
        dispatch({
            type:authConstants.SIGNIN_REQUEST,
        })

        const resp=await axiosInstance.post('/seekerlogin',{...user})

        if(resp.status==200){
            const em=resp.data.recruiter.email
            //console.log("auth-actions", resp.data)
            const {recruiter,token}=resp.data
            console.log("recruter",recruiter, "token",token)
           dispatch({
               type:authConstants.SIGNIN_SUCCESS,
               payload:em,
                
           })
        }
    }
}

export const signout=()=>{
    return async (dispatch)=>{
        dispatch({
            type:authConstants.LOGOUT_SUCCESS
        })

       
    }
}

export const register1=(user)=>{
   // console.log(avatar)
    return async (dispatch)=>{
console.log("form submitting",user)
        dispatch({
            type:authConstants.REGISTER_REQUEST
        })
        const resp=await axiosInstance.post('/jobseeker',{...user})
        const d=resp.data.message
        console.log("hellllllllll",resp.data)
            dispatch({
                type:authConstants.REGISTER_SUCCESS,
                payload:resp.data
     //console.log(resp.data)
    })
    if(resp.status==201){
        console.log('already you registered')
    }
    }
}
export const applyjob=(user)=>{
    return async (dispatch)=>{
        dispatch({
            type:authConstants.APPLY_REQUEST
        })
        const resp=await axiosInstance.post('/apply',{...user})
        const {message}=resp.data
        dispatch({
            type:authConstants.APPLIED_ALREADY,
            payload:message
        })
        //console.log("actions",resp.data)
    }
}

export const updatejobseeker=(user,id)=>{
    console.log("auth actions..............",user)
    return async (dispatch)=>{
        dispatch({
            type:authConstants.UPDATE_REQUEST
        })
    const resp=await axiosInstance.post(`/seekerupdate/${id}`,{...user})
        console.log(resp.data)
    dispatch({
        type:authConstants.UPDATE_SUCCESS,
        payload:resp.data.message
    })
    }

}

export const joberApplied=(user)=>{
    return async (dispatch)=>{
        dispatch({
            type:authConstants.APPLY_REQUEST
        })
        const resp=await axiosInstance.post('/appliedjobs',{...user})
        //console.log("auth actions",resp.data)
    }
}
export const getjob=(user)=>{
    return async (dispatch)=>{
        dispatch({
            type:authConstants.GET_REQUEST,

        })

        const resp=await axiosInstance.get(`/getapply/${user}`)
   console.log("hello",resp)
    dispatch({
        type:authConstants.GET_SUCCESS,
        payload:resp.data
    })
}
}
