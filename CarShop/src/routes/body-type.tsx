import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData'
import { useShallow } from 'zustand/shallow';
import { Stepper } from '../components/Stepper';
import { Card, CardContent, Grid} from '@mui/material';
import { useGetCategories } from '../queries/useGetCategories';
import { GridElement } from '../components/GridElement/GridElement';

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
        <p>Check a body type for Your car</p><br /><br />
        <GridElement>
          <Card>
            <CardContent>
              <PageHeader>Hatchback</PageHeader>
        <img src='https://i.imageupload.app/034ea4f16609262c7616.jpeg' onClick={handleFetchHatchback} />
</CardContent>
          </Card>
          <Card>
            <CardContent>
              <PageHeader>
                Coupe
              </PageHeader>
        <img src='https://i.imageupload.app/eb5230609901697addf1.jpeg' onClick={handleFetchCoupe} /> 
</CardContent>
          </Card>
          <Card>
            <CardContent>
              <PageHeader>Pickup</PageHeader>
        <img src='https://i.imageupload.app/772fecec86abcee3a7ac.jpeg' onClick={handleFetchPickup} />
</CardContent>
          </Card>
        </GridElement>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/body-type')({
  component: RouteComponent,
});