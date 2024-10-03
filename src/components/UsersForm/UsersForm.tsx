import { useState } from 'react';
import { IUser, IUsers } from '../../types';
import * as React from 'react';
interface IUsersFormProps {
  addNewUser: (newUser: IUsers) => void;
}

const UsersForm:React.FC<IUsersFormProps> = ({addNewUser}) => {

  const role: { userRole: string }[] = [
    {userRole: 'Admin'},
    {userRole: 'Employee'},
    {userRole: 'Consumer',}
  ]


    const [newUser, setNewUser] = useState<IUser>({
      name: '',
      email: '',
      activity: false,
      role: '',
      urlImage: '',
    })


  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      }
    })
  }


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addNewUser({
      id: crypto.randomUUID(),
      ...newUser,
    });

    setNewUser({
      name: "",
      email: "",
      activity: false,
      role:"",
      urlImage: ""
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new Users</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          onChange={changeUser}
          value={newUser.name}
          type="text"
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="email">Email:</label>
        <input
          onChange={changeUser}
          value={newUser.email}
          type="email"
          id="email"
          name="email"
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="urlImage">Url image:</label>
        <input
          value={newUser.urlImage}
          onChange={changeUser}
          type="url"
          id="urlImage"
          name="urlImage"
          className="form-control"
        />
      </div>

      <div className="btn-group mb-3" role="group" aria-label="Basic checkbox toggle button group">
        <input
          onChange={changeUser}
          checked={newUser.activity}
          type="checkbox"
          className="btn-check"
          id="activity"
          name="activity"
        />
        <label
          htmlFor="activity"
          className="btn btn-outline-primary"
        >
          Activity
        </label>
      </div>

      <div className="form-floating mb-3">
        Role:

        <select
          className="form-select p-2"
          name="role"
          id="role"
          value={newUser.role}
          onChange={changeUser}
        >
          <option value="" disabled>Выберите Роль</option>
          {role.map((item) => (
            <option key={item.userRole + 1} value={item.userRole}>{item.userRole}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default UsersForm;