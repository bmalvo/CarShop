import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  
  return <div>Hello "/basic/pickup"!</div>
}

export const Route = createFileRoute('/basic/pickup')({
  component: RouteComponent,
});