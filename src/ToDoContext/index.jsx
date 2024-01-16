import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    item: toDos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedToDos = toDos.filter((toDo) => toDo.completed).length;
  const totalToDos = toDos.length;

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

  const searchedToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        addToDo,
        openModal,
        setOpenModal,
        deleteToDo,
        completeToDo,
        completedToDos,
        totalToDos,
        loading,
        error,
        searchValue,
        setSearchValue,
        searchedToDos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
