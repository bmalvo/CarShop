import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  
  return <div>Hello "/basic/hatchback"!</div>
}

export const Route = createFileRoute('/basic/hatchback')({
  component: RouteComponent,
})