import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CarDetails from './pages/carDetails/CarDetails'
import RootLayout from './rootLayout/RootLayout'
import ICar from './interfaces/ICar'
import carData from './data/data'

function App() {

  const cars: ICar[] = carData;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home cars={cars}/>} />
        <Route path='carDetails/:carID' element={<CarDetails cars={cars} />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
