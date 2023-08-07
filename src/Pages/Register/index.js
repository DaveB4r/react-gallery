import { Card } from "flowbite-react";
import { useCallback, useState } from "react";
import { useAppContext } from "../../AppProvider";
import { redirect } from 'react-router-dom';
import Form from "../../Components/Form";

const Register = () => {

  const { dispatch } = useAppContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      photo
    };

    dispatch({
      type: 'ADD_USER',
      value: user
    });
    e.target.reset();
    redirect('/users');
  }, [dispatch, email, name, password, photo]);

  const changeName = useCallback((e) => {
    setName(e.target.value)
  }, []);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, []);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const changePhoto = useCallback((e) => {
    setPhoto(e.target.value);
  },[])

  const elements = [
    {
      label: 'name',
      input: {
        type: 'text',
        onChange: changeName
      }
    },
    {
      label: 'email',
      input: {
        type: 'email',
        onChange: changeEmail
      }
    },
    {
      label: 'password',
      input: {
        type: 'password',
        onChange: changePassword
      }
    },
    {
      label: 'photo',
      input:{
        type: 'text',
        onChange: changePhoto
      }
    }

  ];
  return (
    <Card className="mt-3 max-w-sm mx-auto">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign Up</h3>
      <Form elements={elements} handleSubmit={handleSubmit} />
    </Card>

  )
}

export default Register;