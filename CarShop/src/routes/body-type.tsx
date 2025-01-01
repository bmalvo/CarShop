import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData'
import { useShallow } from 'zustand/shallow';
import { Stepper } from '../components/Stepper';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Card, CardContent, InputLabel, MenuItem, Select } from '@mui/material';


const RouteComponent = () => {

  const { setBodyType } = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, setBodyType: state.setBodyType })));

  const { register, handleSubmit } = useForm<{ bodyType: string }>();

  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<{ bodyType: string }> = (data) => {
    
    setBodyType(data.bodyType)
    navigate({ to: '/drive' })
  };


  return <>
    <Stepper step='body-type' />
    <Card>
      <CardContent>

        <PageHeader>Body type</PageHeader>
        <p>Check a body type for Your car</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel id='body-type'>Body Type</InputLabel>
          <Select labelId='body-type'  {...register('bodyType', { required: true })}>
            {/* <MenuItem  value=''>body type</MenuItem> */}
            {/* <MenuItem ></MenuItem> */}
            <MenuItem defaultValue={'hatchback'} value="hatchback">hatchback</MenuItem>
            <MenuItem value="coupe">coupe</MenuItem>
            <MenuItem value="pickup">pickup</MenuItem>
          </Select>
          {/* <Button type='submit'>Choose</Button> */}
          <Button variant='outlined' type='submit' >submit</Button>
        </form>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/body-type')({
  component: RouteComponent,
});