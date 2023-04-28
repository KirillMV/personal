import React from "react";
import * as S from "./signUp_screen_s";
import { useState } from "react";
import useInput from "../validation_hooks/use-input";
import { Navigate } from "react-router-dom";




function SignUp() {
  let [form, setForm] = useState({});
let[regComplete, setRegComplete] = useState(false);

  function clicer() {
console.log('Клик');
    
    if (password.value && password.value === passwordRep.value) {

      fetch(`http://saas.legionsecurity.ru/api/auth/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((posts) => {
          console.log(posts);
          if(posts === "Created   "){
            console.log('Да');
            setRegComplete(true)
          }
          else{

          }
          
        });
    } else {
      console.log("пароли не совпадают");
    }
    console.log(form);
  }

  const login = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 10,
    semiNumbers: true,
  });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 12,
    semiNumbers: true,
  });
  const passwordRep = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 12,
    semiNumbers: true,
  });
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
    maxLength: 20,
    isName: true,
  });
  const lastName = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 20,
    isName: true,
  });
  const patronymic = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 20,
    isName: true,
  });
  const organization = useInput("", {
    isEmpty: true,
    minLength: 4,
    maxLength: 15,
    anyAndNumbers: true,
  });
  const regAddress = useInput("", {
    isEmpty: true,
    minLength: 4,
    maxLength: 40,
    anyAndNumbers: true,
  });

  return (
    <S.Body>
      <S.H1>Регистрация</S.H1>
      <S.Box>
        <S.ValueBox>
          <p>Логин для входа в кабинет</p>
          {(login.minLengthError || login.maxLengthError) &&
            login.isDirty &&
            !login.namesError && (
              <div style={{ color: "red" }}>Некорректная длина лоигна</div>
            )}
          {login.isDirty && login.latNumbers && (
            <div style={{ color: "red" }}>Латинские буквы и цифры</div>
          )}
          {login.isDirty && login.isEmpty && (
            <div style={{ color: "red" }}> Обязательное поле </div>
          )}
          <S.Inputs
            onChange={(e) => {
              login.onChange(e);
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            onBlur={(e) => login.onBlur(e)}
            value={login.value}
            name="login"
            type="text"
          />
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
          {patronymic.isDirty &&
            !patronymic.isEmpty &&
            patronymic.namesError && (
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
          {((organization.isDirty && organization.minLengthError) ||
            organization.maxLengthError) && (
            <div style={{ color: "red" }}>Некорректная длина</div>
          )}
          {organization.isDirty && organization.anyAndNumbers && (
            <div style={{ color: "red" }}> Некорректное название </div>
          )}
          {organization.isDirty && organization.isEmpty && (
            <div style={{ color: "red" }}> Обязательное поле </div>
          )}
          <S.Inputs
            onChange={(e) => {
              organization.onChange(e);
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            onBlur={(e) => organization.onBlur(e)}
            value={organization.value}
            name="organization_name"
            type="text"
          />
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
            <div style={{ color: "red" }}>Обязательное поле</div>
          )}
          {taxpayerId.isDirty &&
            !taxpayerId.isEmpty &&
            taxpayerId.numberError && (
              <div style={{ color: "red" }}>Некорректный ИНН</div>
            )}
          {taxpayerId.isDirty &&
            !taxpayerId.isEmpty &&
            (taxpayerId.minLengthError || taxpayerId.maxLengthError) && (
              <div style={{ color: "red" }}>Некорректная длинна ИНН</div>
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
            <div style={{ color: "red" }}>Обязательное поле</div>
          )}
          {taxRegCode.isDirty &&
            !taxRegCode.isEmpty &&
            taxRegCode.numberError && (
              <div style={{ color: "red" }}>Некорректный КПП</div>
            )}
          {taxRegCode.isDirty &&
            !taxRegCode.isEmpty &&
            (taxRegCode.minLengthError || taxRegCode.maxLengthError) && (
              <div style={{ color: "red" }}>Некорректная длинна КПП</div>
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
          {((regAddress.isDirty && regAddress.minLengthError) ||
            regAddress.maxLengthError) && (
            <div style={{ color: "red" }}>Некорректная длина aдресса</div>
          )}
          {regAddress.isDirty && regAddress.anyAndNumbers && (
            <div style={{ color: "red" }}> Некорректный адрес </div>
          )}
          {regAddress.isDirty && regAddress.isEmpty && (
            <div style={{ color: "red" }}> Обязательное поле </div>
          )}

          <S.Inputs
            onChange={(e) => {
              regAddress.onChange(e);
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            onBlur={(e) => regAddress.onBlur(e)}
            value={regAddress.value}
            name="legal_address"
            type="text"
          />
        </S.ValueBox>

        <S.ValueBox>
          <p>Пароль </p>

          <p>пароль для входа в кабинет</p>
          {(password.minLengthError || password.maxLengthError) &&
            password.isDirty &&
            !password.namesError && (
              <div style={{ color: "red" }}>Пароль от 5 до 8 символов</div>
            )}
          {password.isDirty && password.latNumbers && (
            <div style={{ color: "red" }}>Латинские буквы и цифры</div>
          )}
          {password.isDirty && password.isEmpty && (
            <div style={{ color: "red" }}> Обязательное поле </div>
          )}

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
          {(passwordRep.minLengthError || passwordRep.maxLengthError) &&
            passwordRep.isDirty &&
            !passwordRep.namesError && (
              <div style={{ color: "red" }}>Пароль от 5 до 8 символов</div>
            )}
          {passwordRep.isDirty && passwordRep.latNumbers && (
            <div style={{ color: "red" }}>Латинские буквы и цифры</div>
          )}
          {passwordRep.isDirty && passwordRep.isEmpty && (
            <div style={{ color: "red" }}> Обязательное поле </div>
          )}
          <S.Inputs
            onChange={(e) => {
              passwordRep.onChange(e);
            }}
            onBlur={(e) => passwordRep.onBlur(e)}
            value={passwordRep.value}
            name="password_repeat"
            type="password"
          />
        </S.ValueBox>
      </S.Box>
      <S.Button
        onClick={clicer}
        disabled={
          email.inputValid ||
          password.inputValid ||
          taxRegCode.inputValid ||
          taxpayerId.inputValid ||
          name.inputValid ||
          lastName.inputValid ||
          patronymic.inputValid
        }
      >
        Зарегестрироваться
      </S.Button>
      {regComplete &&<Navigate to='/'/>}
    </S.Body>
  );
}

export default SignUp;
