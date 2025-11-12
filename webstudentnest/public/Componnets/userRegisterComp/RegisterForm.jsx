import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

import style from "../../styles/RegisterStyle/form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UseUserData } from "../../Context/UserRegisterData";
import MenuItem from "@mui/material/MenuItem";
import ErrorComp from "../PublicComp/ErrorComp";

export default function RegisterForm({
  fullname,
  Email,
  Dates,
  address,
  phoneNumber,
  password,
  ConfirmPassword,
  FillAllinputValidation,
  handleChangeFullName,
  handleChangeEmail,
  handleChangeDates,
  handleChangeAddress,
  handleChangePhoneNumber,
  handleChangePassword,
  handleChangeConfirmPassword,
  handleChangeFillAllinputValidation
}) {
  let { role } = UseUserData();
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  // For years input
  const [years, setYears] = React.useState([]);
  React.useEffect(() => {
    const currentYear = new Date().getFullYear();
    const tempYears = [];
    for (let y = currentYear; y >= 1950; y--) tempYears.push(y);
    setYears(tempYears);
  }, []);

  function handleClick() {
    if (!fullname || !Email || !address || !phoneNumber || !password || !ConfirmPassword || !role || !Dates) {
      handleChangeFillAllinputValidation("Please fill all required fields");
      return;
    }
    if (fullname.length < 3) {
      handleChangeFillAllinputValidation("Full name must be at least 3 characters long");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      handleChangeFillAllinputValidation("Please enter a valid email address");
      return;
    }
    if (new Date().getFullYear() - Number(Dates) < 18) {
      handleChangeFillAllinputValidation("Age must be greater than 18");
      return;
    }
    if (address.length < 3) {
      handleChangeFillAllinputValidation("Address must be at least 3 characters long");
      return;
    }
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      handleChangeFillAllinputValidation("Phone number must be between 10 and 15 digits and digits only");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if (!passwordRegex.test(password)) {
      handleChangeFillAllinputValidation(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 10 characters long"
      );
      return;
    }
    if (password !== ConfirmPassword) {
      handleChangeFillAllinputValidation("Passwords do not match");
      return;
    }

    if (role === "student") {
      navigate("/studentRegister");
    } else {
      navigate("/landlordRegister");
    }
  }

  

  return (
    <div className={style.RegisterForm}>
      <form>
        <TextField
          className={style.Field}
          id="fullName"
          label="Full Name"
          type="text"
          value={fullname}
          onChange={(e) => handleChangeFullName(e.target.value)}
         
        />

        <TextField
          className={style.Field}
          id="email"
          label="Email"
          type="email"
          value={Email}
          onChange={(e) => handleChangeEmail(e.target.value)}
          
        />

        <TextField
          className={style.Field}
          id="yearOfBirth"
          label="Year of Birth"
          select
          value={Dates}
          onChange={(e) => handleChangeDates(e.target.value)}
         
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={style.Field}
          id="address"
          label="Address"
          type="text"
          value={address}
          onChange={(e) => handleChangeAddress(e.target.value)}
          
        />

        <TextField
          className={style.Field}
          id="phoneNumber"
          label="Phone Number"
          type="number"
          value={phoneNumber}
          onChange={(e) => handleChangePhoneNumber(e.target.value)}
          
        />

        <FormControl className={style.Field} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide the password" : "display the password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
           
          />
        </FormControl>

        <FormControl className={style.Field} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={ConfirmPassword}
            onChange={(e) => handleChangeConfirmPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide the password" : "display the password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            
          />
        </FormControl>
      </form>

      {FillAllinputValidation && <ErrorComp erorr={FillAllinputValidation} />}

      <Button onClick={handleClick} className={style.Button} variant="contained" endIcon={<LoginIcon />}>
        Next
      </Button>

      <p style={{ marginBottom: "1rem" }}>
        already have account ?{" "}
        <Link to={"/userlogin"} style={{ color: "var(--primarycolor)" }}>
          login
        </Link>
      </p>
    </div>
  );
}
