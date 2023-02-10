import { ITodo } from "@/components/types/types";
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
  todayTodo: ITodo[];
  setTodayTodo: Dispatch<SetStateAction<ITodo[]>>;
  oldTodo: ITodo[];
  setOldTodo: Dispatch<SetStateAction<ITodo[]>>;
  newTodo: ITodo[];
  setNewTodo: Dispatch<SetStateAction<ITodo[]>>;
}

export const StoreContext = createContext<IStoreContext>({
  newsOpen: true,
  setNewsOpen: () => {},
  todayTodo: [],
  setTodayTodo: () => {},
  oldTodo: [],
  setOldTodo: () => {},
  newTodo: [],
  setNewTodo: () => {},
});

const StoreComponent = ({ children }: { children: ReactNode }) => {
  const [newsOpen, setNewsOpen] = useState(true);
  const [todayTodo, setTodayTodo] = useState<ITodo[]>([]);
  const [oldTodo, setOldTodo] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<ITodo[]>([]);

  useEffect(() => {
console.log(newTodo)
  }, [newTodo]);

  return (
    <StoreContext.Provider
      value={{
        newsOpen,
        setNewsOpen,
        todayTodo,
        setTodayTodo,
        oldTodo,
        setOldTodo,
        newTodo,
        setNewTodo,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreComponent;
