import { Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../Components/Footer";
import NavbarApp from "../../Components/Navbar";

const Layout = () => {
  const routes = [
    {
      to:'/',
      name: 'Home'
    },
    {
      to:'/register',
      name: 'Sign up'
    },
    {
      to:'/login',
      name: 'Sign in'
    },
    {
      to:'/users',
      name: 'Users'
    },
    {
      to:'/mygallery',
      name: 'My Gallery'
    }
  ]
  return(
    <Flowbite>
      <NavbarApp options={routes}/>
      <div className="container content">
      <Outlet />
      </div>
      <FooterComponent />
    </Flowbite>
  );
}

export default Layout;