'use client';
import logo from '../../assets/images/logo.png';
import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../../AppProvider';

const NavbarApp = ({options}) => {

  const { userLogin, dispatch } = useAppContext();

  const [activeLink, setActiveLink] = useState('');
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
    if(theme){
      document.body.style.backgroundColor = '#303443';
    }else{
      document.body.style.backgroundColor = '#ffffff';
    }
  }
  return(
    <Navbar
      fluid
      rounded
      border
    >
      <Link to='/'>
        <Navbar.Brand as='b'>
          <img 
            alt='logo'
            className='mr-3 h-6 sm:h-9'
            src={logo}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            My Magic Gallery
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        {userLogin.name ? (
          <Dropdown
            inline
            label={<Avatar alt='Juan' img={userLogin.photo} rounded/>}            
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {userLogin.name}
              </span>
              <span className="block truncate text-sm font-medium">
                {userLogin.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => dispatch({type: 'USER_LOGOUT'})}
            >
              Sign Out
            </Dropdown.Item>
          </Dropdown>
        ):(
          <Avatar alt='Juan' img={userLogin.photo} rounded/>
        )}
        
        <Navbar.Toggle />
        <div onClick={handleTheme}>
          <DarkThemeToggle className='mx-3' />
        </div>
      </div>
      
      <Navbar.Collapse>      
        {options.map(option => (
          userLogin.name ? (
            (option.to !== '/login' && option.to !== '/register') ? (
              <Link to={option.to} key={option.name}>
                <Navbar.Link
                  active={activeLink === option.name}
                  as='b'
                  onClick={() => setActiveLink(option.name)}
                >
                  {option.name}
                </Navbar.Link>
              </Link> 
            ):(
              <span key={option.name}></span>
            ) 
          ): (
            (option.to !== '/users' && option.to !== '/mygallery') && (
              <Link to={option.to} key={option.name}>
                <Navbar.Link
                  active={activeLink === option.name}
                  as='b'
                  onClick={() => setActiveLink(option.name)}
                >
                  {option.name}
                </Navbar.Link>
              </Link> 
            )
            
          )
          
        ))}     
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavbarApp;