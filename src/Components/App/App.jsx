import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Users from '../../Pages/Users/Users';
import User from '../../Pages/User/User';
import NotFound from "../../Pages/NotFound/NotFound";

function App() {
  return (
    <div className='page'>
      <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
