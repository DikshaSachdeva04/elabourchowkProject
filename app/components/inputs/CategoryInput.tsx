'use client';

import { IconType } from "react-icons";

interface CategoryInputProps{
    icon: IconType;
    label:string;
    selected?:boolean;
    onClick:(value:string)=> void;

}


const CategoryInput: React.FC<CategoryInputProps> =({
    icon:Icon,
    label,
    selected,
    onClick
})=>{
    return(
        <div 
           onClick={()=>onClick(label)}
           className={`
               rounded-xl
               border-2
               p-4
               flex
               flex-col
               gap-3
               ${selected ? "border-blue-500" : "border-blue-200"}
               hover:border-blue-500
               transition
               cursor-pointer
           `}
        >
            <Icon size={30}/>
            <div className="font-semibold text-blue-950">
                {label}

            </div>


        </div>
    );
}
export default CategoryInput;