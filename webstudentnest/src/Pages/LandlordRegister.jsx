import LandlordForm from "../Components/LandlordRegister/LandlordForm";
import Loader from "../Components/PublicComp/Loader";
import UserRegisterHeader from "../Components/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Components/userRegisterComp/WelcomeHeader";
import { UseUserData } from "../Context/UserRegisterData";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import style from "../Styles/LandlordRegisterStyle/LandlordRegister.module.css";
export default function LandlordRegister() {
    let{loaderFalg}=UseLoader();

    let {cliqAccount,landlordGovId,userDataDispatch,verificationFile} = UseUserData();

    function handleChangeCliqAccount(value){
          userDataDispatch({type:"addCliqAccount",payload:value});
    }
    function handleChangeLandlordGovId(value){
      userDataDispatch({type:"addLandlordGovId",payload:value});
    }
    function handlChangeverificationFile(value){
     userDataDispatch({ type: "addverificationFile", payload: value });
  }


    if(loaderFalg){
        return <Loader/>
    }
  return (
    <div className={style.LandlordRegister}>
      <UserRegisterHeader />
      <div className={style.loginContainer}>
        <WelcomeHeader
            title={"Landlord Register"}
          description={"complete register for Landlord"}
        />
        <LandlordForm cliqAccount={cliqAccount} landlordGovId={landlordGovId} verificationFile={verificationFile} handleChangeCliqAccount={handleChangeCliqAccount} handleChangeLandlordGovId={handleChangeLandlordGovId} handlChangeverificationFile={handlChangeverificationFile}/>
      </div>
    </div>
  );
}
