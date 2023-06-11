'use client';



interface SubCategoryInputProps{
    
    label:string;
    selected?:boolean;
    onClick:(value:string)=> void;

}


const SubCategoryInput: React.FC<SubCategoryInputProps> =({
    
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
            
            <div className="font-semibold text-blue-950">
                {label}

            </div>


        </div>
    );
}
export default SubCategoryInput;