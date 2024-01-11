'use client';
import { useState, Fragment } from 'react';
import { SearchManufactureProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from '@/constants';
import { Combobox, Transition } from '@headlessui/react'


const SearchManufacture = ({ manufacture, setManufacture }: SearchManufactureProps) => {
  const [query, setquery] = useState('');

  const filteredManufacturers =
    query === ''
      ?
      manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      ))
  return (
    <div
      className='search-manufacturer'>
      <Combobox >
        <div className='relative w-full'>
          <Combobox.Button className={'absolute top-[140px]'}>
            <Image
              src='/car-logo.svg'
              alt='car logo'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder='volkswagen'

            displayValue=
            {(manufacturer: string) =>
              manufacturer

            }
            onChange={(e) => setquery(e.target.value)}
            className='search-manufacturer__input
            '/>
          <Transition as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            afterLeave={() => setquery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className={'search-manufacturer__option'}>
                  Create "{query}"

                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`}
                    value={item} >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacture