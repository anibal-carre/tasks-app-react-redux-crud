import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button
            className="bg-red-500 text-white"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
