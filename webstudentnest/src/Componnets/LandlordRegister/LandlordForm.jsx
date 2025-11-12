import style from "../../Styles/LandlordRegisterStyle/LandlordForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ErrorComp from "../PublicComp/ErrorComp";

export default function LandlordForm({ cliqAccount, landlordGovId, handleChangeCliqAccount, handleChangeLandlordGovId }) {
  

  return (
    <div className={style.LandlordForm}>
      <form>
        <TextField
          className={style.Field}
          id="cliqAccount"
          label="Cliq Account"
          type="text"
          value={cliqAccount}
          onChange={(e) => handleChangeCliqAccount(e.target.value)}
          
        />
        <TextField
          className={style.Field}
          id="landlordGovId"
          label="Government ID"
          type="text"
          value={landlordGovId}
          onChange={(e) => handleChangeLandlordGovId(e.target.value)}
         
        />
      </form>

      <ErrorComp erorr={"landlord Error"} />

      <Button
        className={style.Button}
        variant="contained"
        endIcon={<LoginIcon />}
      >
        Register
      </Button>
    </div>
  );
}
