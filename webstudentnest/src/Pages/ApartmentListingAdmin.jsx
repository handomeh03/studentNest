import { useState } from "react";
import { Useaos } from "../Hooks/publicHook/useaos";
import ApartmentCard from "../Componnets/ApartmentListing/ApartmentCard";

export default function ApartmentListingAdmin() {
  Useaos();
  const [apartments] = useState([
    {
      id: 1,
      name: "Sunset Apartment",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Sunset Apartment view",
      priceJD: 250,
      numberOfRoom: 3,
      numberOfBed: 2,
      location: "Amman, Abdali",
      rentTerm: "month",
      isShared: true,
      landlordName: "Ahmad Ali",
      propertyStatus: "verified",
      href: "#",
    },
    {
      id: 2,
      name: "City Center Flat",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "City Center Flat view",
      priceJD: 350,
      numberOfRoom: 4,
      numberOfBed: 3,
      location: "Amman, City Center",
      rentTerm: "month",
      isShared: false,
      landlordName: "Sara Omar",
      propertyStatus: "Not verified",
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: "verified",
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: "verified",
      href: "#",
    },
    {
      id: 3,
      name: "Cozy Studio",
      imageSrc:
        "https://i.pinimg.com/originals/d0/be/c4/d0bec4fd88478b4fe139c30d85367ecc.jpg",
      imageAlt: "Cozy Studio view",
      priceJD: 180,
      numberOfRoom: 1,
      numberOfBed: 1,
      location: "Irbid, Downtown",
      rentTerm: "month",
      isShared: true,
      landlordName: "Khaled Nasser",
      propertyStatus: "verified",
      href: "#",
    },
  ]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl   sm:px-6 sm:py-5">
        <h4 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">
          Apartment Listings
        </h4>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apartment, index) => (
            <ApartmentCard apartment={apartment} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
