export default function RowOfTable({ student, setstudentId, handleChangeEditStudentFlag, handleChangeDeleteStudentDialog }) {
  return (
    <tr key={student.userId} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none">
      

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 shrink-0">
            <img
              alt={student?.user?.name}
              src={student?.user?.photo || "https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100"
            />
          </div>
          <div className="ml-4">
            <div className="font-semibold text-gray-900">{student?.user?.name}</div>
            <div className="text-xs text-gray-500">{student?.user?.email}</div>
          </div>
        </div>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{student?.user?.dateOfBirth}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-700 font-medium">{student?.user?.phoneNumber}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500 truncate max-w-[120px]" title={student?.user?.address}>
        {student?.user?.address || "amman"}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium shadow-sm ${
          student?.user?.emailVerfied ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {student?.user?.emailVerfied ? "Verified" : "Pending"}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600 font-medium uppercase tracking-tighter text-xs">{student?.user?.role}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{student?.userGovId}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm font-medium text-indigo-600">{student?.Major}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{student?.studentCardID}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600 text-center font-bold">{student?.GraduationYear}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600 italic">{student?.universityName}</td>

      
      <td className="whitespace-nowrap px-4 py-5 text-center">
        <a href={student?.studentValidateDocument} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-110">
          <img 
            className="h-10 w-10 rounded-lg object-cover border border-gray-200 shadow-sm" 
            src={student?.studentValidateDocument} 
            alt="Validation Document"
          />
        </a>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500">
        {student?.user?.createdAt?.split("T")[0]}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-right">
        <div className="flex justify-end gap-2">
         
          {/* <button 
            onClick={() => { setstudentId(student?.user?.userId); handleChangeEditStudentFlag(); }}
            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button> */}

          <button 
            onClick={() => { setstudentId(student?.user?.userId); handleChangeDeleteStudentDialog(); }}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
            title="Delete Student"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}