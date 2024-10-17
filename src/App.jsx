
import { Routes, Route } from 'react-router-dom'
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

function App() {
  
// modify below code and use more modern react router version.
//   come back after november
  return (
    <>

    <Routes>
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

    </Routes>
    
    </>
  )
}

export default App
