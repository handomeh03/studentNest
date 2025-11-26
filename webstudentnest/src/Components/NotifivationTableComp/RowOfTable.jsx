export default function RowOfTable({ notification }) {
  return (
    <tr key={notification.notificationId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.notificationId}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.title}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.message}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.type}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.sender.name}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {notification.sender.phoneNumber}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        {notification.status === "read" ? (
          <span className="inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white">
            Read
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
            Unread
          </span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {new Date(notification.createdAt).toLocaleDateString()}
      </td>
 
    </tr>
  );
}
