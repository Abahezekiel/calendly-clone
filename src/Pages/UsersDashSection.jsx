import React from 'react'
import DashNav from './DashNav'
import Button from '../Components/button/Button'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
import { CiDollar } from 'react-icons/ci'
import { FaAngleRight } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

const UsersDashSection = () => {
  return (
    <div className=' h-screen w-full'>
      <DashNav/>
      <div className='pl-7 text-base font-semibold text-gray-400'>
        <p>Organizational Settings</p>
      </div>
      <div className="p-3">
        <Button
          title="Users"
          afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
        />
      </div>
      <div className='pl-7 text-base font-light text-gray-400'>
        <p>1/1 seats occupied</p>
      </div>
      <div className="shadow-md border-2 w- border-blue-600 m-7 bg-blue-50 rounded-md flex items-center justify-between p-6">
        <Button
          title="Upgrade to the Standard plan to access this feature and other advanced scheduling tools."
          beforeIcon={
            <CiDollar className="w-6 h-6 font-extrabold text-blue-600" />
          }
          type="secondary"
          extraStyles=" w-2/3 rounded-full flex   text-black font-light text-sm border-none"
        />
        <Button
          title="Explore the Standard plan"
          type="secondary"
          extraStyles="bg-blue-600 w-48 rounded-full flex items-center justify-center text-white font-normal text-sm border-none h-16"
        />
      </div>

      <div className="flex items-center justify-center flex-col ">
        <img
          src="https://assets.calendly.com/assets/frontend/media/users_icon-4a6d34197707fded7844.svg"
          alt="Workflows Icon"
        />
        <p className="font-semibold text-xl mb-5 text-blue-950 text-center">
        Scheduling is better together
        </p>
        <p className="font-light text-blue-900 mb-5 text-center w-3/5 flex items-center justify-center">
        As you add users to your organization, they'll appear here. Click their avatar to view profile details and monitor setup and activity.
        </p>
        <Button
          title="Learn More"
          beforeIcon={
            <HiOutlineQuestionMarkCircle className="w-4 h-4 font-thin" />
          }
          afterIcon={<FaAngleRight className="w-4 h-4 font-thin" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none text-blue-700"
        />
      </div>
      <div className="m-7  flex items-center justify-center">
        <Button
          title="Invite a teammate"
          beforeIcon={<GoPlus className="w-4 h-4" />}
          type="secondary"
          extraStyles="p-10  rounded-full w- flex items-center justify-center text-black font-light text-sm border-none bg-blue-100  "
        />
      </div>
    </div>
  )
}

export default UsersDashSection
