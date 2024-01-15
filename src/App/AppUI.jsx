import { useContext } from "react";
import ToDoCounter from "../ToDoCounter";
import ToDoSearch from "../ToDoSearch";
import ToDoList from "../ToDoList";
import ToDoItem from "../ToDoItem";
import CreateToDoButton from "../CreateToDoButton";
import Modal from "../Modal";
import ToDoForm from "../ToDoForm";
import { ToDoContext } from "../ToDoContext";

const AppUI = () => {
  const { openModal, setOpenModal, toDos, deleteToDo, completeToDo } =
    useContext(ToDoContext);
  return (
    <>
      <div className="my-0 mx-6 relative h-screen">
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList>
          {toDos.map((toDo) => (
            <ToDoItem
              key={toDo.text}
              text={toDo.text}
              completed={toDo.completed}
              onDelete={() => deleteToDo(toDo.text)}
              onCompleted={() => completeToDo(toDo.text)}
            />
          ))}
        </ToDoList>
        <CreateToDoButton setOpenModal={setOpenModal} />
      </div>
      {openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
    </>
  );
};

export default AppUI;
