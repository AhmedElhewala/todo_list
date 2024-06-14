import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const Spinner = lazy(() => import("./ui/Spinner"));

import { updateFullList } from "./service/todosSlice";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const todosData = localStorage.getItem("todos");

    dispatch(updateFullList(todosData ? JSON.parse(todosData) : []));
  }, [dispatch])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      <Suspense fallback={<Spinner />}>
        <Home />
      </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
