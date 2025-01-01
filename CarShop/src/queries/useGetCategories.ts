import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

// type BodyType = {


// }

export const useGetCategories    = () => {
    
    const { apiGet } = useApi();
    
    const { data, error, isPending } = useQuery({
        
        queryKey: ['categories'],
        queryFn: async () => {
            
            return apiGet('categories')
        }
    })

    return {
        data,
        error,
        isPending
    }
};