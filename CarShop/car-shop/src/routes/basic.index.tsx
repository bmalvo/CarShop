import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  
  return (
    <div>
      <h2>Hello "/basic/"!</h2>
    </div>
  )
}

export const Route = createFileRoute('/basic/')({
  component: RouteComponent,
})