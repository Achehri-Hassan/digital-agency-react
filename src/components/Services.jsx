

import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

function Services() {

    const servicesData = [
         {
            title: "Advertising",
            descrition:"We turn bold ideas into powerful digital solution that connect, engaeg... ",
            icon: assets.ads_icon
         },
          {
            title: "Content Marketing",
            descrition:"We help you execute your plan and deliver result. ",
            icon: assets.marketing_icon
         },
          {
            title: "Content writing",
            descrition:"we help you create a marketing strategy that drives result.",
            icon: assets.content_icon
         },
          {
            title: "Secial media",
            descrition:"Wehelp you build a strong social media presence and engage with your audience. ",
            icon: assets.social_icon
         }

    ]
  return (

     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
          
          <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
         
          <Title title= "How can we help?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A quae qui tempore recusandae blanditiis deserunt. Esse nesciunt omnis similique cum!"/>
          
          <div className='flex flex-col md:grid grid-cols-2'>
             {servicesData.map(( service , index)=>(
                  <ServiceCard key={index} service={service} index={index}/>
             ))}
          </div>

     </div>
  )
}

export default Services

