import React from "react";
import * as S from "./signUp_screen_s";
import { useState } from "react";

function SignUp() {
  let [form, setForm] = useState({});
  let obj = {};
  function changer(event) {
    let name = event.target.name;
    obj[name] = event.target.value;
    setForm(obj);
    console.log(form);
  }
  return (
    <S.Body>
        <S.H1>Регистрация</S.H1>
      <S.ValueBox>
        <p>Логин для входа в кабинет</p>
        <S.Inputs onChange={changer} name="login" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>Имя</p>
        <S.Inputs onChange={changer} name="name" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Фамилия</p>
        <S.Inputs onChange={changer} name="surname" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Отчесто</p>
        <S.Inputs onChange={changer} name="middlename" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>Наименование организации</p>
        <S.Inputs onChange={changer} name="organization" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>email</p>
        <S.Inputs onChange={changer} name="email" type="email" />
      </S.ValueBox>

      <S.ValueBox>
        <p>ИНН организации</p>
        <S.Inputs onChange={changer} name="inn" type="inn" />
      </S.ValueBox>

      <S.ValueBox>
        <p>КПП организации</p>
        <S.Inputs onChange={changer} name="kpp" type="kpp" />
      </S.ValueBox>

      <S.ValueBox>
        <p>пароль для входа в кабинет </p>
        <S.Inputs onChange={changer} name="password" type="password" />
      </S.ValueBox>
      <S.ValueBox>
        <p>повтор пароля для входа в кабинет </p>
        <S.Inputs onChange={changer} name="passwordtwo" type="password" />
      </S.ValueBox>
      <S.Button>Зарегестрироваться</S.Button>
    </S.Body>
  );
}

export default SignUp;
