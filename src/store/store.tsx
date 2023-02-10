import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IStoreContext {
  newsOpen:boolean;
  setNewsOpen:Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext<IStoreContext>({
  newsOpen:true,
  setNewsOpen:() => {},
});

const StoreComponent = ({ children }: { children: ReactNode }) => {
  const [newsOpen,setNewsOpen]=useState(true);


  useEffect(() => {
    
  }, []);

  return (
    <StoreContext.Provider
      value={{
        newsOpen,
        setNewsOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreComponent;
