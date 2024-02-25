import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoDone } from './apiTodos';

function useToggleStatus() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: toggleStatus, error } = useMutation({
    mutationFn: (requestBody) => toggleTodoDone(requestBody.id, {done: requestBody.done}),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  return {isLoading, toggleStatus, error}
}

export default useToggleStatus