import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  
  return <div>Hello "/basic/coupe"!</div>
}


export const Route = createFileRoute('/basic/coupe')({
  component: RouteComponent,
});