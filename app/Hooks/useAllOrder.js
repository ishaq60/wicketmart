import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllorders = () => {
  const { data: orders = [], refetch, isLoading, isError, error } = useQuery({
    queryKey: ['allorders'],
    queryFn: async () => {
      const res = await axios.get('/api/admin/allorders');
      return res.data.res || res.data;
    },
  });

  return { orders, refetch, isLoading, isError, error };
};

export default useAllorders;