import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useOrderdata = (email) => {
  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['user', email],
    enabled: !!email, // only runs if `email` is provided
    queryFn: async () => {
      const res = await axios.get(`/api/userorder/${email}`);
      console.log(res.data)
      return res.data;
    },
  });

  return { orders, isLoading, error, refetch };
};

export default useOrderdata;