import { Alert, Card } from "flowbite-react";
import { useCallback, useState } from "react";
import { useAppContext } from "../../AppProvider";
import Form from "../../Components/Form";

const Login = () => {
  const { users, dispatch } = useAppContext();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const changeName = useCallback((e) => {
    setName(e.target.value)
  },[]);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
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
      label: 'password',
      input: {
        type: 'password',
        onChange: changePassword
      }
    }
  ];

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const userLogin = users.find(user => user.name === name && user.password === password);
    if(userLogin){
      setMessage(`User ${name} logged succesfully`);
      setColor('success');
      dispatch({type:'USER_LOGIN', value: userLogin})
    }else{
      setMessage('User or password incorrect');
      setColor('failure');
    }
  },[name, password,users, dispatch])

  return (
    <Card className="mt-3 max-w-sm mx-auto">
      {message && (
        <Alert color={color}>
          <span>
            <p>
              <span className="font-medium">
                {message}
              </span>
            </p>
          </span>
        </Alert>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in</h3>
      <Form elements={elements} handleSubmit={handleSubmit}/>
    </Card>
  );
}

export default Login;