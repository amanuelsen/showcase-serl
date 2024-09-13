import React from "react";
import { Select, SelectItem } from "@nextui-org/react"; 

type SelecttypeProps = {
  selectedCreator: string;
  setSelectedCreator: (value: string) => void;
};

export default function Selecttype({ selectedCreator, setSelectedCreator }: SelecttypeProps) {
  const handleChange = (value: string) => {
    setSelectedCreator(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="text-2xl font-semibold text-gray-700 mb-4">
        {selectedCreator ? `Selected: ${selectedCreator}` : "Filter by Creator"}
      </label>

      <Select
        placeholder={selectedCreator}

        defaultSelectedKeys={["All"]}
        onChange={(e) => handleChange(e.target.value)} 
        className="w-full max-w-lg text-pretty bg-slate-300 rounded-lg shadow-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
      >
        <SelectItem key="" value="">
          <span className="text-gray-500 h-10">All</span>
        </SelectItem>
        <SelectItem key="student" value="student">
          <span className="text-blue-600 h-10">Student</span>
        </SelectItem>
        <SelectItem key="teacher" value="teacher">
          <span className="text-green-600">Teacher</span>
        </SelectItem>
        <SelectItem key="phd" value="phd">
          <span className="text-purple-600">PhD</span>
        </SelectItem>
      </Select>

      <p className="text-lg text-gray-500 mt-4">
        {selectedCreator ? `Currently showing: ${selectedCreator} projects` : "Select a creator type to filter the projects."}
      </p>
    </div>
  );
}
