import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader';
import { usePersonalData } from '../store/usePersonalData';
import { useEffect } from 'react';
import { Card, CardContent } from '@mui/material';


const RouteComponent = () => {
    
    const placeOrder = usePersonalData(state => state.placeOrder);

    useEffect(() => {

        placeOrder();
    },)

    return <>
        <Card>
            <CardContent>              
                <PageHeader>Order complete!</PageHeader>
                <p>Your order was placed with any issues.</p>
                <Link to='/'>Go back to homepage</Link>
            </CardContent>
        </Card>
    </>
};


export const Route = createFileRoute('/success')({
    component: RouteComponent,
});