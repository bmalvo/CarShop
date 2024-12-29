import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    {/* <div>Hello "/basic"!</div> */}
    <Outlet />
  </>
}
