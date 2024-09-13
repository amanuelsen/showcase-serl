import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'

type SelecttypeProps = {
  selectedCreator: string
  setSelectedCreator: (value:string) => void
}

export default function Selecttype({
  selectedCreator,
  setSelectedCreator,
}: SelecttypeProps) {
  const handleChange = (value: string) => {
    setSelectedCreator(value)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <label className='mb-4 text-2xl font-semibold text-gray-700'>
        {selectedCreator ? `Selected: ${selectedCreator}` : 'Filter by Creator'}
      </label>

      <Select
        placeholder={selectedCreator}
        defaultSelectedKeys={['All']}
        onChange={(e) => handleChange(e.target.value)}
        className='w-full max-w-lg text-pretty rounded-lg border border-gray-300 bg-slate-300 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-500'
      >
        <SelectItem key='' value="">
          <span className='h-10 text-gray-500'>All</span>
        </SelectItem>
        <SelectItem key='student' value='student'>
          <span className='h-10 text-blue-600'>Student</span>
        </SelectItem>
        <SelectItem key='teacher' value='teacher'>
          <span className='text-green-600'>Teacher</span>
        </SelectItem>
        <SelectItem key='phd' value='phd'>
          <span className='text-purple-600'>PhD</span>
        </SelectItem>
      </Select>

      <p className='mt-4 text-lg text-gray-500'>
        {selectedCreator
          ? `Currently showing: ${selectedCreator} projects`
          : 'Select a creator type to filter the projects.'}
      </p>
    </div>
  )
}
