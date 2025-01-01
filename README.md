# CarShop - React Application
This README provides a comprehensive overview of the CarShop application, a React-based application that allows users to customize their dream car.

## Technology Stack:
<ul>
<li> React: Frontend framework for building the user interface. </li>
<li> @tanstack/react-router: Routing library for managing navigation and application flow. </li>
<li> MaterialUI: UI component library for styling and creating visually appealing components. </li>
<li>Zustand: Global state management library for managing application state. </li>
</ul>

## Features:

<ul>
<li> Car Customization: Users can customize their car by choosing from various options for:
  <ul>
    
<li> Body: Different car body styles (e.g., hatchback, pickup, coupe). </li>
<li> Drive: Different drivetrain options (e.g., front-wheel drive, rear-wheel drive). </li>
<li> Paint: Different paint colors and finishes (e.g., metallic, matte). </li>
  </ul>
  </li>
<li>Step-by-Step Process: The customization process is guided through a series of steps using react-router.</li>
<li>Global State Management: Zustand ensures that all customization choices are consistently reflected across the application.</li>
 <li> Fetching Data: The application fetches the names and prices of car parts from the database.</li>
<li>Order Summary: Displays the chosen parts along with their prices and calculates the total price.</li>
<li>Order Saving: Saves the entire order, including customer personal data and selected parts, to the database.</li>
</ul>

## Getting started
<ol>
  <li>Clon the repository</li>
  <li>Install dependencies - npm install </li>
  <li>Run server - npm run json-server</li>
  <li>Start the development server: npm start</li>
</ol>
