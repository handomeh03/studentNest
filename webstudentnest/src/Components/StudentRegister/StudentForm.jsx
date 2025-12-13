import style from "../../Styles/StudentRegisterStyle/StudentForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ErrorComp from "../PublicComp/ErrorComp";
import { UseStudentRegister } from "../../Hooks/RegisterHook/useStudentRegister";
import { UseUserData } from "../../Context/UserRegisterData";
export default function StudentForm({
  major,
  graduateYear,
  universityName,
  studentCardId,
  verificationFile,
  handlChangeverificationFile,
  studentGovId,
  handleChangeMajor,
  handleChangegraduateYear,
  handleChangeuniversityName,
  handleChangestudentCardId,
  handleChangeStudentGovId,
}) {
  
  let{RegisterStudent,error,setError,StudentRegisterLoader}=UseStudentRegister();

  let{fullname,Email , Dates,address, phoneNumber, password, role, }=UseUserData();

  function handleRegister(e){
    e.preventDefault();
    RegisterStudent(fullname,Email,Dates,address,phoneNumber, password,role,major,graduateYear,universityName,studentCardId,studentGovId,verificationFile);
  }


  return (
    <div className={style.StudentForm}>
      <form>
        <TextField
          className={style.Field}
          id="major"
          label="Major"
          type="text"
          value={major}
          onChange={(e) => {
            setError("");
            handleChangeMajor(e.target.value);
          }}
          
        />

        <TextField
          className={style.Field}
          id="graduateYear"
          label="Graduate Year"
          type="number"
          value={graduateYear}
          onChange={(e) => {
            setError("");
            handleChangegraduateYear(e.target.value);
          }}
          
        />

        <TextField
          className={style.Field}
          id="UniversityName"
          label="University Name"
          type="text"
          value={universityName}
          onChange={(e) => {
            setError("");
            handleChangeuniversityName(e.target.value);
          }}
          
        />

        <TextField
          className={style.Field}
          id="studentCardId"
          label="Student Card ID"
          type="number"
          value={studentCardId}
          onChange={(e) => {
            setError("");
            handleChangestudentCardId(e.target.value);
          }}
          
        />

  


        <TextField
          className={style.Field}
          id="studnetGovID"
          label="Goverment ID"
          type="text"
          value={studentGovId}
          onChange={(e) => {
            setError("");
            handleChangeStudentGovId(e.target.value);
          }}
          
        />
           <Button
            variant="outlined"
            component="label"
            
          >
            upload student verevication
             <input
              hidden
              accept="image/*"
              type="file"
               onChange={(e) => handlChangeverificationFile(e.target.files[0])}
             
            />
          </Button>
          {verificationFile && (
            <div style={{ marginTop: "15px"}}>
              <img
                src={URL.createObjectURL(verificationFile)}
                alt="verificationFile "
                style={{ borderRadius: "8px",width:"100%" }}
              />
            </div>
          )}
      </form>

      {error?<ErrorComp erorr={error}/>:""}

       {StudentRegisterLoader?<Button
                loading={true}
                variant="outlined"
                disabled
              >
                Disabled
              </Button>:<Button onClick={handleRegister} className={style.Button} variant="contained" endIcon={<LoginIcon />}>
                    Register
              </Button>}

      
    </div>
  );
}
