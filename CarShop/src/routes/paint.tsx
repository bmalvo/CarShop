import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { PageHeader } from '../components/PageHeader';
import { Stepper } from '../components/Stepper';
import { Card, CardContent } from '@mui/material';
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
        <p>Choose a paint You want see on Your Car.</p>
        <GridElement>
        <p onClick={handleFetchSolid}> Solid</p>
        <p onClick={handleFetchMetallic}> Metallic</p>
        <p onClick={handleFetchMatte}>Matte</p>
        </GridElement>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/paint')({
  component: RouteComponent,
});