import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Container } from '../components/Container'
import { MainHeader } from '../components/MainHeader'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Container>
      <MainHeader>Car Shop</MainHeader>
      <Outlet />
    </Container>
  )
}
