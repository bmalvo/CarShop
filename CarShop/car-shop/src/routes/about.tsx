import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>About</h3>
      <p>Compose Your wonder Car in fast and convinient way</p>
    </div>
  )
}
