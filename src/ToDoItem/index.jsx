import "./ToDoItem.css";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const ToDoItem = ({ text, completed, onDelete, onCompleted }) => {
  return (
    <li className=" bg-[rgb(250,250,250)] relative flex items-center mt-6 shadow-2xl">
      <div className="w-full flex my-7 ml-6 mr-6 gap-6 items-center">
        <FaCheck
          className={`w-8 h-8 text-gray-400 ${completed && "text-green-500"}`}
          onClick={onCompleted}
        />
        <p
          className={`w-full text-lg font-normal ${
            completed && "line-through"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="absolute right-3 -top-4">
        <FaTimes
          className={`w-8 h-8 text-gray-400 ${completed && "text-red-500"}`}
          onClick={onDelete}
        />
      </div>
    </li>
  );
};

export default ToDoItem;
