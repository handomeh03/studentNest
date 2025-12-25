export default function Image() {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="w-10 h-10 overflow-hidden transform group-hover:rotate-12 transition-transform duration-300">
        <img src="./logo.png" alt="Logo" className="w-full h-full object-contain scale-125" />
      </div>
      <h4 
        className="text-xl font-black text-white tracking-tighter transition-colors duration-300"
        
      >
        Student<span className="text-white">Nest</span>
      </h4>
    </div>
  );
}