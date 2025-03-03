import React from 'react'
import { CiDollar } from 'react-icons/ci'
import Button from '../Components/button/Button'
import DashNav from './DashNav'

const AdminDashSection = () => {
  return (
    <>
    <DashNav />

    <div className="shadow-md border-2 border-blue-600 m-7 bg-blue-50 rounded-md flex items-center justify-between p-6">
    <Button
      title="Upgrade to the Standard plan to access this feature and other advanced scheduling tools."
      beforeIcon={
        <CiDollar className="w-6 h-6 font-extrabold text-blue-600" />
      }
      type="secondary"
      extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none"
    />
    <Button
      title="Explore the Standard plan"
      type="secondary"
      extraStyles="bg-blue-600 rounded-full flex items-center justify-center text-white font-normal text-sm border-none h-11"
    />
  </div>
  </>
  )
}

export default AdminDashSection
