import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basic/pickup')({
  component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/basic/pickup"!</div>
}
