import { UseEditStatusOfNotification } from "../../Hooks/AdminHooks/UseEditStatusOfNotification";
import Button from '@mui/material/Button';
export default function RowOfTable({ notification }) {
  let { editNotification }=UseEditStatusOfNotification();
  return (
    <tr key={notification?.notifyId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification?.notifyId}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification?.title}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification?.message}
      </td>
      {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.type}
      </td> */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification?.sender?.name}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification?.receiver?.name}
      </td>
      <td  className="whitespace-nowrap px-3 py-5 text-sm">
        {notification.isRead ? (
          <span  className="inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white cursor-pointer hover:bg-green-500">
            Read
          </span>
        ) : (
          <span onClick={()=>{ editNotification(notification?.notifyId);}} className="inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white cursor-pointer cursor-pointer hover:bg-yellow-400">
            Unread
          </span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {new Date(notification?.createAt).toLocaleDateString()}
      </td>
 
    </tr>
  );
}
