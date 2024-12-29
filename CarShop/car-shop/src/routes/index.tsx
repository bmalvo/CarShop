import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'


const HomeComponent = () => {

  return (
    <div className="p-2">
      <h3>Welcome in Car Shop!</h3>
    </div>
  )
}


export const Route = createFileRoute('/')({
  component: HomeComponent,
});