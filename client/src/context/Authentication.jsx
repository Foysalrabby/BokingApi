import { createContext,  useEffect,  useReducer } from "react"

const InitialStage={
   user:JSON.parse(localStorage.getItem("user"))||null,
   loading:false,
   error:null
}
// Create Context
export const AuthLogincontext=createContext(InitialStage);
// Reducer function
const AuthReducer=(state,action)=>{
    switch (action.type){
        case "Login_Start":
            return {
                user:null,
                loading:true,
                error:null

            }
            case "Login_Success":
                return {
                    user:action.payload,
                    loading:false,
                    error:null
    
                }
                case "Login_Fail":
                    return {
                        user:null,
                        loading:false,
                        error:action.payload
        
                    }
                    case "Logout":
                        return {
                            user:null,
                            loading:false,
                            error:null
            
                        }
         default:
              return state;    
    }

};
//Provider component

export const AuthContextProvider=({children})=>{
    const [state,dispatch ]=useReducer(AuthReducer,InitialStage);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
      }, [state.user]);
    
    return (
        // Create Context ata use hoi
      //export const AuthLogincontext=createContext(InitialStage);
        <AuthLogincontext.Provider value={{
           user:state.user,
           loading:state.loading,
           error:state.error,
           dispatch
        }}>
              {children}
        </AuthLogincontext.Provider>
    );


};

  
  
    