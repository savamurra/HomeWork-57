import UsersItem from './UsersItem.tsx';
import {IUsers} from "../../types";
import * as React from "react";
interface Props {
    users: IUsers[]
}

const Users: React.FC<Props> = ({users}) => {
  return (
   <>
       {users.map((user) => (
           <UsersItem key={user.id} user={user}/>
       ))}
   </>
  );
};

export default Users;