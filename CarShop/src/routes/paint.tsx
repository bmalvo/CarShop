import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { PageHeader } from '../components/PageHeader';
import { Stepper } from '../components/Stepper';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, CardContent } from '@mui/material';



const RouteComponent = () => {

  const { setPaint } = usePersonalData(useShallow(state => ({ paint: state.paint, setPaint: state.setPaint })));

  const { register, handleSubmit } = useForm<{ paint: string }>();

  const navigate = useNavigate();
          
  const onSubmit: SubmitHandler<{ paint: string }> = (data) => {
        
    setPaint(data.paint)
    navigate({ to: '/summary' })
  }
    
  return <>
    <Stepper step='paint' />
    <Card>
      <CardContent>
        
        <PageHeader>Paint</PageHeader>
        <p>Choose a paint You want see on Your Car.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select  {...register('paint', { required: true })}>
            <option value="">paint type</option>
            <option value="solid">solid</option>
            <option value="metallic">metallic</option>
            <option value="matte">matte</option>
          </select>
          <button type='submit'>Choose</button>
        </form>
      </CardContent>
    </Card>
  </>
};


export const Route = createFileRoute('/paint')({
  component: RouteComponent,
});