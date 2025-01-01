import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { PageHeader } from '../components/PageHeader';
import { useOrderAccess } from '../hooks/useOrderAccess';
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

  useOrderAccess('drive');
  const { setDriveType } = usePersonalData(useShallow(state => ({ driveType: state.driveType, setDriveType: state.setDriveType })));

  const navigate = useNavigate();

  const { data } = useGetCategories() as CategoriesResponse;
    
  const handleFetchFWD = () => {
    const bodyPartName = data[1].parts[0].name
    const bodyPartPrice = data[1].parts[0].price
    setDriveType({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/paint' })
      
  }
    
  const handleFetch4WD = () => {
    const bodyPartName = data[1].parts[1].name
    const bodyPartPrice = data[1].parts[1].price
    setDriveType({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/paint' })
      
  }
  
  const handleFetchAWD = () => {
    const bodyPartName = data[1].parts[2].name
    const bodyPartPrice = data[1].parts[2].price
    setDriveType({ name: bodyPartName, price: bodyPartPrice })
    navigate({ to: '/paint' })
      
  }
  
  return <>
    <Stepper step='drive' />
    <Card>
      <CardContent>

        <PageHeader>Drive type</PageHeader>
        <p>Which drive would You like to have?</p><br /><br />
        <GridElement>
          <Card>
            <CardContent>
              <PageHeader>FWD</PageHeader>
        <img src='https://i.imageupload.app/9be0fe974bea143d2cf3.jpeg' onClick={handleFetchFWD} />
</CardContent>
          </Card>
          <Card>
            <CardContent>
              <PageHeader>4WD</PageHeader>
        <img src='https://i.imageupload.app/8370ed76bcf3d94d4116.jpeg' onClick={handleFetch4WD} />
</CardContent>
          </Card>
          <Card>
            <CardContent>
              <PageHeader>AWD</PageHeader>
          <img src='https://i.imageupload.app/00e5ffda34d58aee2a99.jpeg' onClick={handleFetchAWD} id='awd' />
</CardContent>
          </Card>
          {/* <label htmlFor="awd">AWD</label> */}
        </GridElement>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/drive')({
  component: RouteComponent,
});