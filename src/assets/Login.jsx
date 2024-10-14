import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../slices/postSlice";

export default function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  function handleClick() {
    alert("🎁🎁🎉Your are most welcome to our page ! ✨🎉🎉  ");
    setOpen(true)
  }
  function handleSubmit (e) {
    e.preventDefault()
    navigate('/home')
    dispatch(user(name));
  }
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center text-center">
      <button
        className="h-16 w-64  bg-blue-900  text-[19px] text-white  rounded-lg"
        onClick={handleClick}
      >
        Welcome
      </button>
      {
        open && (

          <form onSubmit={handleSubmit} className="flex gap-4">
        <input type="text" placeholder="Please enter your name" required className="border border-teal-700 p-2" 
        value={name}
        onChange={(e) => setName(e.target.value)} />
        <button className="p-2 bg-green-700 text-white rounded-lg">Submit</button>
      </form>
      )
    }
    </div>
  );
}
