'use client';
import React from 'react'
import Container from '../Container'
import CategoryBox from '../CategoryBox'

import {GiBrickWall,GiClawHammer ,GiMightySpanner} from 'react-icons/gi';
import {GrGroup} from "react-icons/gr"
import {MdOutlineCarpenter,MdOutlineElectricBolt,MdOutlinePlumbing,MdOutlineSupervisorAccount,MdOutlineEngineering} from 'react-icons/md';
import {LuPaintbrush} from 'react-icons/lu';
import {FcBusinesswoman} from 'react-icons/fc';
import { useSearchParams , usePathname } from 'next/navigation';
export const categories=[
    {
        icon:GiClawHammer,
        label:'Labour (लेबर)',
        description:"Get trained labour for your work "
    },
    {
        icon:GiBrickWall,
        label:'Mason (मिस्त्री)',
        description:"Cutting, dressing or laying stone provide the most trusted workers without any hurdles"
    },
    {
        icon:MdOutlineCarpenter,
        label:'Carpenter (कारीगर)',
        description:"Get hands-on experienced carpenters for the best result."
    },
    {
        icon:LuPaintbrush,
        label:'Painter (पेंटर)',
        description:"Get the job done in the minimum time with perfection from the trained painters."
    },
    {
        icon:MdOutlineElectricBolt,
        label:'Electrician (बिजली मिस्त्री)',
        description:"Be assured of the safe installation and implementation of electrical equipment."
    },
    {
        icon:MdOutlinePlumbing,
        label:'Plumber (प्लम्बर)',
        description:"We provide you with the best worker for the plumbing work with great knowledge and experience that will cut your extra cost during work."
    },
    {
        icon:FcBusinesswoman,
        label:'Woman Worker (महिला कार्यकर्ता)',
        description:"Now every woman will get work, honor and respect."
    },
    {
        icon:GiMightySpanner,
        label:'Welder (वेल्डर)',
        description:""
    },
    {
        icon:GrGroup,
        label:'Foreman (मुख्य कारीगर)',
        description:""
    },
    {
        icon:MdOutlineSupervisorAccount,
        label:'Supervisor (पर्यवेक्षक)',
        description:""
    },
    {
        icon:MdOutlineEngineering,
        label:'Engineer (इंजीनियर)',
        description:""
    }
    ,
    
    
]
const Categories=()=> {
    const params= useSearchParams();
    const category= params?.get('category');
    const pathname=usePathname();
    const isMainPage= pathname === '/';

    if(!isMainPage){
        return null;
    }

  return (
    <Container>
        <div className='
         pt-4
         flex
         flex-row
         items-center
         justify-between
         overflow-x-auto
        
        '>
            {categories.map((items)=>(
                <CategoryBox
                key={items.label}
                label={items.label}
                selected={category===items.label}
                icon={items.icon}
                
                
                />
            ))}

        </div>
    </Container>
  )
}

export default Categories