import LandlordForm from "../Componnets/LandlordRegister/LandlordForm";
import Loader from "../Componnets/PublicComp/Loader";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Componnets/userRegisterComp/WelcomeHeader";
import { UseUserData } from "../Context/UserRegisterData";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import style from "../Styles/LandlordRegisterStyle/LandlordRegister.module.css";
export default function LandlordRegister() {
    let{loaderFalg}=UseLoader();

    let {cliqAccount,landlordGovId,userDataDispatch} = UseUserData();

    function handleChangeCliqAccount(value){
          userDataDispatch({type:"addCliqAccount",payload:value});
    }
    function handleChangeLandlordGovId(value){
      userDataDispatch({type:"addLandlordGovId",payload:value});
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
        <LandlordForm cliqAccount={cliqAccount} landlordGovId={landlordGovId} handleChangeCliqAccount={handleChangeCliqAccount} handleChangeLandlordGovId={handleChangeLandlordGovId}/>
      </div>
    </div>
  );
}
