import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = ({ setShowModal }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
      setShowModal(false);
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <input
        className="border h-8 px-2"
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />

      <textarea
        className="border h-24 px-2"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>

      <div className="w-full flex justify-between mt-5">
        <button
          onClick={() => setShowModal(false)}
          className="w-[45%] bg-red-700 text-white py-1 rounded-sm"
        >
          Close
        </button>
        <button className="w-[45%] bg-zinc-800 text-white py-1 rounded-sm">
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
