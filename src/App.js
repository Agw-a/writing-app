import { Route, Routes } from 'react-router-dom';
import { GetPost } from './components/context/FetchPosts';
import AllPosts from './pages/AllPosts';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from './pages/Landing';
import CreatePost from './components/CreatePost';
import './styles/App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';




function App() {



  return (
    <GetPost>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/login'
          element={<SignIn />}
        />

        <Route
          path='/signup'
          element={<SignUp />}
        />
        {/* Protected routes */}
        <Route path={'/posts'} element={<AllPosts />}>
          <Route path='new-post' element={<CreatePost />} />
        </Route>

      </Routes>
    </GetPost>
  )
}




export default App;



