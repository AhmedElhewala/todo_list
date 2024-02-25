import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo as updateTodoApi } from './apiTodos';

function useUpdateTodo() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateTodo, error } = useMutation({
    mutationFn: (requestBody) => updateTodoApi(requestBody.id, requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  return {isLoading, updateTodo, error}
}

export default useUpdateTodo