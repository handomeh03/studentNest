import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UseChangePasswordOtp() {
    const [error, setError] = useState("");
    const [changeLoader, setChangeLoader] = useState(false);
    const navigate = useNavigate();

    async function changePasswordOtp(email, password) {
        setError("");
        setChangeLoader(true);

        console.log(email,password);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/password-recovery/forget-password`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                sessionStorage.removeItem("email");
                navigate("/userlogin");
            } else {
                const errorMsg = data?.message || data?.errors?.errors.message || "Failed to change password";
                throw new Error(errorMsg);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setChangeLoader(false);
        }
    }

    return { changePasswordOtp, error, setError, changeLoader };
}
