import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseRoomMateProfile() {
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  let [loader, setLoader] = useState(false);
  let { token } = useAuth();
  async function RoomMateProfile(
    url,
    type,
    Language,
    bio,
    UserAcceptNoiseTolerance,
    UserSleepSchedule,
    minAge,
    maxAge,
    guestPolicyType,
    petType,
    petPreferenceType,
    FoodPreferenceType,
    SharingLevelType,
    SmokoHabitType,
    fetchUser,
    getRoomateProfile
  ) {
    try {
      setLoader(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
        method: `${type}`,
        body: JSON.stringify({
          Language,
          bio,
          UserAcceptNoiseTolerance,
          UserSleepSchedule,
          minAge,
          maxAge,
          guestPolicyType,
          petType,
          petPreferenceType,
          FoodPreferenceType,
          SharingLevelType,
          SmokoHabitType,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {

       
        if (type == "POST") {
            fetchUser();
            getRoomateProfile();
          setSuccess("create roomate Profile success");
          
        } else {
            fetchUser();
            getRoomateProfile();
          setSuccess("update roomate profile success");
        }
      } else {
        
        throw new Error(
          data.error || "cant make this operation please try again",
        );
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  }
  return { RoomMateProfile, error, loader, success,setError,setSuccess };
}
