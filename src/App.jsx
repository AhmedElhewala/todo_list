import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Spinner from "./ui/Spinner";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  },
  [])

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
