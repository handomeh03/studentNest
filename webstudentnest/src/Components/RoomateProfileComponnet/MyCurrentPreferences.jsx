import React from 'react';
import ErrorComp from "../PublicComp/ErrorComp";
import Loader from "../PublicComp/Loader";

export default function MyCurrentPreferences({ errorProfile, loaderProfile, profileRoomate }) {
  
  
  if (loaderProfile) return <div className="flex justify-center p-10"><Loader /></div>;

  
  if (errorProfile) return <ErrorComp error={errorProfile} />;

  if (!profileRoomate) {
    return (
      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl text-center">
        <p className="text-[#3f51b5] font-bold text-lg">Create Your Roommate Profile</p>
        <p className="text-gray-500 text-sm">Fill in your details below to see your preferences here</p>
      </div>
    );
  }

  
  const stats = [
    { label: 'Language', value: profileRoomate.Language },
    { label: 'Noise Tolerance', value: profileRoomate.UserAcceptNoiseTolerance },
    { label: 'Sleep Schedule', value: profileRoomate.UserSleepSchedule },
    { label: 'Age Preference', value: `${profileRoomate.minAge} - ${profileRoomate.maxAge} years` },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
      
      <div className="bg-[#3f51b5] px-6 py-4 flex justify-between items-center">
        <h3 className="text-white font-bold flex items-center gap-2 text-sm md:text-base">
          <span className="w-1.5 h-4 bg-white/40 rounded-full"></span>
          My Roommate Profile
        </h3>
        <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
          Live Preview
        </span>
      </div>

      <div className="p-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-2xl border border-transparent hover:border-indigo-100 transition-all">
              <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-sm font-bold text-gray-700">
                {item.value || 'Not Set'}
              </p>
            </div>
          ))}
        </div>

        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-gray-100 p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-500 text-lg font-bold">“</span>
              <p className="text-[11px] uppercase font-bold text-indigo-400 tracking-tighter">Personal Bio</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic px-2">
              {profileRoomate.bio ? profileRoomate.bio : "No bio description provided yet..."}
            </p>
            <div className="text-right mt-2">
              <span className="text-[9px] text-gray-300 font-mono">
                Created: {new Date(profileRoomate.createAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}