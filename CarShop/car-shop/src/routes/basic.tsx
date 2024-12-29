import { createFileRoute, Outlet } from '@tanstack/react-router'

const RouteComponent = () => {
  
  return <>
    {/* <div>Hello "/basic"!</div> */}
    <Outlet />
  </>
}


export const Route = createFileRoute('/basic')({
  component: RouteComponent,
});