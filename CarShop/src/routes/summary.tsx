import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'
import { usePersonalData } from '../store/usePersonalData';
import {useShallow} from 'zustand/shallow'
import { Stepper } from '../components/Stepper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Card, CardContent, Stack, TextField } from '@mui/material';
import { useCreateOrderMutation } from '../queries/useCreateOrderMutation';

type onSubmitProps = {

  firstName: string;
  lastName: string;
  email: string;
}


const RouteComponent = () => {
  
  const {mutate} = useCreateOrderMutation();
  const { bodyType, driveType, paint, setPersonalData, data: orderData } = usePersonalData(useShallow(state => ({ data: state.data, setPersonalData: state.setPersonalData, bodyType: state.bodyType, driveType: state.driveType, paint: state.paint })));
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<onSubmitProps>();
  const totalPrice = Number(bodyType.price) + Number(driveType.price) + Number(paint.price)
  const details = [bodyType.name, driveType.name, paint.name]
  
  const onSubmit: SubmitHandler<onSubmitProps> = (data) => {
    setPersonalData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    })
    
    mutate({
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "value": String(totalPrice),
      "details": details
    })
    navigate({ to: '/success' });
    
  };


  return <>
    <Stepper step='summary' />
    <Stack spacing={4}>

    <Card >
      <CardContent>
        
        <PageHeader>Summary</PageHeader>
        <p>Fill in Your personal data.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label='name' {...register('firstName', { required: true, minLength: 3 })} />
          {errors.firstName ? <p>This field required 3 signs.</p> : null}
          <TextField label='lastName' {...register('lastName', { required: true })} />
          <TextField label='email' {...register('email', { required: true })} />
          <Button variant='outlined' type='submit' disabled={!isValid}>submit</Button>
        </form>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        
        <PageHeader>This is how Your order look: </PageHeader>
          <p>Body: {bodyType.name} - { bodyType.price}</p>
          <p>Drive: {driveType.name} - { driveType.price}</p>
          <p>Paint: {paint.name} - {paint.price}</p>
          <p>Total price for Your Car: { totalPrice}</p>
      </CardContent>
    </Card>
    </Stack>
  </>
};

export const Route = createFileRoute('/summary')({
  component: RouteComponent,
});