import React, { useState } from 'react';
import { Range } from 'react-range';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


export default function Filteration() {
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [locationRange, setLocationRange] = useState([6, 15]);
  const [priceRange, setPriceRange] = useState([350, 1400]);
  const [university, setUniversity] = useState('');
  const [isJoined, setIsJoined] = useState(false); // حفظ حالة الانضمام

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  // دالة لتبديل حالة الانضمام
  const toggleJoinStatus = () => {
    setIsJoined((prev) => !prev); // عكس القيمة الحالية
  };

  return (
    <div data-aos="fade-in" className="w-full max-w-lg mx-auto my-3.5 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search Filters</h2>

      {/* Age Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age: {ageRange[0]} - {ageRange[1]}
        </label>
        <Range
          step={1}
          min={18}
          max={50}
          values={ageRange}
          onChange={(values) => setAgeRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                background: '#ddd',
                borderRadius: '4px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                background: '#4F46E5',
              }}
            />
          )}
        />
      </div>

      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location (km): {locationRange[0]} - {locationRange[1]}
        </label>
        <Range
          step={1}
          min={1}
          max={20}
          values={locationRange}
          onChange={(values) => setLocationRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                background: '#ddd',
                borderRadius: '4px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                background: '#4F46E5',
              }}
            />
          )}
        />
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Range
          step={10}
          min={350}
          max={1400}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                background: '#ddd',
                borderRadius: '4px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                background: '#4F46E5',
              }}
            />
          )}
        />
      </div>

      {/* University Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          University
        </label>
        <TextField
          select
          fullWidth
          value={university}
          onChange={handleUniversityChange}
          label="Select University"
          variant="outlined"
        >
          <MenuItem value="University of Jordan">University of Jordan</MenuItem>
          <MenuItem value="Yarmouk University">Yarmouk University</MenuItem>
          <MenuItem value="Jordan University of Science and Technology">Jordan University of Science and Technology</MenuItem>
        </TextField>
      </div>

      {/* Join Filter with radio button */}
      <div className="mb-6 flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Join?
        </label>
        
        {/* Radio Button */}
        <input
          type="radio"
          id="joinRadio"
          name="join"
          className="peer hidden"
          checked={isJoined} // تحديد إذا كان تم الانضمام أم لا
          onChange={toggleJoinStatus} // تغيير الحالة عند التحديد
        />

        {/* Custom Radio Button */}
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500`}
          onClick={toggleJoinStatus} // تغيير الحالة عند النقر على الدائرة المخصصة
        >
          <div
            className={`w-3 h-3 rounded-full ${isJoined ? 'bg-white' : 'bg-transparent'}`}
          ></div>
        </div>
      </div>

      {/* Search Button */}
      <button
        className={`w-full bg-[#3f51b5] text-white p-3 rounded-lg mt-4 `}
        
      >
        Search
      </button>
    </div>
  );
}
