import logo from './logo.svg';
import './App.css';
import Father from './component/lesson1/Father';
import Background from './component/lesson1/Background';
import ToDoList from './component/lesson2/ToDoList';
import ShowList from './component/lesson2/ShowList';
import Shop from './component/lesson3/Shop';
import{BrowserRouter, Routes,Route,Link}from 'react-router-dom';
// import CoursesHome from './component/lesson5/CoursesHome';
// import CoursesLogIn from './component/lesson5/CoursesLogIn';
// import CoursesDatails from './component/lesson5/CoursesDatails';
// import CoursesList from './component/lesson5/CoursesList';
// import Data from './component/lesson5/Data';
import Gym from './component/lesson6/Gym';
import User from './component/lesson7/User';
import Arries from './component/lesson7/Arries';
import MyText from './component/lesson7/MyText';
import TimerWrapper from './component/lesson7/TimerWrapper';
import TimerFunction from './component/lesson7/TimerFunction';
import TimmerWrapF from './component/lesson7/TimmerWrapF';
import TimerWrapClass from './component/lesson7/TimmerWrapClass';
import ListSong from './component/lesson8/ListSong';
import PlaySong from './component/lesson8/PlaySong';
import PostList from './component/lesson9/store/PostList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Alert from '@mui/material/Alert';
import { Snackbar, Button } from '@mui/material';
import FormIk from'./component/lesson10/FormIk';
import HookForm from './component/lesson10/HookForm';
import NavBar from './component/lesson12/NavBar';
import Protected from './component/lesson12/Protected';
import CoursesHome from './component/lesson12/CoursesHome';
import CoursesLogIn from './component/lesson12/CoursesLogIn';
import CoursesDatails from './component/lesson12/CoursesDatails';
import CoursesList from './component/lesson12/CoursesList';
import Data from './component/lesson12/Data';
import React, { useState } from "react";

function App() {
  // const message=useSelector(x=>x.mes.message)
  const [user, setUser]=useState({name:"",password:" "})
  return (<div>
    {/*<Father></Father>
    <Background></Background>
    <Background></Background>
   <Background></Background>*/}
    {/* <ToDoList></ToDoList>
    <ShowList></ShowList> */}
    {/* <Shop></Shop> */}
    {/* lesson5 */}
    <BrowserRouter>
    {/* <nav>
      <ul>
        <li><Link to="home">עמוד הבית</Link></li>
        <li><Link to="list">רשימה</Link></li>
        <li><Link to="login">התחברות</Link></li>
      </ul>
    </nav>
       */}
       <NavBar></NavBar>
    // <Routes>
      
    //   <Route path="home" element={<CoursesHome/>}></Route>
    //   <Route path="list/:name" element={<CoursesList/>}></Route>
    //   <Route path="list" element={<Protected user={user}><CoursesList/></Protected>}>
    //       <Route path="datails/:id" element={<CoursesDatails/>}></Route>
    //   </Route>
    //   <Route path=" " element={<CoursesLogIn user={user} setUser={setUser}/>}></Route>
    // </Routes>
    </BrowserRouter>
   {/* lesson6 */}
   {/* <Gym></Gym> */}
   {/* lesson7 */}
  {/* <User></User> */}
  {/* <Arries></Arries> */}
  {/* <MyText></MyText> */}
  {/* <TimerWrapper></TimerWrapper> */}
  {/* <TimmerWrapF></TimmerWrapF> */}
  {/* <FormIk></FormIk> */}
  {/* <HookForm></HookForm> */}
  {/* <TimerWrapClass></TimerWrapClass> */}
  {/* <ListSong></ListSong>
  <PlaySong></PlaySong> */}
  
  {/* <PostList></PostList>
  
  {message&&<h1>{message.header}</h1>} */}
  {/* {message&&<Snackbar>
    <Alert severity={message.id==1?"error":"warning"} className="alertMessage">{message?.header}</Alert> </Snackbar>} */}
   
    </div>
    
  );
}

export default App;