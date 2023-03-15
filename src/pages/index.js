import React from 'react'
import LeadForm,{leadFormAction} from '../components/LeadForm'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThanksMessage from '../components/ThanksMessage';

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LeadForm/>,
    },
    {
      path:'/thanks',
      element:<ThanksMessage/>,
      action : leadFormAction
    }
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Index