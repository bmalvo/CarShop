import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { PageHeader } from '../components/PageHeader';
import { useOrderAccess } from '../hooks/useOrderAccess';
import { Stepper } from '../components/Stepper';
import { useForm, SubmitHandler } from 'react-hook-form';



const RouteComponent = () => {

  useOrderAccess('drive');
  const { setDriveType } = usePersonalData(useShallow(state => ({ driveType: state.driveType, setDriveType: state.setDriveType })));

  const { register, handleSubmit } = useForm<{ drive: string }>();


  const navigate = useNavigate();
      
  const onSubmit: SubmitHandler<{drive: string}> = (data) => {
      
    
    setDriveType(data.drive)
    navigate({ to: '/paint'})
  }
  
  return <>
    <Stepper step='drive' />
    <PageHeader>Drive type</PageHeader>
    <p>Which drive would You like to have?</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <select  {...register('drive', {required: true})}>
        <option value="">drive type</option>
        <option value="Front-Wheel-Drive">Front-Wheel Drive</option>
        <option value="Four-Wheel-Drive">Four-Wheel Drive</option>
        <option value="All-Wheel-Drive">All-Wheel Drive</option>
      </select>
      <button type='submit'>Choose</button>
    </form>
  </>
};


export const Route = createFileRoute('/drive')({
  component: RouteComponent,
});