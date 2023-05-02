import React from "react";
import * as S from "./login_screen_s";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useInput from "../validation_hooks/use-input";
import { Navigate } from "react-router-dom";



function LoginScreen() {

  let[logComplete, setLogComplete] = useState(false);

  function clicer() {
    console.log(form);

    fetch(`http://saas.legionsecurity.ru/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
       if(posts.access_token){
        setLogComplete(true)
       }
      });

    console.log(form);
  }

  let [form, setForm] = useState({});

  const login = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 10,
    semiNumbers: true,
  });

  const password = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 12,
    semiNumbers: true,
  });

  return (
    <S.Body>
      <S.H1>Личный кабинет</S.H1>
      <S.logo src="./img/logo2.png" />
      <S.Loginbox>
        <p>логин</p>
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
        <S.loginInput
          value={login.value}
          onChange={(e) => {
            login.onChange(e);

            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => login.onBlur(e)}
          name="login"
          type="text"
        />
        <p>пароль</p>
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

        <S.loginInput
          value={password.value}
          onChange={(e) => {
            password.onChange(e);
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          onBlur={(e) => password.onBlur(e)}
          name="password" 
          type="password"
        />
        <S.ButtonEntr
        
          onClick={clicer}
          disabled={password.inputValid || login.inputValid}
        >
          войти
        </S.ButtonEntr>
        {logComplete && <Navigate to={"/home"}/>}
        <div></div>
        <Link to={"/signup"}>
          <S.ButtonReg>зарегистрироваться</S.ButtonReg>
        </Link>
      </S.Loginbox>
    </S.Body>
  );
}
export default LoginScreen;
