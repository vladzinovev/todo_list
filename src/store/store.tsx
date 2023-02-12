import { ITodo } from "@/types/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IStoreContext {
  newsOpen: boolean;
  setNewsOpen: Dispatch<SetStateAction<boolean>>;
  oldTodoOpen: boolean;
  setOldTodoOpen: Dispatch<SetStateAction<boolean>>;
  settingsOpen: boolean;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  createTodoOpen: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  setCreateTodoOpen: Dispatch<SetStateAction<boolean>>;
  todayTodo: ITodo[];
  setTodayTodo: Dispatch<SetStateAction<ITodo[]>>;
  oldTodo: ITodo[];
  setOldTodo: Dispatch<SetStateAction<ITodo[]>>;
  newTodo: ITodo[];
  setNewTodo: Dispatch<SetStateAction<ITodo[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

export const StoreContext = createContext<IStoreContext>({
  newsOpen: true,
  setNewsOpen: () => {},
  oldTodoOpen: false,
  setOldTodoOpen: () => {},
  settingsOpen: false,
  setSettingsOpen: () => {},
  createTodoOpen: false,
  setCreateTodoOpen: () => {},
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [createTodoOpen, setCreateTodoOpen] = useState(false);
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
        settingsOpen,
        setSettingsOpen,
        createTodoOpen,
        setCreateTodoOpen,
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
