import axios from "axios"; 

//aşağıda ki fonksiyona dışarıdan bir telefon numarasını parametre olarak alıp url de istenilen yere (+14 ile başlayan bölüm) ekledikten sonra
//endpointten dönen response'un içerisinde, "response.valid= " in karşısında yazan boolean değere bakarak girilen telefon numarasına Validation işlemi yapılabilir.
//ben api kullanmadan aynı işlemi gerçekleştirdim.

const accountSid = "DELETED_BEFORE_PUSH_GİTHUB";
const authToken = "DELETED_BEFORE_PUSH_GİTHUB";

export const phoneNumberCheck = () => {
    return axios.get("https://lookups.twilio.com/v2/PhoneNumbers/+14159929960", {
        params: {
            'Fields': 'line_type_intelligence'
        },
        auth: {
            'TWILIO_ACCOUNT_SID': accountSid,
            'TWILIO_AUTH_TOKEN': authToken
        }
    }).then((response)=>console.log(response));
 };

