import { NavBar } from "./NavBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <NavBar />

      <div className="w-full h-20 mt-10 flex justify-end items-end px-10 ">
        <button
          onClick={() => setShowModal(true)}
          className="bg-zinc-800 text-white h-10 w-[180px] rounded-sm hover:bg-zinc-600"
        >
          Create New Task
        </button>
      </div>
      <TaskList setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Home;
