import Header from './components/Header';
import './App.css';
import Post from './components/Post';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    
    <Routes>
      <Route index element ={
          <>
            <Header />
           <Post />
          </>
      } />

      <Route path={'/login'} element={
         <Login />
      } />

      <Route path={'/register'} element={
            <Register />
         } />

    </Routes>
  );
}

export default App;
