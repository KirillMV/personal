import React from "react";
import * as S from "./signUp_screen_s";
import { useState } from "react";

function SignUp() {
  let [form, setForm] = useState({});
 
  function changer(event) {
    let name = event.target.name;
    setForm({...form,[name]:event.target.value})
    
  }
  return (
    <S.Body>
        <S.H1>Регистрация</S.H1>
      <S.ValueBox>
        <p>Логин для входа в кабинет</p>
        <S.Inputs onInput={changer} name="login" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Имя</p>
        <S.Inputs onInput={changer} name="firstname" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Фамилия</p>
        <S.Inputs onInput={changer} name="lastname" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Отчество</p>
        <S.Inputs onChange={changer} name="patronymic" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Наименование организации</p>
        <S.Inputs onChange={changer} name="organization_name" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>email</p>
        <S.Inputs onChange={changer} name="email" type="email" />
      </S.ValueBox>

      <S.ValueBox>
        <p>ИНН организации</p>
        <S.Inputs onChange={changer} name="taxpayer_id" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>КПП организации</p>
        <S.Inputs onChange={changer} name="tax_registration_reason_code" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>Юридический адресс</p>
        <S.Inputs onChange={changer} name="registered_address" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>пароль для входа в кабинет </p>
        <S.Inputs onChange={changer} name="password" type="password" />
      </S.ValueBox>
      <S.ValueBox>
        <p>повтор пароля для входа в кабинет </p>
        <S.Inputs onChange={changer} name="password_repeat" type="password" />
      </S.ValueBox>
      <S.Button onClick={()=>console.log(form)}>Зарегестрироваться</S.Button>
    </S.Body>
  );
}

export default SignUp;
