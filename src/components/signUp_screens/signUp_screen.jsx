import React from "react";
import * as S from "./signUp_screen_s";
import { useState } from "react";
import useInput from "../validation_hooks/use-input";

function SignUp() {
  let [form, setForm] = useState({});

  function changer(e) {
    // let name = event.target.name;
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 5 });
  const taxpayerId = useInput("", {
    isEmpty: true,
    minLength: 10,
    maxLength: 12,
    onlyNumbers: true,
  });
  const taxRegCode = useInput("", {
    isEmpty: true,
    minLength: 9,
    maxLength: 9,
    onlyNumbers: true,
  });
  const name = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 12,
    isName: true,
  });
  const lastName = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 12,
    isName: true,
  });
  const patronymic = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 12,
    isName: true,
  });

  return (
    <S.Body>
      <S.H1>Регистрация</S.H1>
      <S.ValueBox>
        <p>Логин для входа в кабинет</p>
        <S.Inputs onChange={changer} name="login" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>Имя</p>
        {(name.minLengthError || name.maxLengthError) &&
          name.isDirty &&
          !name.namesError && (
            <div style={{ color: "red" }}>Некорректная длина имени</div>
          )}
        {name.isDirty &&
          (!name.minLengthError || !name.maxLengthError) &&
          !name.isEmpty &&
          name.namesError && (
            <div style={{ color: "red" }}>Некорректное имя </div>
          )}
        {name.isDirty && name.isEmpty && (
          <div style={{ color: "red" }}> Обязательное поле </div>
        )}
        <S.Inputs
          onChange={(e) => {
            name.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => name.onBlur(e)}
          value={name.value}
          name="firstname"
          type="text"
        />
      </S.ValueBox>

      <S.ValueBox>
        <p>Фамилия</p>
        {((lastName.isDirty && lastName.minLengthError) ||
          lastName.maxLengthError) && (
          <div style={{ color: "red" }}>Некорректная длина фамилии</div>
        )}
        {lastName.isDirty && !lastName.isEmpty && lastName.namesError && (
          <div style={{ color: "red" }}>Некорректная Фамилия</div>
        )}
        {lastName.isDirty && lastName.isEmpty && (
          <div style={{ color: "red" }}> Обязательное поле </div>
        )}
        <S.Inputs
          onChange={(e) => {
            lastName.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => lastName.onBlur(e)}
          value={lastName.value}
          name="lastname"
          type="text"
        />
      </S.ValueBox>
      <S.ValueBox>
        <p>Отчество</p>
        {((patronymic.isDirty && patronymic.minLengthError) ||
          patronymic.maxLengthError) && (
          <div style={{ color: "red" }}>Некорректная длина отчества</div>
        )}
        {patronymic.isDirty && !patronymic.isEmpty && patronymic.namesError && (
          <div style={{ color: "red" }}>Некорректное отчество </div>
        )}
        {patronymic.isDirty && patronymic.isEmpty && (
          <div style={{ color: "red" }}> Обязательное поле </div>
        )}
        <S.Inputs
          onChange={(e) => {
            patronymic.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => patronymic.onBlur(e)}
          value={patronymic.value}
          name="patronymic"
          type="text"
        />
      </S.ValueBox>
      <S.ValueBox>
        <p>Наименование организации</p>
        <S.Inputs onChange={changer} name="organization_name" type="text" />
      </S.ValueBox>
      <S.ValueBox>
        <p>email</p>
        {email.isDirty && email.emailError && !email.isEmpty && (
          <div style={{ color: "red" }}>Некоректный e-mail</div>
        )}
        {email.isDirty && email.isEmpty && (
          <div style={{ color: "red" }}>Поле не может быть пустым</div>
        )}
        <S.Inputs
          onChange={(e) => {
            email.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          name="email"
          type="email"
        />
      </S.ValueBox>

      <S.ValueBox>
        <p>ИНН организации</p>
        {taxpayerId.isDirty && taxpayerId.isEmpty && (
          <div>Обязательное поле</div>
        )}
        {taxpayerId.isDirty &&
          !taxpayerId.isEmpty &&
          taxpayerId.numberError && <div>Некорректный ИНН</div>}
        {taxpayerId.isDirty &&
          !taxpayerId.isEmpty &&
          (taxpayerId.minLengthError || taxpayerId.maxLengthError) && (
            <div>Некорректная длинна ИНН</div>
          )}
        <S.Inputs
          onChange={(e) => {
            taxpayerId.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => taxpayerId.onBlur(e)}
          value={taxpayerId.value}
          name="taxpayer_id"
          type="text"
        />
      </S.ValueBox>

      <S.ValueBox>
        <p>КПП организации</p>
        {taxRegCode.isDirty && taxRegCode.isEmpty && (
          <div>Обязательное поле</div>
        )}
        {taxRegCode.isDirty &&
          !taxRegCode.isEmpty &&
          taxRegCode.numberError && <div>Некорректный КПП</div>}
        {taxRegCode.isDirty &&
          !taxRegCode.isEmpty &&
          (taxRegCode.minLengthError || taxRegCode.maxLengthError) && (
            <div>Некорректная длинна КПП</div>
          )}
        <S.Inputs
          onChange={(e) => {
            taxRegCode.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => taxRegCode.onBlur(e)}
          value={taxRegCode.value}
          name="tax_registration_reason_code"
          type="text"
        />
      </S.ValueBox>

      <S.ValueBox>
        <p>Юридический адресс</p>
        <S.Inputs onChange={changer} name="registered_address" type="text" />
      </S.ValueBox>

      <S.ValueBox>
        <p>пароль для входа в кабинет</p>
        <S.Inputs
          onChange={(e) => {
            password.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          name="password"
          type="password"
        />
      </S.ValueBox>
      <S.ValueBox>
        <p>повтор пароля для входа в кабинет </p>
        <S.Inputs onChange={changer} name="password_repeat" type="password" />
      </S.ValueBox>
      <S.Button
        onClick={() => {
          if (form.password && form.password === form.password_repeat) {
            console.log("Заходи");
          } else {
            console.log("пароли не совпадают");
          }
          console.log(form);
        }}
      >
        Зарегестрироваться
      </S.Button>
    </S.Body>
  );
}

export default SignUp;
