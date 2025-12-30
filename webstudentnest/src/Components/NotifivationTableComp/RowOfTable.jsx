import { UseDeleteNotificatioById } from "../../Hooks/AdminHooks/UseDeleteNotigicationById";
import { UseEditStatusOfNotification } from "../../Hooks/AdminHooks/UseEditStatusOfNotification";

export default function RowOfTable({ notification }) {
  let { editNotification } = UseEditStatusOfNotification();
  let { DeleteNotification } = UseDeleteNotificatioById();

  return (
    <tr key={notification?.notifyId} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none">
      
   

      
      <td className="whitespace-nowrap px-4 py-5 text-sm font-semibold text-gray-900">
        {notification?.title}
      </td>

      
      <td className="px-4 py-5 text-sm text-gray-600 max-w-xs truncate" title={notification?.message}>
        {notification?.message}
      </td>

      
     

      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-700">
        {notification?.receiver?.name}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        {notification.isRead ? (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 border border-green-200 shadow-sm">
            Read
          </span>
        ) : (
          <span 
            onClick={() => { editNotification(notification?.notifyId); }} 
            className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-200 transition-colors"
          >
            Unread
          </span>
        )}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500 font-medium">
        {new Date(notification?.createAt).toLocaleDateString()}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-right">
        <button 
          onClick={() => { DeleteNotification(notification?.notifyId); }} 
          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-all active:scale-90 hover:cursor-pointer"
          title="Delete Notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </td>
    </tr>
  );
}