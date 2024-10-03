import { IUsers } from '../../types';
import * as React from 'react';

interface Props {
  user: IUsers
}

const UsersItem:React.FC<Props> = ({user}) => {
  const imageUrl = `${user.urlImage}` || "https://i.pinimg.com/474x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg"

  return (
    <div className="card p-2 m-2" style={{width: '230px'}}>
      <img src={imageUrl} className="card-img-top" alt="UserImg" style={{height: '200px'}}/>
      <div className="card-body">
        <p className="card-title">Name: <strong>{user.name}</strong></p>
        <p className="card-text">Email: <strong>{user.email}</strong></p>
        <p className="card-text">Status: <strong>{user.activity ? 'Активен' : 'Бездействует'}</strong></p>
        <p className="card-text">Role: <strong>{user.role}</strong></p>
      </div>
    </div>
  );
};

export default UsersItem;