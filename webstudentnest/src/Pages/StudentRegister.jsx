import style from "../Styles/StudentRegisterStyle/StudentRegister.module.css";
import StudentForm from "../Componnets/StudentRegister/StudentForm";
import UserRegisterHeader from "../Componnets/userRegisterComp/UserRegisterHeader";
import WelcomeHeader from "../Componnets/userRegisterComp/WelcomeHeader";
import { UseUserData } from "../Context/UserRegisterData";

export default function StudentRegister() {
 
  let {
    major,
    graduateYear,
    universityName,
    studentCardId,
    walletAddress,
    studentGovId,
    verificationFile,
    userDataDispatch,
    
  } = UseUserData();
  
  function handlChangeverificationFile(value){
     userDataDispatch({ type: "addverificationFile", payload: value });
  }

  function handleChangeMajor(value) {
    userDataDispatch({ type: "addMajor", payload: value });
  }
  function handleChangegraduateYear(value) {
    userDataDispatch({ type: "addGraduateYear", payload: value });
  }
  function handleChangeuniversityName(value) {
    userDataDispatch({ type: "addUniversityName", payload: value });
  }
  function handleChangestudentCardId(value) {
    userDataDispatch({ type: "addStudentCardId", payload: value });
  }
  function handleChangewalletAddress(value) {
    userDataDispatch({ type: "addWalletAddress", payload: value });
  }
  function handleChangeStudentGovId(value){
     userDataDispatch({ type: "studentGovId", payload: value });
  }

  return (
    <div className={style.StudentRegister}>
      <UserRegisterHeader />
      <div className={style.studentContainer}>
        <WelcomeHeader
          title={"Student Register"}
          description={"complete register for student"}
        />
        <StudentForm
          major={major}
          graduateYear={graduateYear}
          universityName={universityName}
          studentCardId={studentCardId}
          walletAddress={walletAddress}
          studentGovId={studentGovId}
          verificationFile={verificationFile}
          handleChangeMajor={handleChangeMajor}
          handlChangeverificationFile={handlChangeverificationFile}
          handleChangegraduateYear={handleChangegraduateYear}
          handleChangeuniversityName={handleChangeuniversityName}
          handleChangestudentCardId={handleChangestudentCardId}
          handleChangewalletAddress={handleChangewalletAddress}
          handleChangeStudentGovId={handleChangeStudentGovId}
        />
      </div>
    </div>
  );
}
