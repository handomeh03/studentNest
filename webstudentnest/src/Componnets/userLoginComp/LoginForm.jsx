import style from "../../Styles/LoginStyle/LoginForm.module.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorComp from "../PublicComp/ErrorComp";

export default function LoginForm({ email, password, handleChangeEmail, handleChangePassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  

  return (
    <div className={style.LoginForm}>
      <form>
        <TextField
          className={style.Field}
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => handleChangeEmail(e.target.value)}
          
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
      </form>

      {/* <ErrorComp erorr={"log in error "} /> */}

      <Button className={style.Button} variant="contained" endIcon={<LoginIcon />}>
        Login
      </Button>

      <p style={{ marginBottom: "1rem" }}>
        dont have an account?{" "}
        <Link to={"/userRegister"} style={{ color: "var(--primarycolor)" }}>
          sign up
        </Link>
      </p>
    </div>
  );
}
