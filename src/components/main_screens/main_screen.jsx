import { React, useState } from "react";
import * as S from "./main_screen_s";
import Support from "../moduls/support";
//import { click } from "@testing-library/user-event/dist/click";
//import { findNonSerializableValue } from "@reduxjs/toolkit";
import Widget from "../moduls/widget";
import Documents from "../moduls/documents";


function MainScreen() {
  let [content, setContent] = useState(<div>главная</div>);
  function clicker(event) {
    if (event.target.id==='support'){
      setContent(<Support/>)
    }
    if(event.target.id==='widget'){
    setContent(<Widget/>)
    }
    if(event.target.id==='documents'){
      setContent(<Documents/>)
      }
  }
  return (
    <S.Wrapper>
      <S.Body>
        <S.LeftMenu>
          <S.Logo src="./img/logo2.png" />
          <S.ModulBox>
            <p id="documents" onClick={clicker} >Документы</p>
            <button id="widget" onClick={clicker}>Дашборды </button>
            <p id="support" onClick={clicker}>Поддержка</p>
            <p>Документы</p>
            <p>Услуги</p>
          </S.ModulBox>
        </S.LeftMenu>
        <S.MainContent>
          <S.Header>
            <h2>Главное меню-что бы понимать где мы</h2>
            <div>
              <p>Баланс: 50000 рупиев</p>
              <p>ООО "Рога и жопы"</p>
            </div>
          </S.Header>

          <S.Content>
            <div>{content}</div>
          </S.Content>

          <S.Footer>все для футера </S.Footer>
        </S.MainContent>
      </S.Body>
    </S.Wrapper>
  );
}
export default MainScreen;
