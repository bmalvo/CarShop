import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData'
import { useShallow } from 'zustand/shallow';
import { useInput } from '../hooks/useInput';
import { FormEvent } from 'react';


const RouteComponent = () => {

  const { bodyType, setBodyType } = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, setBodyType: state.setBodyType })));

  const navigate = useNavigate();
  
  const bodyTypeInput = useInput(bodyType);

  const handleSubmit = (e: FormEvent) => {
    
    e.preventDefault();
    setBodyType(bodyTypeInput.value)
    navigate({ to: '/drive'})
  };

  return <>
    <PageHeader>Body type</PageHeader>
    <p>Check a body type for Your car</p>
    <form onSubmit={handleSubmit}>
      <select name="bodyType" {...bodyTypeInput}>
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