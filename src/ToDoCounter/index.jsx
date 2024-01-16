import { useContext } from "react";
import { ToDoContext } from "../ToDoContext";

const ToDoCounter = () => {
  const { completedToDos, totalToDos } = useContext(ToDoContext);
  return (
    <h1 className="text-2xl text-center pt-28 pb-12 font-normal">
      Has completado <span className="font-bold">{completedToDos}</span> de{" "}
      <span className="font-bold">{totalToDos}</span> TODOs
    </h1>
  );
};

export default ToDoCounter;
