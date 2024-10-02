import Navbar from '../../components/Navbar/Navbar.tsx';
import UsersForm from '../../components/UsersForm/UsersForm.tsx';

const Mamba = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <div className='row'>
          <div className='col-4'>
            <UsersForm/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mamba;