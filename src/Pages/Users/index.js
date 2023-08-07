'use client';

import { Table, Button } from "flowbite-react";
import { useAppContext } from "../../AppProvider";

const Users = () => {
  const { users, dispatch } = useAppContext();
  
  return (
    <div className="mt-2 sm:container mx-4">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Users</h3>
      <Table>
        <Table.Head>
          <Table.HeadCell>
            Name
          </Table.HeadCell>
          <Table.HeadCell>
            Email
          </Table.HeadCell>
          <Table.HeadCell>
            <Button 
              color='failure'
              onClick={() => dispatch({type: 'DELETE_ALL'})}  
            >Delete All</Button>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users && users.map(user => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user.name}>
              <Table.Cell>
                {user.name}
              </Table.Cell>
              <Table.Cell>
                {user.email}
              </Table.Cell>
              <Table.Cell>
                <Button 
                  color='failure'
                  onClick={() => dispatch({type: 'DELETE_USER', value: user.name})}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
            
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Users;