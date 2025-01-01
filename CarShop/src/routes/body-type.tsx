import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData'
import { useShallow } from 'zustand/shallow';
import { Stepper } from '../components/Stepper';
import { Card, CardContent} from '@mui/material';
import { useGetCategories } from '../queries/useGetCategories';

interface Part {
  name: string;
  price: number;
}

interface Category {
  parts: Part[];
}

interface CategoriesResponse {
  [index: number]: Category;
}


const RouteComponent = () => {

  const { setBodyType } = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, setBodyType: state.setBodyType })));

  const navigate = useNavigate();
  
  const { data } = useGetCategories() as CategoriesResponse;

  const handleFetchHatchback = () => {
    const bodyPartName = data[0].parts[0].name
    const bodyPartPrice = data[0].parts[0].price
    setBodyType({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/drive' })
    
  }

  const handleFetchCoupe = () => {
    const bodyPartName = data[0].parts[1].name
    const bodyPartPrice = data[0].parts[1].price
    setBodyType({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/drive' })
    
  }

  const handleFetchPickup = () => {
    const bodyPartName = data[0].parts[2].name
    const bodyPartPrice = data[0].parts[2].price
    setBodyType({ name: bodyPartName, price: bodyPartPrice })
    
    navigate({ to: '/drive' })
    
  }


  return <>
    <Stepper step='body-type' />
    <Card>
      <CardContent>
        <PageHeader>Body type</PageHeader>
        <p>Check a body type for Your car</p>
        <p onClick={handleFetchHatchback}> Hatchback</p>
        <p onClick={handleFetchCoupe}> Coupe</p>
        <p onClick={handleFetchPickup}>Pickup</p>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/body-type')({
  component: RouteComponent,
});