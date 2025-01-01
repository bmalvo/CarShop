import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { PageHeader } from '../components/PageHeader';
import { Stepper } from '../components/Stepper';
import { Card, CardContent} from '@mui/material';
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

  const { setPaint } = usePersonalData(useShallow(state => ({ paint: state.paint, setPaint: state.setPaint })));

  const navigate = useNavigate();

  const { data } = useGetCategories() as CategoriesResponse;
      
  const handleFetchSolid = () => {
    const bodyPartName = data[2].parts[0].name
    const bodyPartPrice = data[2].parts[0].price
    setPaint({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/summary' })
        
  }
      
  const handleFetchMetallic = () => {
    const bodyPartName = data[2].parts[1].name
    const bodyPartPrice = data[2].parts[1].price
    setPaint({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/summary' })
        
  }
    
  const handleFetchMatte = () => {
    const bodyPartName = data[2].parts[2].name
    const bodyPartPrice = data[2].parts[2].price
    setPaint({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/summary' })
        
  }
    
  return <>
    <Stepper step='paint' />
    <Card>
      <CardContent>
        <PageHeader>Paint</PageHeader>
        <p>Choose a paint You want see on Your Car.</p><br /><br />
        <GridElement>
          <Card>
            <CardContent>
              <PageHeader>Solid</PageHeader>
              <img src='https://i.imageupload.app/015244468ba07746e1a9.jpeg' onClick={handleFetchSolid} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <PageHeader>Metallic</PageHeader>
          <img src='https://i.imageupload.app/2c5d0c9878cbb6d23ebe.jpeg' onClick={handleFetchMetallic} />
</CardContent>
          </Card>
          <Card>
            <CardContent>
      <PageHeader>Matte</PageHeader>
          <img src='https://i.imageupload.app/0cd4e8304a855b9fae65.jpeg' onClick={handleFetchMatte} />
            </CardContent>
          </Card>
        </GridElement>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/paint')({
  component: RouteComponent,
});