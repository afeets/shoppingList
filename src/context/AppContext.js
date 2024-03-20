import { ListsContextProvider } from './ListsContext';
import { ItemsContextProvider } from './ItemsContext';

// wrap any component passed to it as a children prop
const AppContext = ({ children }) => {
  return (
    <ListsContextProvider>
      <ItemsContextProvider>

      </ItemsContextProvider>
    </ListsContextProvider>
  );
};

export default AppContext;