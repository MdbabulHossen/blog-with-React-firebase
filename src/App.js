import CreatePost from "./componets/createPost/CreatePost";
import Navbar from "./componets/Navbar/Navbar";
import Posts from "./componets/post/Posts";
import Home from "./componets/Home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PrivetOutlet from "./PrivetOutlet";
import Login from "./componets/Log/Login";
import Register from "./componets/Log/Register";
import { useUserContex } from "./contex/UserContex";
import './App.css'
import Footer from "./componets/footer/Footer";
import SinglePost from "./componets/post/SinglePost";
function App() {
  
 const{user}=useUserContex()

 
  return (
   <> 
  
   <BrowserRouter>
   <Navbar />
   <Routes>
  
     <Route path={"/"} element={<Home />} /> 
     <Route path={"/post"} element={<Posts />} />
     <Route path ={"/login"} element={<Login />} />
     <Route path ={"/register"} element={<Register />} />
     <Route path={"singlepost/:id"} element ={<SinglePost />} />
     
   <Route path="/*" element={<PrivetOutlet user={user}/>}>
   <Route path="create" element={<CreatePost />}/>
   </Route>
    




   </Routes>
   <Footer />
   </BrowserRouter>

   </>
  );
}

export default App;
