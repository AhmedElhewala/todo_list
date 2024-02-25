import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo as deleteTodoApi } from './apiTodos';

function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteTodo, error } = useMutation({
    mutationFn: (id) => deleteTodoApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  return {isLoading, deleteTodo, error}
}

export default useDeleteTodo