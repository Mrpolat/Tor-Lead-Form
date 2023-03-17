import React, { useEffect } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const ThanksMessage = () => {

  //let [searchParams, setSearchParams] = useSearchParams();
  let searchParams = new URL(document.location).searchParams;
  useEffect(()=>{ //bir kere çalışacak ve logSearchParams methodunu çalıştıracak.
    logSearchParams(); 
  })
    const logSearchParams = () => {
      //url den utm parametrelerini alıp local storage e kaydediyoruz. her iki işlemide bu 3 satırda burada yapıyoruz.
      localStorage.setItem('utm_source', JSON.stringify(searchParams.get("utm_source")));
      localStorage.setItem('utm_medium', JSON.stringify(searchParams.get("utm_medium")));
      localStorage.setItem('utm_term', JSON.stringify(searchParams.get("utm_term")));
    };

  return (
    <div className='contentThanks'>
      <h1 className='contentThanks-message'>Thanks For Your Submission</h1>
      <AiOutlineCheckCircle className='OutlineCheck' />
      </div>
  )
}

export default ThanksMessage