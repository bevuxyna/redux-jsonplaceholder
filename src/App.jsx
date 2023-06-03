import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users';
import User from './Pages/User/User';

function App() {
  return (
    <div className='page'>
      <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/user/:userId' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
