import React from "react";
import * as S from "./login_screen_s";
import { Link } from "react-router-dom";
function LoginScreen() {
  return (
    <S.Body>
      <S.H1>Личный кабинет</S.H1>
      <S.logo src="./img/logo2.png"/>
      <S.Loginbox>
      <p>логин</p>
      <S.loginInput type="text" />
        <p>пароль</p>
      <S.loginInput type="password" />
    <Link to={'/home'}><S.ButtonEntr>войти</S.ButtonEntr></Link> 
      
      <Link to={'/signup'}><S.ButtonReg>зарегистрироваться</S.ButtonReg></Link> 
      </S.Loginbox>
    </S.Body>
  );
}
export default LoginScreen;
