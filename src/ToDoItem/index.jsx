import "./ToDoItem.css";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const ToDoItem = ({ text, completed, onDelete, onCompleted }) => {
  const iconStyles =
    "cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold";
  return (
    <li className=" bg-[#FAFAFA] relative flex justify-center items-center mt-6 shadow-2xl">
      <div className="cursor-pointer flex justify-center items-center h-12 w-12 ">
        <CheckIcon className="w-8 h-8 font-bold" onClick={onCompleted} />
      </div>
      <p
        className={`ToDoItem my-6 text-lg font-normal ${
          completed && "line-through"
        }`}
      >
        {text}
      </p>
      <div className="cursor-pointer flex justify-center items-center h-12 w-12 absolute -top-6 right-0">
        <XMarkIcon className="w-8 h-8 font-bold" onClick={onDelete} />
      </div>
    </li>
  );
};

export default ToDoItem;
