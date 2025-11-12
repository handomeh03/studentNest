import RoleRegister from "../Componnets/userRegisterComp/RoleRegister";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Componnets/userRegisterComp/WelcomeHeader";
import style from "../Styles/RegisterStyle/userRegister.module.css";
import RegisterForm from "../Componnets/userRegisterComp/RegisterForm";
import Loader from "../Componnets/PublicComp/Loader";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import { UseUserData } from "../Context/UserRegisterData";
import { useState } from "react";

export default function UserRegister() {
  const { loaderFalg } = UseLoader();
  let [FillAllinputValidation, setFillAllinputValidation] = useState("");
  let {fullname,Email,Dates,address,phoneNumber,password,ConfirmPassword, role, userDataDispatch,} = UseUserData();

  
  function handleChangeRole(value) {
    userDataDispatch({ type: "addRole", payload: value });
    setFillAllinputValidation("");

  }
  function handleChangeFullName(value) {
    userDataDispatch({ type: "addFullName", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangeEmail(value) {
    userDataDispatch({ type: "addEmail", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangeDates(value) {
    userDataDispatch({ type: "addDate", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangeAddress(value) {
    userDataDispatch({ type: "addAddress", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangePhoneNumber(value) {
    userDataDispatch({ type: "addPhoneNumber", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangePassword(value) {
    userDataDispatch({ type: "addPassword", payload: value });
    setFillAllinputValidation("");
  }
  function handleChangeConfirmPassword(value) {
    userDataDispatch({ type: "addConfirmPassword", payload: value });
    setFillAllinputValidation("");
  }

  function handleChangeFillAllinputValidation(value){
    setFillAllinputValidation(value);
  }

  if (loaderFalg) {
    return <Loader />;
  }

  return (
    <div className={style.userRegister}>
      <UserRegisterHeader />

      <div className={style.registerContainer}>
        <WelcomeHeader
          title={"create account"}
          description={"Join our community to find your perfect accommodation"}
        />
        <RoleRegister role={role} handleChangeRole={handleChangeRole} />
        
        <RegisterForm
          fullname={fullname}
          Email={Email}
          Dates={Dates}
          address={address}
          phoneNumber={phoneNumber}
          password={password}
          ConfirmPassword={ConfirmPassword}
          FillAllinputValidation={FillAllinputValidation}
          handleChangeFullName={handleChangeFullName}
          handleChangeEmail={handleChangeEmail}
          handleChangeDates={handleChangeDates}
          handleChangeAddress={handleChangeAddress}
          handleChangePhoneNumber={handleChangePhoneNumber}
          handleChangePassword={handleChangePassword}
          handleChangeConfirmPassword={handleChangeConfirmPassword}
          handleChangeFillAllinputValidation={handleChangeFillAllinputValidation}
        />
      </div>
    </div>
  );
}
