import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useInput } from '../hooks/useInput';
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { FormEvent } from 'react';
import { PageHeader } from '../components/PageHeader';


const RouteComponent = () => {
  const { driveType, setDriveType } = usePersonalData(useShallow(state => ({ driveType: state.driveType, setDriveType: state.setDriveType })));

  const navigate = useNavigate();
    
  const driveTypeInput = useInput(driveType);
  
  const handleSubmit = (e: FormEvent) => {
      
    e.preventDefault();
    setDriveType(driveTypeInput.value)
    navigate({ to: '/paint'})
  }
  
  return <>
    <PageHeader>Drive type</PageHeader>
    <p>Which drive would You like to have?</p>
    <form onSubmit={handleSubmit}>
      <select name="driveType" {...driveTypeInput}>
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