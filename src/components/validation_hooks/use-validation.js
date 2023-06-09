import {useState,useEffect} from "react"

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(true);
    const [maxLengthError, setMaxLengthError] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [namesError,setNameError] = useState(false)
    const [numberError,setNumberError] = useState(false)
    const [latNumbers,setLatNumbers] = useState(false)
    const [anyAndNumbers,setAnyAndNumbers] = useState(false)
    const [inputValid,setInputValid] = useState(false)
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "minLength":
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
         case 'maxLength':
            value.length > validations[validation]
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
            break;
          case "isEmpty":
            value ? setEmpty(false) : setEmpty(true);
            break;
          case "isEmail":
            const reMail =
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            reMail.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true);
            break;
            case "isName":
                const reName = /^(?!.*([а-яёa-z])\1{2})[а-яёА-ЯЁ]+$/iu
                reName.test(String(value).toLowerCase())
                ? setNameError(false)
                : setNameError(true);
            break;
            case "onlyNumbers":
                const reNumbers = /^-?\d+\.?\d*$/
                reNumbers.test(String(value).toLowerCase())
                ? setNumberError(false)
                : setNumberError(true);
                break;
            case "semiNumbers":
              const reSemiNumbers = /^[A-Za-z0-9_]+$/
              reSemiNumbers.test(String(value).toLowerCase())
                ? setLatNumbers(false)
                : setLatNumbers(true);
              break;
            case "anyAndNumbers":
              const reAllNumbers =  /^[#.0-9а-яёa-z\s,-]+$/
              reAllNumbers.test(String(value).toLowerCase())
              ? setAnyAndNumbers(false)
              : setAnyAndNumbers(true);
              break;
            default:
                console.log('Такой валидации нету');
                break;
            
        }
      }
    }, [value]);
  
useEffect(()=>{
if(isEmpty || minLengthError || maxLengthError ||!emailError || namesError || numberError || latNumbers || anyAndNumbers){

  setInputValid(false)
}else{
  setInputValid(true)
}
},[isEmpty,minLengthError,maxLengthError,emailError,namesError,numberError,latNumbers,anyAndNumbers])

    return {
      isEmpty,
      minLengthError,
      emailError,
      maxLengthError,
      namesError,
      numberError,
      inputValid,
      latNumbers,
      anyAndNumbers
    };
  };

  export default useValidation



