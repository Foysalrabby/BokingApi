import { createContext, useReducer } from "react";

// Initial state
const initialStage = {
    destinationdata: undefined,
    dates: [],
    optionsnum: {
        adult: undefined,
        child: undefined,
        room: undefined,
    },
};

// Create Context
export const SearchContext = createContext(initialStage);

// Reducer function
const searchReducer = (state, action) => {
    switch (action.type) {
        case "New_Search":
            return {
                ...state,
                ...action.payload,
            };
        case "Reset_Search":
            return initialStage;
        default:
            return state;
    }
};

// Provider component
export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, initialStage);

    return (
        <SearchContext.Provider value={{ 
            ...state, 
            dispatch 
        }}>
            {children}
        </SearchContext.Provider>
    );
};