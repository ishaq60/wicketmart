import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllusers = () => {
  const { data: users = [], refetch, isLoading, isError, error } = useQuery({
    queryKey: ['alluser'],
    queryFn: async () => {
      const res = await axios.get('/api/alluser');
      return res.data.res || res.data;
    },
  });

  return { users, refetch, isLoading, isError, error };
};

export default useAllusers;