import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

const TaskList = ({ showModal, setShowModal }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 mt-20">
      {tasks.map((task) => (
        <div
          className="w-[350px] min-h-[200px] p-3 rounded-md border hover:shadow-lg hover:scale-110 hover:transition-all"
          key={task.id}
        >
          <div className="flex w-full gap-2 mb-4">
            <span className="font-bold text-zinc-700">Title:</span>
            <h3 className="font-semibold">{task.title}</h3>
          </div>
          <div className="w-full flex flex-col mb-14">
            <span className="font-bold text-zinc-700">Description:</span>
            <p>{task.description}</p>
          </div>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-300"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
          <Link
            className="bg-blue-500 text-white px-3 py-1 rounded-sm hover:bg-blue-300"
            to={`/edit-task/${task.id}`}
          >
            Edit
          </Link>
        </div>
      ))}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create New Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <TaskForm setShowModal={setShowModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default TaskList;
