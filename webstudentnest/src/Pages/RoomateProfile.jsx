import React, { useEffect, useState } from 'react';
import { useUserContext } from '../Context/UserContext/UserContext';
import { UseRoomMateProfile } from '../Hooks/StudentHooks/UseRoomMateProfile';
import { useUser } from '../Hooks/UserHook/UseUser';
import MyCurrentPreferences from '../Components/RoomateProfileComponnet/MyCurrentPreferences';
import { UseGetRoomMateProfile } from '../Hooks/StudentHooks/UseGetRoomateProfile';
import { UseRoomate } from '../Context/RoomateContext/Roomatecontext';

export default function RoommateProfile() {
  let { user } = useUserContext();
  let { RoomMateProfile, error, loader, success, setError, setSuccess } = UseRoomMateProfile();
  let{getRoomateProfile,errorProfile,loaderProfile}=UseGetRoomMateProfile();
  let{RoomateProfile}=UseRoomate();
  let { fetchUser } = useUser();

  useEffect(()=>{
     getRoomateProfile();
  },[user])
  
  

  const [formData, setFormData] = useState({
    Language: 'English',
    bio: '',
    UserAcceptNoiseTolerance: 'Low',
    UserSleepSchedule: 'Early',
    minAge: '18',
    maxAge: '30',
    lifeHabit: 'QuietStudy',
    guestPolicyType: 'no_guests',
    petType: 'cat',
    FoodPreferenceType: 'Vegan',
    petPreferenceType: 'has_pet',
    SharingLevelType: 'strictly_private',
    SmokoHabitType: 'non_Smoker',
  });

  const handleChange = (e) => {
    setError("");
    setSuccess("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.roommateProfileStatus) {
      handleUpdateProfile();
    } else {
      handleCreateProfile();
    }
  };

  function handleCreateProfile() {
    setError("");
    setSuccess("");
    RoomMateProfile("/api/v1/student/roommate-profile", "POST", formData.Language, formData.bio, formData.UserAcceptNoiseTolerance, formData.UserSleepSchedule, formData.minAge, formData.maxAge, formData.guestPolicyType, formData.petType, formData.petPreferenceType, formData.FoodPreferenceType, formData.SharingLevelType, formData.SmokoHabitType, fetchUser,getRoomateProfile);
  }

  function handleUpdateProfile() {
    setError("");
    setSuccess("");
    RoomMateProfile("/api/v1/student/roommate-profile", "PATCH", formData.Language, formData.bio, formData.UserAcceptNoiseTolerance, formData.UserSleepSchedule, formData.minAge, formData.maxAge, formData.guestPolicyType, formData.petType, formData.petPreferenceType, formData.FoodPreferenceType, formData.SharingLevelType, formData.SmokoHabitType, fetchUser,getRoomateProfile);
  }

  return (
    <div className="w-full bg-gray-50 md: min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        
        
      <MyCurrentPreferences errorProfile={errorProfile} loaderProfile={loaderProfile} profileRoomate={RoomateProfile}/>

        {/* --- Main Form Section --- */}
        <div className="w-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#3f51b5] p-6 md:p-10 text-white text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">Find Your Perfect Roommate</h2>
            <p className="mt-2 text-blue-100 text-sm md:text-base">Customize your lifestyle preferences to get better matches</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm font-medium animate-pulse">{error}</div>}
            {success && <div className="p-4 bg-green-50 text-green-600 rounded-2xl border border-green-100 text-sm font-medium">Profile updated successfully!</div>}

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Preferred Language</label>
                <select name="Language" value={formData.Language} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#3f51b5] transition-all">
                  <option value="Arabic">Arabic</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Target Age Range</label>
                <div className="flex items-center gap-2">
                  <input type="number" name="minAge" value={formData.minAge} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10" placeholder="Min" />
                  <span className="text-gray-300 font-bold">/</span>
                  <input type="number" name="maxAge" value={formData.maxAge} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10" placeholder="Max" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Personal Bio</label>
              <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Share a bit about yourself, hobbies, or what you're looking for..." className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 min-h-[120px] resize-none" />
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Lifestyle Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Sleep Schedule', name: 'UserSleepSchedule', options: ['Early', 'Late', 'Flexible'] },
                { label: 'Noise Tolerance', name: 'UserAcceptNoiseTolerance', options: ['Low', 'Medium', 'High'] },
                { label: 'Smoking Habits', name: 'SmokoHabitType', options: [['non_Smoker', 'No Smoking'], ['outdoor_only', 'Outdoor Only'], ['indoor_allowed', 'Allowed'], ['vape_hookah', 'Vape/Hookah']] },
                { label: 'Food Preference', name: 'FoodPreferenceType', options: ['vegan', 'vegetarian', 'omnivore'] }
              ].map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">{item.label}</label>
                  <select name={item.name} value={formData[item.name]} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all">
                    {item.options.map(opt => (
                      <option key={Array.isArray(opt) ? opt[0] : opt} value={Array.isArray(opt) ? opt[0] : opt}>
                        {Array.isArray(opt) ? opt[1] : opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Policies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                { label: 'Guest Policy', name: 'guestPolicyType', options: [['no_guests', 'No Guests'], ['weekends_only', 'Weekends Only'], ['frequent_guests', 'Frequent'], ['study_partners', 'Study Partners Only']] },
                { label: 'Sharing Level', name: 'SharingLevelType', options: [['strictly_private', 'Strictly Private'], ['ask_first', 'Ask First'], ['open_sharing', 'Open Sharing']] },
                { label: 'Pet Type', name: 'petType', options: ['cat', 'bird', 'hamster', 'reptile', 'other'] },
                { label: 'Pet Preference', name: 'petPreferenceType', options: [['has_pet', 'I have a pet'], ['loves_pets', 'Love Pets'], ['tolerates_pets', 'Tolerate Pets'], ['prefer_no_pets', 'No Pets Preferred']] }
              ].map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">{item.label}</label>
                  <select name={item.name} value={formData[item.name]} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all">
                    {item.options.map(opt => (
                      <option key={Array.isArray(opt) ? opt[0] : opt} value={Array.isArray(opt) ? opt[0] : opt}>
                        {Array.isArray(opt) ? opt[1] : opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button 
              type="submit"
              disabled={loader}
              className={`group w-full relative flex justify-center py-5 px-4 border border-transparent text-lg font-black rounded-2xl text-white bg-[#3f51b5] hover:bg-[#303f9f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f51b5] transition-all duration-300 shadow-xl shadow-blue-200 active:scale-95 ${loader ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {loader ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <span>{user?.roommateProfileStatus ? "Update My Profile" : "Create My Profile"}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}