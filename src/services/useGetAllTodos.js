import {useQuery} from "@tanstack/react-query"
import { getAllTodos } from "./apiTodos"

function useGetAllTodos() {
  const {isLoading, data: todos, error} = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  })

  return {isLoading, todos, error}
}

export default useGetAllTodos