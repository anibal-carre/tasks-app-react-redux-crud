import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-zinc-800 text-2xl font-bold">Home</h1>

      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
