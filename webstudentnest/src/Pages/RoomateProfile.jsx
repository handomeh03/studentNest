import React, { useState } from 'react';

export default function RoommateProfile() {
  const [formData, setFormData] = useState({
    language: '',
    minAge: '18',
    maxAge: '30',
    sleepSchedule: '',
    noiseTolerance: '',
    habits: []
  });

  const habitsOptions = ["Smoking", "Pet Friendly", "Vegan", "Early Bird", "Night Owl", "Quiet Study"];

  const handleHabitChange = (habit) => {
    setFormData(prev => ({
      ...prev,
      habits: prev.habits.includes(habit)
        ? prev.habits.filter(h => h !== habit)
        : [...prev.habits, habit]
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-gray-50  px-4 min-h-screen">
      
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        
        <div className="bg-[#3f51b5] p-8 text-white">
          <h2 className="text-3xl font-bold">Roommate Preferences</h2>
          <p className="mt-2 text-blue-100">Help us find the perfect match for your lifestyle</p>
        </div>

        <div className="p-8 space-y-8">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Preferred Language</label>
              <select 
                name="language" 
                onChange={handleChange} 
                className=" cursor-pointer w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select Language</option>
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Age Range</label>
              <div className="flex items-center gap-3">
                <select 
                  name="minAge" 
                  onChange={handleChange} 
                  className=" cursor-pointer flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {[...Array(23)].map((_, i) => (
                    <option key={i} value={i + 18}>{i + 18}</option>
                  ))}
                </select>
                <span className="text-gray-400">to</span>
                <select 
                  name="maxAge" 
                  onChange={handleChange} 
                  className=" cursor-pointer flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {[...Array(23)].map((_, i) => (
                    <option key={i} value={i + 18} selected={i+18 === 30}>{i + 18}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Sleep Schedule</label>
              <select 
                name="sleepSchedule" 
                onChange={handleChange} 
                className=" cursor-pointer w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Schedule</option>
                <option value="early">🌅 Early Riser</option>
                <option value="late">🌙 Late Night</option>
                <option value="flexible">🔄 Flexible</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Noise Tolerance</label>
              <select 
                name="noiseTolerance" 
                onChange={handleChange} 
                className=" cursor-pointer w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Level</option>
                <option value="low">🔇 Low (Needs Quiet)</option>
                <option value="medium">🔉 Medium</option>
                <option value="high">🔊 High (Noisy is OK)</option>
              </select>
            </div>
          </div>

          
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700 block">Lifecycle Habits</label>
            <div className="flex flex-wrap gap-3">
              {habitsOptions.map((habit) => {
                const isSelected = formData.habits.includes(habit);
                return (
                  <button
                    key={habit}
                    type="button"
                    onClick={() => handleHabitChange(habit)}
                    className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#3f51b5] text-white border-blue-600 shadow-md transform scale-105'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    {habit}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <button className="w-full cursor-pointer bg-[#3f51b5] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#3f51b5da] hover:shadow-lg active:scale-[0.98] transition-all duration-200">
              Save Profile Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}