import {createRouter, RouterProvider} from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen";
// import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';

const router = createRouter({ routeTree})

declare module '@tanstack/react-router' {

  interface Register {

    router: typeof router
  }
}

export const App = () => {

  // const queryClient = useQueryClient();

  return <>
    {/* <QueryClientProvider client={queryClient}> */}
    
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </>
};