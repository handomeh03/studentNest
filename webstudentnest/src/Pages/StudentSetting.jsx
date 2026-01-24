import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  AcademicCapIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { useUserContext } from "../Context/UserContext/UserContext";
import { useState } from "react";
import { UseEditInfo } from "../Hooks/Shared/UseEditinfo";
import { useUser } from "../Hooks/UserHook/UseUser";
import ErrorComp from "../Components/PublicComp/ErrorComp";

export default function StudentSetting() {
  const { user } = useUserContext();

  const [name, setName] = useState(user?.user?.name || "");
  const [email, setEmail] = useState(user?.user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.user?.phoneNumber || "");
  const [dateOfBirth, setDateOfBirth] = useState(user?.user?.dateOfBirth || "");
  const [address, setAddress] = useState(user?.user?.address || "");
  const [photo, setPhoto] = useState("");
  const [universityName, setUniversityName] = useState(
    user?.universityName || ""
  );
  const [major, setMajor] = useState(user?.major || "");
  const [graduateYear, setGraduateYear] = useState(user?.gradateYear || "");
  const [studentCardId, setStudentCardId] = useState(user?.studentCardId || "");
  

  const { editInfo, error, loader,success } = UseEditInfo();
  const { fetchUser } = useUser();
  const [inputError, setInputError] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setInputError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
    if (name.length < 3)
      return setInputError("Full name must be at least 3 characters long");
    if (!emailRegex.test(email))
      return setInputError("Please enter a valid email address");
    if (!phoneRegex.test(phoneNumber))
      return setInputError("Phone number must be digits only (10-15 digits)");
    if (!universityName)
      return setInputError("Please enter your University Name");
    if (!major) return setInputError("Please enter your Major");
    if (!studentCardId)
      return setInputError("Please enter your Student Card ID");

    editInfo(
      "student",
      name,
      email,
      phoneNumber,
      dateOfBirth,
      address,
      photo,
      "",
      fetchUser,
      universityName,
      major,
      graduateYear,
      studentCardId
    );
  }

  const currentYear = new Date().getFullYear();
  const uni = [
    "Al-Ahliyya Amman University",
    "Al-Isra University",
    "Al-Zaytoonah University of Jordan",
    "Amman Arab University",
    "Applied Science Private University",
    "Arab Academy for Banking and Financial Sciences",
    "Arab Open University",
    "German-Jordanian University: Jabal-Amman Branch",
    "Al Hussein Technical University",
    "Ibn Sina University for Medical Sciences: Amman - Al Qastal",
    "Luminus Technical University College",
    "Middle East University",
    "National University College of Technology",
    "Petra University",
    "Philadelphia University",
    "Princess Sumaya University for Technology",
    "Tafila Technical University",
    "The World Islamic Science & Education University (W.I.S.E)",
    "University of Jordan",
    "Balqa Applied University - Ajloun College",
    "Ajloun National Private University",
    "Aqaba University of Technology (2011)",
    "Aqaba Campus of the University of Jordan",
    "Aqaba Medical Sciences University",
    "Balqa Applied University (Salt)",
    "Irbid National University",
    "Jordan University of Science and Technology - JUST",
    "Luminus Technical University College - LTUC",
    "Institute of Banking Studies: Irbid Branch",
    "Yarmouk University",
    "Jerash Private University",
    "Mutah University (Mu'tah)",
    "Balqa Applied University (Karak)",
    "Al-Hussein Bin Talal University",
    "Balqa Applied University - College of Agriculture (Shoubak)",
    "Balqa Applied University - College of Ma'an",
    "American University of Madaba (AUM) - Madaba Campus",
    "Al al-Bayt University",
    "Tafila Technical University",
    "Hashemite University",
    "Zarqa Private University",
  ];

  return (
    <form className="mt-6 bg-white shadow-sm border border-gray-100 sm:rounded-2xl md:col-span-2 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">
          Student Profile Settings
        </h2>
        <p className="text-sm text-gray-500">
          Update your personal details and academic information
        </p>
      </div>

      <div className="px-6 py-8 sm:p-10">
        <div className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setInputError("");
              }}
              type="text"
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setInputError("");
              }}
              type="email"
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setInputError("");
              }}
              type="text"
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Year of Birth
            </label>
            <div className="mt-2 relative">
              <select
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="block w-full appearance-none rounded-xl bg-gray-50 border-transparent py-3 pl-4 pr-10 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 outline-none cursor-pointer transition-all"
              >
                {Array.from(
                  { length: currentYear - 1950 + 1 },
                  (_, i) => 1950 + i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              University Name
            </label>
            <div className="mt-2 relative">
              <select
                value={universityName}
                onChange={(e) => {
                  setUniversityName(e.target.value);
                  setInputError("");
                }}
                className="block w-full appearance-none rounded-xl bg-gray-50 border-transparent py-3 pl-4 pr-10 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 outline-none cursor-pointer transition-all"
              >
                <option value="" disabled>
                  Select your university
                </option>
                {uni.map((e, index) => (
                  <option key={index} value={e}>
                    {e}
                  </option>
                ))}
              </select>

              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Major
            </label>
            <input
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              type="text"
              placeholder="e.g. Software Engineering"
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Student Card ID
            </label>
            <input
              value={studentCardId}
              onChange={(e) => setStudentCardId(e.target.value)}
              type="text"
              placeholder="ID Number"
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Graduation Year
            </label>
            <div className="mt-2 relative">
              <select
                value={graduateYear}
                onChange={(e) => setGraduateYear(e.target.value)}
                className="block w-full appearance-none rounded-xl bg-gray-50 border-transparent py-3 pl-4 pr-10 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 outline-none cursor-pointer transition-all"
              >
                <option value="">Select Year</option>
                {Array.from(
                  { length: 20 + 1 },
                  (_, i) => currentYear - 10 + i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Street Address
            </label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setInputError("");
              }}
              type="text"
              placeholder="City, Street, Building..."
              className="mt-2 block w-full rounded-xl bg-gray-50 border-transparent px-4 py-3 text-gray-800 focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all outline-none"
            />
          </div>

          
          <div className="col-span-full border-t border-gray-50 pt-6">
            <label className="block text-sm font-semibold text-gray-600 ml-1">
              Profile Photo
            </label>
            <div className="mt-4 flex items-center gap-x-6">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  className="h-20 w-20 rounded-2xl object-cover shadow-sm ring-4 ring-gray-50"
                  alt="Profile"
                />
              ) : (
                <div className="h-20 w-20 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <UserCircleIcon className="h-16 w-16 text-indigo-200" />
                </div>
              )}
              <label
                htmlFor="photo-upload"
                className="cursor-pointer rounded-xl bg-white border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
              >
                Change Photo
              </label>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                accept="image/*"
                id="photo-upload"
                type="file"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {(error || inputError) && (
        <div className="mx-6 mb-6">
          <ErrorComp error={error || inputError} />
        </div>
      )}
    <div className="m-4">
        {success && <div className="p-4 bg-green-50 text-green-600 rounded-2xl border border-green-100 text-sm font-medium">Profile updated successfully</div>}
    </div>

      <div className="flex items-center justify-end gap-x-4 bg-gray-50/50 px-6 py-6 border-t border-gray-100">
        <button
          type="button"
          className="text-sm cursor-pointer font-semibold text-gray-400 hover:text-gray-600 transition-colors"
        >
          Cancel
        </button>
        {loader ? (
          <button
            disabled
            className="rounded-xl bg-indigo-400 px-8 py-3 text-sm font-bold text-white flex items-center gap-2"
          >
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Saving...
          </button>
        ) : (
          <button
            onClick={handleClick}
            type="submit"
            className="rounded-xl cursor-pointer bg-indigo-600 px-10 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:shadow-indigo-200 transition-all active:scale-95"
          >
            Save Changes
          </button>
        )}
      </div>
    </form>
  );
}
