import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { useInput } from '../hooks/useInput'
import { FormEvent } from 'react';
import { usePersonalData } from '../store/usePersonalData';
import {useShallow} from 'zustand/shallow'
import { Stepper } from '../components/Stepper';


const RouteComponent = () => {
  
  const { data, bodyType, driveType, paint, setPersonalData } = usePersonalData(useShallow(state => ({ data: state.data, setPersonalData: state.setPersonalData, bodyType: state.bodyType, driveType: state.driveType, paint: state.paint })));
  const firstNameInput = useInput(data.firstName);
  const lastNameInput = useInput(data.lastName);
  const emailInput = useInput(data.email);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();
    setPersonalData({

      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value
    })
    navigate({ to: '/success' })
  };
  

  return <>
    <Stepper step='summary'/>
    <PageHeader>Summary</PageHeader>
    <p>Fill in Your personal data.</p>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name='firstName' placeholder='name' {...firstNameInput} />
      </div>
      <div>
        <input type="text" name='lastName' placeholder='lastName' {...lastNameInput} />
      </div>
      <div>
        <input type="email" name='email' placeholder='name.lastname@example.com' {...emailInput} />
      </div>
      <button type='submit' disabled={!firstNameInput.value || !lastNameInput.value || !emailInput.value}>submit</button>
    </form>
    <PageHeader>This is how Your order look: </PageHeader>
    <p>Body: {bodyType}</p>
    <p>Drive: {driveType}</p>
    <p>Paint: {paint}</p>
  </>
};

export const Route = createFileRoute('/summary')({
  component: RouteComponent,
});