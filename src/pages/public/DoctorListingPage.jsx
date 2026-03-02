import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const doctors = [
  { id: 1, name: "Dr. A", city: "Faisalabad", specialization: "Cardiology" },
  { id: 2, name: "Dr. B", city: "Lahore", specialization: "Dermatology" },
  { id: 3, name: "Dr. C", city: "Karachi", specialization: "Neurology" },
  { id: 4, name: "Dr. D", city: "Lahore", specialization: "Urology" },
  { id: 5, name: "Dr. E", city: "Faisalabad", specialization: "Dermatology" },
  { id: 6, name: "Dr. F", city: "Islamabad", specialization: "Cardiology" },
  { id: 7, name: "Dr. G", city: "Karachi", specialization: "Orthopedics" },
  { id: 8, name: "Dr. H", city: "Lahore", specialization: "Neurology" },
  { id: 9, name: "Dr. I", city: "Faisalabad", specialization: "Urology" },
  { id: 10, name: "Dr. J", city: "Islamabad", specialization: "Dermatology" },
  { id: 11, name: "Dr. K", city: "Karachi", specialization: "Cardiology" },
  { id: 12, name: "Dr. L", city: "Lahore", specialization: "Pediatrics" },
  { id: 13, name: "Dr. M", city: "Faisalabad", specialization: "Orthopedics" },
  { id: 14, name: "Dr. N", city: "Islamabad", specialization: "Neurology" },
  { id: 15, name: "Dr. O", city: "Karachi", specialization: "Urology" },
  { id: 16, name: "Dr. P", city: "Lahore", specialization: "Cardiology" },
  { id: 17, name: "Dr. Q", city: "Faisalabad", specialization: "Dermatology" },
  { id: 18, name: "Dr. R", city: "Islamabad", specialization: "Pediatrics" },
  { id: 19, name: "Dr. S", city: "Karachi", specialization: "Orthopedics" },
  { id: 20, name: "Dr. T", city: "Lahore", specialization: "Urology" },
];

const DoctorListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = Object.fromEntries([...searchParams]);
  const city = filters.city ?? "";
  const specialization = filters.specialization ?? "";

  const updateFilters = (newFilters) => {
    const updatedParams = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) updatedParams.set(key, value);
      else updatedParams.delete(key);
    });

    setSearchParams(updatedParams);
  };

  const cities = [...new Set(doctors.map((doc) => doc.city))];
  const specializations = [
    ...new Set(doctors.map((doc) => doc.specialization)),
  ];

  // Filter doctors based on current filters
  const filteredDoctors = doctors.filter((doc) => {
    return (
      (!city || doc.city === city) &&
      (!specialization || doc.specialization === specialization)
    );
  });

  return (
    <div className="h-full flex flex-col items-center p-10">
      <h1 className="text-3xl text-primary font-bold mb-2">
        Welcome to CareSync
      </h1>
      <p className="text-xl font-semibold mb-5">Doctor Listing Page</p>

      {/* Filters */}
      <div className="flex items-center gap-5 mb-8">
        {/* City Filter */}
        <Select
          value={city}
          onValueChange={(val) => updateFilters({ city: val || undefined })}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>City</SelectLabel>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Specialization Filter */}
        <Select
          value={specialization}
          onValueChange={(val) =>
            updateFilters({ specialization: val || undefined })
          }
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Specialization</SelectLabel>
              {specializations.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          variant="destructive"
          onClick={() => {
            updateFilters({ city: undefined, specialization: undefined });
          }}
        >
          Clear Filters
        </Button>
      </div>

      {/* Doctor List */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="p-4 border rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{doc.name}</p>
                <p className="text-sm text-gray-500">
                  {doc.city} - {doc.specialization}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors found for selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorListingPage;
