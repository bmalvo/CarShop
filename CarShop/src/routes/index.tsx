import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader';
import { useOrderRedirect } from '../hooks/useOrderRedirect';
import { Card, CardContent, Container } from '@mui/material';


const RouteComponent = () => {

    useOrderRedirect();

    return <>
        <Container>
            <Card>
                <CardContent>
                    <PageHeader>Welcome in CarShop!</PageHeader>
                    <p>Where You can compose Your wonder Car in simple and convinient way.</p>
                    <Link to='/body-type'>Start order!</Link>
                </CardContent>
            </Card>
        </Container>
    </>
};

export const Route = createFileRoute('/')({
    component: RouteComponent,
});