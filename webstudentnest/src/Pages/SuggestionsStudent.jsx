
import { FaWhatsapp } from 'react-icons/fa';
import Loader from '../Components/PublicComp/Loader';
import ErrorComp from '../Components/PublicComp/ErrorComp';

export default function SuggestionsStudent({ students, error, loader }) {
  
  if (loader) {
    return (
      <Loader/>
    );
  }

 
  if (error) {
    return (
     <ErrorComp error={error}/>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div className="w-full p-10 text-center bg-white rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-400">No suggestions available at the moment</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Student Suggestions</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {students.length} Students
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div 
            key={student.id} 
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-transparent hover:border-blue-100"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 font-bold text-lg border border-gray-100">
                {student.Name ? student.Name.charAt(0) : '?'}
              </div>
              <div>
                <p className="text-gray-800 font-semibold">{student.Name}</p>
                <p className="text-xs text-gray-400">Registered Student</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${student.phoneNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:scale-110 text-white rounded-full transition-transform duration-200 shadow-md"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}