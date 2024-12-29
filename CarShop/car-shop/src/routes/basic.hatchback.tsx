import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basic/hatchback')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/basic/hatchback"!</div>
}
