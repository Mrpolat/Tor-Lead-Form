import axios from "axios"; 

//aşağıda ki fonksiyona dışarıdan bir telefon numarasını parametre olarak alıp url de istenilen yere (+14 ile başlayan bölüm) ekledikten sonra
//endpointten dönen response'un içerisinde, "response.valid= " in karşısında yazan boolean değere bakarak girilen telefon numarasına Validation işlemi yapılabilir.
//ben api kullanmadan aynı işlemi gerçekleştirdim.
<<<<<<< Updated upstream
//leadForm component içerisinde console basması için 91. satırda bu kodu çalıştırdım.
=======
//leadForm component içerisinde console basması için 91. satırda bu kodu çalıştırdım..
>>>>>>> Stashed changes

export const phoneNumberCheck = (phoneNumber) => {
    axios.get("http://localhost:3001/twilio/"+phoneNumber).then((response)=>console.log(response));
 };

