import { BsFillPenFill } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { ITodo } from "../../interfaces/ITodo";
import Modal from "@components/Core/Modal";
import toast from "react-hot-toast";
import useToggle from "hooks/useToggle";
import { deleteTodo } from "services/Todo.requests";

const getDate = (date: string) => {
  return date.split("T")[0];
};

const Todo = ({ todo }: { todo: ITodo }): JSX.Element => {
  const { isOpen, open, close } = useToggle(false);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id).then((res) => {
      close();
      res.data.message == "success" && toast.success("Deleted");
    });
  };

  return (
    <main className="py-3 px-3 lg:px-5 2xl:px-7 first:border-0 border-red-100 border-t flex-item-center justify-between">
      <Modal
        isOpen={isOpen}
        cancel={close}
        ok={handleDeleteTodo}
        okText="Delete"
        title="Delete"
        text="Do you want delete?"
      />
      <section className="flex flex-col">
        <div className="flex flex-col mb-2">
          <span className="font-medium text-lg">{todo.title}</span>
          {/* <span className="text-gray-500 mt-1">{todo.text}</span> */}
        </div>
        <span className="flex-item-center text-gray-400 text-sm">
          <IoCalendarOutline className="mr-1" /> {getDate(todo.created)}
        </span>
      </section>
      <div className="flex-item-center space-x-2">
        <span className="button-cyan w-10 h-10">
          <BsFillPenFill />
        </span>
        <span onClick={open} className="button-red w-10 h-10">
          <FaTrash />
        </span>
      </div>
    </main>
  );
};

export default Todo;
