import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

type OrderType = {
    "firstName": string,
    "lastName": string,
    "email": string,
    "value": string,
    "details": string[]
}

type OrderTypeDTO = Omit<OrderType, 'id'>

export const useCreateOrderMutation = () => {
    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { mutate, error, isPending } = useMutation({
        
        mutationKey: ['orders', 'create'],
        mutationFn: async (payload: OrderType) => {
            
            return apiPost<OrderType, OrderTypeDTO>('orders', payload);
        },
        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ['orders']
            })
        }
    });

    return {
        mutate,
        error,
        isPending
    };
};