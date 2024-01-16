import { useContext } from "react";
import { ToDoContext } from "../ToDoContext";

const ToDoSearch = () => {
  const { searchValue, setSearchValue } = useContext(ToDoContext);
  return (
    <div className="w-full px-6 pb-16">
      <input
        type="text"
        className="bg-[#F9FBFC] rounded-sm border-2 border-[#202329] h-16 w-full text-2xl text-center font-normal text-[#1E1E1F] shadow-2xl placeholder:text-[#A5A5A5] placeholder:font-normal focus:outline-[#61DAFA]"
        placeholder="Cortar cebolla"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
};

export default ToDoSearch;
