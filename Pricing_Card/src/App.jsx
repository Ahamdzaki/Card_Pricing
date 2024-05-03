import React from 'react'

export default function App() {
  return (
    <>
      {/* global container */}
      <div className='flex items-center justify-center min-h-screen bg-slate-800'>
        {/* Inner container */}
        <div className='flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0'>
          {/* col 1 */}
          <div className=' bg-slate-700 text-white rounded-xl'>
            {/* upper container */}
            <div className='p-8 mx-3 mt-3 text-white bg-slate-800 rounded-t-xl'>
              <div className='text-center uppercase'>Basic</div>
              <h2 className='mt-10 font-serif text-center text-5xl'>100GB</h2>
              <h3 className='mt-2 text-center text-sm'>$1.99/month</h3>
              <div className='flex justify-center'>
                <a href="" className='my-10 inline-block px-10 py-3 border border-violet-800 rounded-lg hover:bg-violet-800 duration-200'>Purchase</a>
              </div>
            </div>
            <div className='border-t border-slate-700'></div>
            {/* lower container */}
            <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
              <div className='flex flex-col text-center text-sm'>
                <span>100GB of Storage</span>
                <span>Options to add members</span>
                <span>Extra members benefits</span>
              </div>
            </div>
          </div>

          {/* col 2 */}
          <div className=' bg-violet-800 text-white rounded-xl'>
            {/* upper container */}
            <div className='p-8 mx-3 mt-3 text-white bg-slate-800 rounded-t-xl'>
              <div className='text-center uppercase'>Standard</div>
              <h2 className='mt-10 font-serif text-center text-5xl'>200GB</h2>
              <h3 className='mt-2 text-center text-sm'>$3.99/month</h3>
              <div className='flex justify-center'>
                <a href="" className='my-10 inline-block px-10 py-3 border border-violet-800 bg-violet-800 rounded-lg hover:bg-violet-900 duration-200'>Purchase</a>
              </div>
            </div>
            <div className='border-t border-slate-700'></div>
            {/* lower container */}
            <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
              <div className='flex flex-col text-center text-sm'>
                <span>200GB of Storage</span>
                <span>Options to add members</span>
                <span>Extra members benefits</span>
              </div>
            </div>
          </div>

          {/* col 3 */}

          <div className=' bg-slate-700 text-white rounded-xl'>
            {/* upper container */}
            <div className='p-8 mx-3 mt-3 text-white bg-slate-800 rounded-t-xl'>
              <div className='text-center uppercase'>Premium</div>
              <h2 className='mt-10 font-serif text-center text-5xl'>2 TB</h2>
              <h3 className='mt-2 text-center text-sm'>$8.99/month</h3>
              <div className='flex justify-center'>
                <a href="" className='my-10 inline-block px-10 py-3 border border-violet-800 rounded-lg hover:bg-violet-800 duration-200'>Purchase</a>
              </div>
            </div>
            <div className='border-t border-slate-700'></div>
            {/* lower container */}
            <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
              <div className='flex flex-col text-center text-sm'>
                <span>2 TB of Storage</span>
                <span>Options to add members</span>
                <span>Extra members benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
