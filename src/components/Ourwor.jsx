


import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

function Ourwor() {

    const workDta = [
         {
             tiitle:"Mobile app marketing",
             descitption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id odio, quidem sunt aliquam aut vel explicabo laboriosam nisi voluptate? Tenetur, accusantium obcaecati? Eveniet?",
             image:assets.work_mobile_app
         },
          {
             tiitle:"Dashboard management",
             descitption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id odio, quidem sunt aliquam aut vel explicabo laboriosam nisi voluptate? Tenetur, accusantium obcaecati? Eveniet?",
             image:assets.work_dashboard_management
         },
          {
             tiitle:"Fitness app promotion",
             descitption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id odio, quidem sunt aliquam aut vel explicabo laboriosam nisi voluptate? Tenetur, accusantium obcaecati? Eveniet?",
             image:assets.work_fitness_app
         }
    ]
  return (

     <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12
     lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title= "Our latest work" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id odio, quidem sunt aliquam aut vel explicabo laboriosam nisi voluptate? Tenetur, accusantium obcaecati? Eveniet?"/>
        
         <div className='grid sm:grid-cols-2 lg:grid-cosl-3 gap-6 w-full max-w-5xl'>
              { 
                workDta.map((work , index)=>(

                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="work"  className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.tiitle}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.descitption}</p>
                    </div>
                ))
              }
         </div>
     
     </div>
  )
}

export default Ourwor

