import React from 'react'
import LeadForm,{leadFormAction} from '../components/LeadForm'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThanksMessage from '../components/ThanksMessage';

const Index = () => {
  //react-router-dom kütüphanesi çok fazla version alan bir kütüphane ve kullanımı çok sık değişebiliyor.
  //bu projede çok fazla sayfa bulunmadığı için şuan sadece componentlerim ile çalışıyorum.
  //router işlemlerini index(main) sayfasında yapıyoruz.
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