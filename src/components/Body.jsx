import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_PUBLIC_API } from "../constant";
import { searchRest } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import {AiOutlineSearch} from "react-icons/ai"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    setLoading(true);
    try {
      const data = await fetch(SWIGGY_PUBLIC_API);
      const json = await data.json();
      // console.log(json);
      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      setAllRestaurants([]);
      setFilteredRestaurants([]);
      console.log("error in fetching data from API");
    }
    setLoading(false);
  }

  function searchHandler(e) {
    setSearchText(e.target.value.toLowerCase());
    console.log(searchText);
  }
const {isOnline} = useOnline();
if(!isOnline){
  return <h1>offline, please check your internet connections!!</h1>
}

  return (
    <>


    <div className="flex justify-between h-[300px] w-full  items-center bg-gradient-to-r from-purple-300 via-transparent to-white
">
     <div className="mt-70px h-[145px] max-w-[391px] ml-11+11px overflow-hidden">
      <h1 className="text-[48px] leading-[48px] font-extrabold text-black overflow-hidden">Order Food <br/> Online in<br/> Mumbai</h1>
      <svg width="100%" height="100%" viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" strokeWidth="1.5"></path></svg>
     </div> 
     <div className="mr-11+11px">
      <img className="w-[501px] h-[300px]" src="../../public/header.png"/>
     </div>
    </div>
    <div className="flex justify-center items-center  my-8">
     
        <input className="relative flex rounded-[12px] h-[48px] py-[8px]  bg-slate w-[600px] px-[30px] border-none 	focus:outline-none"
          type="text"
          onChange={(e) => {
            searchHandler(e);
            let data = searchRest(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          
          placeholder="Search a restaurant you want... 🔍 "
          value={searchText}
        />
        
     
          
     
       
      </div>
      
      { filteredRestaurants.length === 0 || loading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
