import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basic/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2>Hello "/basic/"!</h2>
    </div>
  )
}
