import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Useproduct= (id) => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['product', id],
    enabled: !!id, // only runs if `email` is provided
    queryFn: async () => {
      const res = await axios.get(`/api/product/${id}`);
      console.log(res.data)
      return res.data;
    },
  });

  return { product, isLoading, error, refetch };
};

export default Useproduct;