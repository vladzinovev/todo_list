import { IStoreContext, ITodo } from "@/types/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const StoreContext = createContext<IStoreContext>({
  newsOpen: true,
  setNewsOpen: () => {},
  oldTodoOpen: false,
  setOldTodoOpen: () => {},
  checked: false,
  setChecked: () => {},
  todayTodo: [],
  setTodayTodo: () => {},
  oldTodo: [],
  setOldTodo: () => {},
  newTodo: [],
  setNewTodo: () => {},
  id: 1,
  setId: () => {},
});

const StoreComponent = ({ children }: { children: ReactNode }) => {
  const [newsOpen, setNewsOpen] = useState(true);
  const [oldTodoOpen, setOldTodoOpen] = useState(false);
  
  const [checked, setChecked] = useState(false);
  const [todayTodo, setTodayTodo] = useState<ITodo[]>([]);
  const [oldTodo, setOldTodo] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<ITodo[]>([]);
  const [id, setId] = useState<number>(1);

  function sortTodo(todo: ITodo[], setTodo: Dispatch<SetStateAction<ITodo[]>>) {
    const forSort = [...todo];
    setTodo(
      forSort.sort((a: ITodo, b: ITodo): number => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      })
    );
  }
  useEffect(() => {
    sortTodo(oldTodo, setOldTodo);
    sortTodo(newTodo, setNewTodo);
  }, [id]);

  return (
    <StoreContext.Provider
      value={{
        newsOpen,
        setNewsOpen,
        oldTodoOpen,
        setOldTodoOpen,
        checked,
        setChecked,
        todayTodo,
        setTodayTodo,
        oldTodo,
        setOldTodo,
        newTodo,
        setNewTodo,
        id,
        setId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreComponent;
