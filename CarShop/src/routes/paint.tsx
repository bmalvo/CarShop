import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePersonalData } from '../store/usePersonalData';
import { useShallow } from 'zustand/shallow';
import { useInput } from '../hooks/useInput';
import { FormEvent } from 'react';
import { PageHeader } from '../components/PageHeader';


const RouteComponent = () => {

  const { paint, setPaint } = usePersonalData(useShallow(state => ({ paint: state.paint, setPaint: state.setPaint })));

  const navigate = useNavigate();
      
      const paintInput = useInput(paint);
    
      const handleSubmit = (e: FormEvent) => {
        
        e.preventDefault();
        setPaint( paintInput.value )
        navigate({to: '/summary'})
      }
    
      return <>
        <PageHeader>Paint</PageHeader>
        <p>Choose a paint You want see on Your Car.</p>
        <form onSubmit={handleSubmit}>
          <select name="paint" {...paintInput}>
            <option value="">paint type</option>
            <option value="solid">solid</option>
            <option value="metallic">metallic</option>
            <option value="matte">matte</option>
          </select>
          <button  type='submit'>Choose</button>
        </form>
      </>
}


export const Route = createFileRoute('/paint')({
  component: RouteComponent,
})