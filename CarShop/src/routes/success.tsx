import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader';
import { usePersonalData } from '../store/usePersonalData';
import { useEffect } from 'react';


const RouteComponent = () => {
    
    const placeOrder = usePersonalData(state => state.placeOrder);

    useEffect(() => {

        placeOrder();
    },[])

    return <>
        <PageHeader>Order complete!</PageHeader>
        <p>Your order was placed with any issues.</p>
        <Link to='/'>Go back to homepage</Link>
    </>
}


export const Route = createFileRoute('/success')({
    component: RouteComponent,
});