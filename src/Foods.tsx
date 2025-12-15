import IMG1 from "./assets/foods/food1.svg";
import IMG2 from "./assets/foods/food2.svg";
import IMG3 from "./assets/foods/food3.svg";
import IMG4 from "./assets/foods/food4.svg";


const Foods = () => {

    const foodItems = [{title:"Greys Vage", img:IMG1 , days:"6 Days Remaining"}, {title:"Greys Vage", img:IMG2 , days:"6 Days Remaining"}, {title:"Greys Vage", img:IMG3 , days:"7 Days Remaining"}, {title:"Greys Vage", img:IMG4 , days:"8 Days Remaining"}]

  return (
    <div className=" w-container mx-auto my-15">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center text-center md:text-start  ">
        {
            foodItems.map((item, index)=>(
                <div key={index} className="flex flex-col justify-center items-center md:items-start">
                    <img src={item.img} alt="food" className="object-contain rounded-xl" />
                    <div>
                        
                    <p className="font-SourceSans font-bold text-deliver my-2">{item.title}</p>
                    <p className="bg-[#F1722833]  rounded font-SourceSans font-bold text-[#F17228] p-1 max-w-[200px]">{item.days}</p>
                    </div>

                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Foods