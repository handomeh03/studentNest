export default function ApartmentCard({apartment}){
    return(
         <div
       data-aos="fade-in"
        key={apartment.id}
        className="group relative bg-white rounded-2xl shadow-blue-200  overflow-hidden shadow-lg hover:shadow-blue-300 "
      >
        {/* Image */}
        <div className="relative w-full h-64">
          <img
            src={apartment.imageSrc}
            alt={apartment.imageAlt}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
          {/* Property Status Badge */}
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
              apartment.propertyStatus === "verified"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {apartment.propertyStatus}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
            <a href={apartment.href}>{apartment.name}</a>
          </h3>
          <p className="text-gray-500 text-sm mb-1">{apartment.location}</p>
          <p className="text-gray-500 text-sm mb-1">
            Rooms: {apartment.numberOfRoom} | Beds: {apartment.numberOfBed}
          </p>
          <p className="text-gray-500 text-sm mb-3">
            {apartment.isShared ? "join" : "not join"} | landlord: {apartment.landlordName}
          </p>

          {/* Price */}
          <p className="text-xl font-extrabold text-gray-900 mb-4">
            {apartment.priceJD} JD <span className="text-sm font-normal">/ {apartment.rentTerm}</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap">
        <div className="flex gap-2 flex-wrap">
  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Edit
  </button>
  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Delete
  </button>
  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show Document
  </button>
  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Request Lease
  </button>
  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:shadow-lg transition">
    Show Details
  </button>
</div>

            
          </div>
        </div>
      </div>
    );
}