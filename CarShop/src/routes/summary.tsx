import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData';
import {useShallow} from 'zustand/shallow'
import { Stepper } from '../components/Stepper';
import { SubmitHandler, useForm } from 'react-hook-form';

type onSubmitProps = {

  firstName: string;
  lastName: string;
  email: string;
}


const RouteComponent = () => {
  
  const { bodyType, driveType, paint, setPersonalData } = usePersonalData(useShallow(state => ({ data: state.data, setPersonalData: state.setPersonalData, bodyType: state.bodyType, driveType: state.driveType, paint: state.paint })));
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {isValid, errors} } = useForm<onSubmitProps>();
  
  const onSubmit: SubmitHandler<onSubmitProps> = (data) => {
    setPersonalData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    })
    
    navigate({ to: '/success' });
    
  };


  return <>
    <Stepper step='summary'/>
    <PageHeader>Summary</PageHeader>
    <p>Fill in Your personal data.</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input {...register('firstName', { required: true, minLength: 3 })} />
      {errors.firstName? <p>This field required 3 signs.</p>: null}
      </div>
      <div>
      <input {...register('lastName', {required: true})} />
      </div>
      <div>
      <input {...register('email', {required: true})} />
      </div>
      <button type='submit' disabled={!isValid}>submit</button>
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