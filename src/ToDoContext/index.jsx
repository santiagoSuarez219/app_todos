import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(true);
  const {
    item: toDos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text,
      completed: false,
    });
    saveTodos(newToDos);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);
    saveTodos(newToDos);
  };

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    newToDos[toDoIndex].completed = true;
    saveTodos(newToDos);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        addToDo,
        openModal,
        setOpenModal,
        deleteToDo,
        completeToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
