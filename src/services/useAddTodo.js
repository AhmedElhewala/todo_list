import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo as addTodoApi } from './apiTodos';


function useAddTodo() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: addTodo, error } = useMutation({
    mutationFn: (todo) => addTodoApi(todo),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  return {isLoading, addTodo, error}
}

export default useAddTodo