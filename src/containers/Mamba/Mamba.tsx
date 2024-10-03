import Navbar from "../../components/Navbar/Navbar.tsx";
import UsersForm from "../../components/UsersForm/UsersForm.tsx";
import Users from "../../components/Users/Users.tsx";
import { useState } from "react";
import { IUsers } from "../../types";

const Mamba = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const addNewUser = (newUser: IUsers): void => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <div className="row">
          <div className="col-4 mb-2">
            <UsersForm addNewUser={addNewUser} />
          </div>
          <div className="col-lg-8 mb-2">
            <div className="row">
              <Users users={users} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mamba;
