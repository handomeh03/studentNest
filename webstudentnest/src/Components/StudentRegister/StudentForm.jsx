import style from "../../Styles/StudentRegisterStyle/StudentForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ErrorComp from "../PublicComp/ErrorComp";
import { UseStudentRegister } from "../../Hooks/RegisterHook/useStudentRegister";
import { UseUserData } from "../../Context/UserRegisterData";
import MenuItem from "@mui/material/MenuItem";
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

  const uni= [
  "Al-Ahliyya Amman University",
  "Al-Isra University",
  "Al-Zaytoonah University of Jordan",
  "Amman Arab University",
  "Applied Science Private University",
  "Arab Academy for Banking and Financial Sciences",
  "Arab Open University",
  "German-Jordanian University: Jabal-Amman Branch",
  "Al Hussein Technical University",
  "Ibn Sina University for Medical Sciences: Amman - Al Qastal",
  "Luminus Technical University College",
  "Middle East University",
  "National University College of Technology",
  "Petra University",
  "Philadelphia University",
  "Princess Sumaya University for Technology",
  "Tafila Technical University",
  "The World Islamic Science & Education University (W.I.S.E)",
  "University of Jordan",
  "Balqa Applied University - Ajloun College",
  "Ajloun National Private University",
  "Aqaba University of Technology (2011)",
  "Aqaba Campus of the University of Jordan",
  "Aqaba Medical Sciences University",
  "Balqa Applied University (Salt)",
  "Irbid National University",
  "Jordan University of Science and Technology - JUST",
  "Luminus Technical University College - LTUC",
  "Institute of Banking Studies: Irbid Branch",
  "Yarmouk University",
  "Jerash Private University",
  "Mutah University (Mu'tah)",
  "Balqa Applied University (Karak)",
  "Al-Hussein Bin Talal University",
  "Balqa Applied University - College of Agriculture (Shoubak)",
  "Balqa Applied University - College of Ma'an",
  "American University of Madaba (AUM) - Madaba Campus",
  "Al al-Bayt University",
  "Tafila Technical University",
  "Hashemite University",
  "Zarqa Private University"
];


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
          select
          
          value={universityName}
          onChange={(e) => {
            setError("");
            handleChangeuniversityName(e.target.value);
          }}
         
        >
          {uni.map((uni,index) => (
            <MenuItem key={index} value={uni}>
              {uni}
            </MenuItem>
          ))}
          
        </TextField>

      

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

      {error?<ErrorComp error={error}/>:""}

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
