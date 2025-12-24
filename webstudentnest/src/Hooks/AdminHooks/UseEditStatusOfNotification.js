import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseNotification } from "../../Context/NotificationContext/NotificationContext";

export function UseEditStatusOfNotification() {
  let { token } = useAuth();
  let [error, setError] = useState("");
  let [loader, setLoader] = useState(false);
  let{NotificationDispatch}=UseNotification();
  async function editNotification(id) {
    try {
      setLoader(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/notifications-status/${id}`,
        {
          method: "PATCH",
          body:JSON.stringify({isRead:true}),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        NotificationDispatch({type:"editStatusNotification",payload:id});
      } else {
        throw new Error(data.errors || "Notification Not Found");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  return { editNotification, loader, error };
}
