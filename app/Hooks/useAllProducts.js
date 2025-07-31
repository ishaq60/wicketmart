import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllProducts = () => {
  const { data: products = [], refetch, isLoading, isError, error } = useQuery({
    queryKey: ['allproduct'],
    queryFn: async () => {
      const res = await axios.get('/api/allproduct');
      return res.data.res || res.data;
    },
  });

  return { products, refetch, isLoading, isError, error };
};

export default useAllProducts;