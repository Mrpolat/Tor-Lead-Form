import React, { useEffect } from 'react'

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
    <div>
      <h1>ThanksMessage</h1>
      </div>
  )
}

export default ThanksMessage