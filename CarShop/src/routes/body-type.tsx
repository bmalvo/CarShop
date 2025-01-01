import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData'
import { useShallow } from 'zustand/shallow';
import { Stepper } from '../components/Stepper';
import { useForm, SubmitHandler } from 'react-hook-form';


const RouteComponent = () => {

  const { setBodyType } = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, setBodyType: state.setBodyType })));

  const { register, handleSubmit} = useForm<{bodyType: string}>();

  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<{bodyType: string}> = (data) => {
    
    setBodyType(data.bodyType)
    navigate({ to: '/drive'})
  };

  return <>
    <Stepper step='body-type'/>
    <PageHeader>Body type</PageHeader>
    <p>Check a body type for Your car</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <select  {...register('bodyType', {required: true})}>
        <option value="">body type</option>
        <option value="hatchback">hatchback</option>
        <option value="coupe">coupe</option>
        <option value="pickup">pickup</option>
      </select>
      <button type='submit'>Choose</button>
    </form>
  </>
};


export const Route = createFileRoute('/body-type')({
  component: RouteComponent,
});