import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader';


const RouteComponent = () => {
    return <>
        <PageHeader>Welcome in CarShop!</PageHeader>
        <p>Where You can compose Your wonder Car in simple and convinient way.</p>
        <Link to='/body-type'>Start order!</Link>
  </>
}

export const Route = createFileRoute('/')({
    component: RouteComponent,
});