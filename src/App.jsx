import { Header, Blogs, Paginations } from "./components";
import { ContextProvider, useAppContext } from "./context/AppContext";

function App() {
  return (
    <div className="w-full text-black bg-gray-50">
    <ContextProvider>
      <Header />
      <Blogs />
      <Paginations />
    </ContextProvider>
    </div>
  )
}

export default App