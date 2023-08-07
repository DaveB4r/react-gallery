import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [],
  userLogin: JSON.parse(localStorage.getItem('userLogin')) ? JSON.parse(localStorage.getItem('userLogin')) : {
    name: '',
    email: '',
    password: '',
    photo: ''
  },
  userGallery: JSON.parse(localStorage.getItem('userGallery')) ? JSON.parse(localStorage.getItem('userGallery')) : [{
    user: '',
    gallery: []
  }]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      localStorage.setItem('users', JSON.stringify([...state.users, action.value]))
      return {
        ...state,
        users: JSON.parse(localStorage.getItem('users'))
      }

    case 'DELETE_USER':
      state.users = state.users.filter(user => user.name !== action.value);
      localStorage.setItem('users', JSON.stringify([...state.users]));
      return {
        ...state,
        users: JSON.parse(localStorage.getItem('users'))
      }
    case 'DELETE_ALL':
      localStorage.clear();
      return initialState

    case 'USER_LOGIN':
      localStorage.setItem('userLogin', JSON.stringify(action.value));
      return {
        ...state,
        userLogin: JSON.parse(localStorage.getItem('userLogin'))
      }
    case 'USER_LOGOUT':
      localStorage.removeItem('userLogin');
      return {
        ...state,
        userLogin: initialState.userLogin
      }
    case 'ADD_GALLERY':
      const myGallery = state.userGallery.find(gallery => gallery.user === action.value.user);
      if(myGallery){
        state.userGallery = state.userGallery.filter(gallery => gallery.user !== action.value.user);
      }      
      localStorage.setItem('userGallery', JSON.stringify([...state.userGallery, action.value]));      
      return {
        ...state,
        userGallery: JSON.parse(localStorage.getItem('userGallery'))
      }
    default:
      break;
  }
  return state;
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ users: state.users, userLogin: state.userLogin, userGallery: state.userGallery , dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export {
  AppProvider, useAppContext
}