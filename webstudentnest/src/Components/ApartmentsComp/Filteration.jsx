import React, { useState } from 'react';
import { Range } from 'react-range';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
export default function Filteration() {

  
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [priceRange, setPriceRange] = useState([350, 1400]);
  const [university, setUniversity] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const toggleJoinStatus = () => {
    setIsJoined((prev) => !prev);
  };

  return (
    
    <div data-aos="fade-in" className="w-full max-w-6xl mx-auto my-3.5 p-4 lg:py-2 lg:px-6 bg-white shadow-xl rounded-2xl lg:rounded-full border border-gray-100 flex flex-col lg:flex-row lg:items-center lg:gap-6">
      
      <h2 className="text-xl font-bold text-gray-800 lg:hidden mb-4">Search Filters</h2>

      
      <div className="flex-1 mb-4 lg:mb-0">
        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
          Age: {ageRange[0]} - {ageRange[1]}
        </label>
        <Range
          step={1} min={18} max={50} values={ageRange}
          onChange={(values) => setAgeRange(values)}
          renderTrack={({ props, children }) => (
            <div {...props} style={{ ...props.style, height: '4px', background: '#e5e7eb', borderRadius: '4px', width: '100%' }}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} style={{ ...props.style, height: '16px', width: '16px', borderRadius: '50%', background: '#4F46E5', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          )}
        />
      </div>

      
     

      
      <div className="flex-1 mb-4 lg:mb-0">
        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
          Price: {priceRange[0]} - {priceRange[1]}
        </label>
        <Range
          step={10} min={350} max={1400} values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div {...props} style={{ ...props.style, height: '4px', background: '#e5e7eb', borderRadius: '4px', width: '100%' }}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} style={{ ...props.style, height: '16px', width: '16px', borderRadius: '50%', background: '#4F46E5', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          )}
        />
      </div>

      
      <div className="flex-1 mb-4 lg:mb-0 min-w-[150px]">
        <TextField
          select
          fullWidth
          size="small"
          value={university}
          onChange={handleUniversityChange}
          label="University"
          variant="outlined"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', fontSize: '13px' } }}
        >
          <MenuItem value="University of Jordan">University of Jordan</MenuItem>
          <MenuItem value="Yarmouk University">Yarmouk University</MenuItem>
          <MenuItem value="Jordan University of Science and Technology">JUST</MenuItem>
        </TextField>
      </div>

      
      <div className="mb-4 lg:mb-0 flex items-center gap-3 lg:border-l lg:pl-6 border-gray-100">
        <label className="text-xs font-bold text-gray-700">Join?</label>
        <input type="radio" id="joinRadio" name="join" className="peer hidden" checked={isJoined} onChange={toggleJoinStatus} />
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${isJoined ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
          onClick={toggleJoinStatus}
        >
          <div className={`w-2 h-2 rounded-full ${isJoined ? 'bg-white' : 'bg-transparent'}`}></div>
        </div>
      </div>

      
      <button className="cursor-pointer lg:w-auto w-full bg-[#3f51b5] hover:bg-[#303f9f] text-white px-8 py-2.5 rounded-xl lg:rounded-full font-bold transition-all shadow-md active:scale-95">
        Search
      </button>

    </div>
  );
}