import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clearList as clearListApi } from './apiTodos';

function useClearList() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: clearList, error } = useMutation({
    mutationFn: () => clearListApi(),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  return {isLoading, clearList, error}
}

export default useClearList