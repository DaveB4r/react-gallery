import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import MyGallery from './Pages/MyGallery';
import Register from './Pages/Register';
import Users from './Pages/Users';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/users' element={<Users />} />
          <Route path='/mygallery' element={<MyGallery />} />
        </Route>
      </Routes>
    </AppProvider>    
  );
}

export default App;
