
import { Routes, Route, createBrowserRouter, RouterProvider, redirect, Navigate } from 'react-router-dom'
import './App.css'
import Login from './assets/Login'
import Home from './assets/Home'
import AllFriends from './assets/AllFriends'
import Header from './assets/Header'
import LeftSideBar from './assets/LeftSideBar'
import SavedPost from './assets/SavedPost'
import RightSideBar from './assets/RightSideBar'
import FriendDetail from './assets/FriendDetail'
import AllJobs from './assets/AllJobs'
import Feed from './assets/Feed';

function App() {
 
// modify below code and use more modern react router version.
//   come back after november

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    children : [
      { 
        index : true,
        element : <Navigate to={'/home'} replace />,
        // when user navigate to / page , it will automatically navigate to /home page.
      },
      { 
        path:'/home',
        element : <Feed />,
      },
      {
        path : '/network',
        element : <AllFriends />,
        // here we should omit right side bar,
      },
      {
        path : '/network/detail/:id',
        element : <FriendDetail />
      },
      {
        path : 'saved-post',
        element : <SavedPost />
      }
    ]

  }
])
  return (
    <>
    <RouterProvider router={router} />

    {/* <Routes>
      <Route path='/' element={
       <Login/>
      } />
      <Route path='/home' element={
        <>
        <Home/>
        </>
      } />
      <Route path='/network' element={
        <>
    <Header />
    <LeftSideBar />
        <AllFriends />
        </>
      }
         />
         <Route path='/saved-post' element={
          <>
              <Header />
              <LeftSideBar />
             <SavedPost />
             <RightSideBar />
          </>
         } />
         <Route path='/network/detail/:id' element={
          <>
           <Header />
           <LeftSideBar />
          <FriendDetail />
          </>
         } />
         <Route path='/jobs' element={<>
          <AllJobs />
         </>} />

    </Routes> */}
    
    </>
  )
}

export default App
