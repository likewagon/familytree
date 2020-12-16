import { 
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR,
  REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,
  FORGET_PASSWORD, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR,
  PROFILE, PROFILE_SUCCESS, PROFILE_ERROR,
  SET_USER
} from './actionTypes';

const initialState = {
  loading: false,  
  user: null,
  error: null 
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        loading: true,
        user: null
      }
      break;

    case LOGIN_SUCCESS:      
      state = {
        ...state,
        loading: false,
        user: action.payload.user
      }
      break;
    
    case LOGIN_ERROR:
      state = {
        ...state,
        loading: false,
        user: null
      }
      break;

    case LOGOUT:
      state = { 
        ...state,         
      };
      break;

    case LOGOUT_SUCCESS:
      state = { 
        ...state,
        user: null
      };      
      break;

    case LOGOUT_ERROR:
      state = {
        ...state,
        user: null
      }
    ////////////////////////////////

    case REGISTER:
      state = {
        ...state,
        loading: true,
        user: null,
        error: null
      }
      break;

    case REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload,        
      }
      break;

    case REGISTER_ERROR:
      state = {
        ...state,
        loading: false,
        user: null,
        error: action.payload
      }
      break;
    //////////////////////////

    case FORGET_PASSWORD:
      state = {
        ...state,
      };
      break;

    case FORGET_PASSWORD_SUCCESS:
      state = {
        ...state,
        success: action.payload
      };
      break;

    case FORGET_PASSWORD_ERROR:
      state = { 
        ...state, 
        error: action.payload 
      };
      break;
    /////////////////////////////

    case PROFILE:
      state = { 
        ...state 
      }
      break;

    case PROFILE_SUCCESS:
      state = { 
        ...state, 
        user: action.payload 
      }
      break;

    case PROFILE_ERROR:
      state = { 
        ...state, 
        error: action.payload 
      };
      break;
    //////////////////////////

    case SET_USER:      
      state = {
        ...state, 
        user: action.payload
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Auth;
