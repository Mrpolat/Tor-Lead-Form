import { React, useState} from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Form, redirect } from "react-router-dom";

const LeadForm = () => {
  
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="lead-form">
      <h1 className="title">Lead Form</h1>
      <hr />
      <Form
        method="post"
        action={"/thanks"}
      >
        <label className="lead-form-item lead-form-label" htmlFor="name">
          <FaUserAlt />
        </label>
        <input
          className="lead-form-item lead-form-input"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <br />
        <label className="lead-form-item lead-form-label" htmlFor="email">
          <HiOutlineMail />
        </label>
        <input
          className="lead-form-item lead-form-input"
          type="email"
          name="email"
          placeholder="E-Mail"
          required
        />
        <br />
       
        <input type="text" name="phone" hidden value={phoneNumber} readOnly />
        <PhoneInput
          className="lead-form-item lead-form-input left"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e)}
        />
        <br />
        <button className="lead-form-button" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default LeadForm;

export const leadFormAction= async({request})=>{

  const data  = await request.formData() //form bilgilerini data'ya aktarıyoruz.
  
  const submission = {
    name:data.get('name'),//form valueları değişkenlere atıyoruz
    email:data.get('email'),
    phone:data.get('phone')
  }

  if(isValidPhoneNumber(submission.phone) === false || submission.email === " " || submission.name === " "){//Form valid işlemini burada gerçekleştiriyoruz.
    alert("Telefon numarası girdiğinizden ya da doğru girdiğinizden emin olun.")
    return redirect('/')//kullanıcıyı formu doğru girmeye zorluyoruz.
    
  }
  else{//formun doğru girildiği senaryo
    String.prototype.turkishToLower = function () {//Url içerisinde özel türkçe karakterler (ğ,ı) hata verdiği için o karakterleri ingilizce karakterlere çevirdim.
      let string = this;
      let letters = {
        İ: "i", I: "i", ı: "i", Ş: "s", ş: "s", Ğ: "g", ğ: "g", Ü: "u", ü: "u", Ö: "o", ö: "o", Ç: "c", ç: "c",
      };
      string = string.replace(/(([İIıŞşĞğÜüÇçÖö]))/g, function (letter) {
        return letters[letter];
      });
      return string.toLowerCase();}
    return redirect(`/thanks?utm_source=${submission.name.turkishToLower()}&utm_medium=${submission.email}&utm_term=${submission.phone}`)
  }
}