import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import style from "../../Styles/RegisterStyle/toggole.module.css";

import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
export default function RoleRegister({role,handleChangeRole}) {
    const handleChange = (event, newValue) => {
        if (newValue !== null) {  
            handleChangeRole(newValue);
            
        }
    };
    return (
        <div className={style.ToggleButton}>
            <ToggleButtonGroup
                color="primary"
                value={role}
                exclusive
                onChange={handleChange}
                aria-label="Role"
                className={style.ToggleGroup}
            >
                <ToggleButton className={`${style.toggle} ${role=="student"?style.active:""}`} value="student">
                    <SchoolIcon style={{ marginRight: "5px", fontSize: "large" }}/>
                    Student
                </ToggleButton>
                <ToggleButton className={`${style.toggle} ${role=="landlord"?style.active:""}`} value="landlord">
                    <PersonIcon style={{ marginRight: "5px", fontSize: "large" }}/>
                    Landlord
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
