import { createContext } from "react";
import useDataFetching from "../hooks/useDataFetching";

export const ListsContext = createContext();

// create provider based on context object, passed as a prop
// value returns based on useDataFetching hook
export const ListsContextProvider = ({ children }) => {
  const [ loading, error, data ] = useDataFetching(
    'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists',
  );

  return (
    <ListsContext.Provider value={{ lists: data, loading, error }}>
      { children }
    </ListsContext.Provider>
  );
}

export default ListsContext;