import style from "../../Styles/LandlordRegisterStyle/LandlordForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ErrorComp from "../PublicComp/ErrorComp";
import { UseLandlordRegister } from "../../Hooks/RegisterHook/useLandlordRegister";
import { UseUserData } from "../../Context/UserRegisterData";

export default function LandlordForm({
  verificationFile,
  cliqAccount,
  landlordGovId,
  handleChangeCliqAccount,
  handleChangeLandlordGovId,
  handlChangeverificationFile,
}) {
  let { fullname, Email, Dates, address, phoneNumber, password, role } =
    UseUserData();
  let { RegisterLandlord, error, setError, landlordRegisterLoader } =
    UseLandlordRegister();
  function handleRegister(e) {
    e.preventDefault();
    RegisterLandlord(
      fullname,
      Email,
      Dates,
      address,
      phoneNumber,
      password,
      role,
      cliqAccount,
      landlordGovId,
      verificationFile
    );
  }

  return (
    <div className={style.LandlordForm}>
      <form>
        <TextField
          className={style.Field}
          id="cliqAccount"
          label="Cliq Account"
          type="text"
          value={cliqAccount}
          onChange={(e) => {
            setError("");
            handleChangeCliqAccount(e.target.value);
          }}
        />
        <TextField
          className={style.Field}
          id="landlordGovId"
          label="Government ID"
          type="text"
          value={landlordGovId}
          onChange={(e) => {
            setError("");
            handleChangeLandlordGovId(e.target.value);
          }}
        />
        <Button variant="outlined" component="label">
          upload landlord verevication
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => handlChangeverificationFile(e.target.files[0])}
          />
        </Button>
        {verificationFile && (
          <div style={{ marginTop: "15px" }}>
            <img
              src={URL.createObjectURL(verificationFile)}
              alt="verificationFile "
              style={{ borderRadius: "8px", width: "100%" }}
            />
          </div>
        )}
      </form>

      {error ? <ErrorComp error={error} /> : ""}

      {landlordRegisterLoader ? (
        <Button loading={true} variant="outlined" disabled>
          Disabled
        </Button>
      ) : (
        <Button
          onClick={handleRegister}
          className={style.Button}
          variant="contained"
          endIcon={<LoginIcon />}
        >
          Register
        </Button>
      )}
    </div>
  );
}
