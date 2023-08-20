
import { IMG_CDN } from "../constant";
import {AiTwotoneStar} from "react-icons/ai"
import {RiPinDistanceFill} from "react-icons/ri"
import {MdLocalOffer} from "react-icons/md"
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="flex flex-col items-center border rounded-[8px] bg-gray-100 p-[10px] w-[340px] h-[350px] m-[20px] hover:scale-[1.05] shadow-lg">
      <img className="w-full h-[180px] object-cover	rounded-[8px] mb-[10px]" src={`${IMG_CDN}${cloudinaryImageId}`} />
      <h3 className="text-[24px] text-[#333] m-0 overflow-hidden font-bold">{name}</h3>
      <h5 className="text-center mt-3 font-medium">{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span className="flex gap-10 mt-3">
        <h4 className="flex items-center">
         <span className="mr-[6px]"><AiTwotoneStar color="#FFD700"/></span> {avgRatingString}
        </h4>
        <h4 className="flex items-center">
        <span className="mr-[5px]"><RiPinDistanceFill color="green"/></span>{sla.lastMileTravelString}</h4>
      
       
        <h4 className="flex items-center">
        <span className="mr-[5px]"><MdLocalOffer color="gray"/></span>
        {costForTwo}
        </h4>
      </span>
    </div>
  );
};

export default RestaurantCard;