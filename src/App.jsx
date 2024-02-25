import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Spinner from "./ui/Spinner";
import { updateFullList } from "./service/todosSlice";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  },
  []);

  useEffect(() => {
    const todosData = localStorage.getItem("todos");

    dispatch(updateFullList(todosData ? JSON.parse(todosData) : []));
  }, [dispatch])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {isLoading && <Spinner />}
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
