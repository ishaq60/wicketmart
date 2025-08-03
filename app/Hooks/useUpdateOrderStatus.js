import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await fetch("/api/status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      return res.json();
    },
    onSuccess: () => {
      // Refetch orders after successful update
      queryClient.invalidateQueries(["orders"]);
    },
  });
};
