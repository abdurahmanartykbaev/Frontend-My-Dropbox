import "./App.css";
import Login from "./Layout/AuthPage/Login";
import Home from "./Layout/Home/Home";
import Register from "./Layout/AuthPage/Register";
import { Route, Routes } from "react-router-dom";
import Folder from "./Layout/Folder/Folder";
import { auth } from "./api/firebase";
import UserPage from "./Layout/UserPage/UserPage";

function App() {
  let user = JSON.parse(localStorage.getItem("localUser"));
  auth.onAuthStateChanged((el) => {
    if (!user) {
      localStorage.setItem("localUser", JSON.stringify(el));
    }
  });
  
  return (
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/home' element={user ? <Home /> : <Login />} />
        <Route path='/home/user/:id' element={user ? <UserPage /> : <Login />} />
        <Route
          path='/home/folder/:id'
          element={user ? <Folder /> : <Login />}
        />
      </Routes>
  );
}

export default App;
