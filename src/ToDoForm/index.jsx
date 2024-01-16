import { useContext, useState } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css";

const ToDoForm = () => {
  const { setOpenModal, addToDo, toDos } = useContext(ToDoContext);
  const [newToDoValue, setNewToDoValue] = useState("");
  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  const buttonsStyles =
    "to-do-button cursor-pointer text-xl text-[#202329] font-normal h-12 rounded-sm";
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-96 bg-white py-8 px-10 flex flex-col justify-center items-center "
    >
      <label className="w-full text-center font-bold text-xl text-[#1E1E1F] mb-6">
        Escribe tu nuevo ToDo
      </label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newToDoValue}
        onChange={onChange}
        className="bg-[#F9FBFC] w-full border-2 border-[#202329] rounded-sm drop-shadow-[32px_35px_41px_rgba(32,35,41,0.25)] text-[#1E1E1F] text-xl text-center p-3 h-24 placeholder:text-[#A5A5A5] placeholder:font-normal focus:outline-[#61DAFA]"
      />
      <div className="mt-4 flex items-center w-full">
        <button
          type="button"
          className={`${buttonsStyles} bg-transparent mr-2`}
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`${buttonsStyles} bg-[#61DAFA] drop-shadow-[0px_5px_25px_rgba(97,218,250,0.5)]`}
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
