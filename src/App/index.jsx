import { ToDoProvider } from "../ToDoContext";
import "./App.css";
import AppUI from "./AppUI";

const App = () => {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
};

export default App;
