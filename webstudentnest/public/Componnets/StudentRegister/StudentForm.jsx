import style from "../../Styles/StudentRegisterStyle/StudentForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ErrorComp from "../PublicComp/ErrorComp";

export default function StudentForm({
  major,
  graduateYear,
  universityName,
  studentCardId,
  walletAddress,
  studentGovId,
  handleChangeMajor,
  handleChangegraduateYear,
  handleChangeuniversityName,
  handleChangestudentCardId,
  handleChangewalletAddress,
  handleChangeStudentGovId,
}) {


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
            handleChangestudentCardId(e.target.value);
          }}
          
        />

        <TextField
          className={style.Field}
          id="WalletAddress"
          label="Wallet Address (optional)"
          type="text"
          value={walletAddress}
          onChange={(e) => {
            handleChangewalletAddress(e.target.value);
          }}
          
        />

        <TextField
          className={style.Field}
          id="studnetGovID"
          label="Goverment ID"
          type="text"
          value={studentGovId}
          onChange={(e) => {
            handleChangeStudentGovId(e.target.value);
          }}
          
        />
      </form>

      {/* <ErrorComp erorr={"student Erorr"} /> */}

      <Button className={style.Button} variant="contained" endIcon={<LoginIcon />}>
        Register
      </Button>
    </div>
  );
}
