import React from 'react'
import Title from '../Components/Title'

const MyProfile = () => {
  return (
    <div className='border-t pt-10 min-h-[70vh]'>
      <div className='text-2xl text-center'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>

      <div className='max-w-xl mx-auto mt-10 bg-white shadow rounded p-6'>
        <div className='flex flex-col gap-4 text-gray-700'>

          <div className='flex justify-between border-b pb-2'>
            <p className='font-medium'>Full Name</p>
            <p>Rahul Sharma</p>
          </div>

          <div className='flex justify-between border-b pb-2'>
            <p className='font-medium'>Email</p>
            <p>rahul@gmail.com</p>
          </div>

          <div className='flex justify-between border-b pb-2'>
            <p className='font-medium'>Phone</p>
            <p>+91 9876543210</p>
          </div>

          <div className='flex justify-between border-b pb-2'>
            <p className='font-medium'>Address</p>
            <p className='text-right'>
              Flat 302, MG Road <br />
              Mumbai, India
            </p>
          </div>

          <button className='mt-6 bg-black text-white py-2 rounded hover:bg-gray-800 transition'>
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  )
}

export default MyProfile
