import React, { useState } from "react";
import { SWIGGY_RESAUTRANT_DETAILS } from "../constant";
import { useEffect } from "react";
import { MENU_ITEM_TYPE_KEY } from "../constant";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenuData();
  }, []);

   async function getMenuData() {
    console.log(id)
    let data = await fetch(`${SWIGGY_RESAUTRANT_DETAILS}${id}`);
    let res = await data.json();
    let result = await res?.data?.cards[0]?.card?.card?.info;
    setRestaurant(result);
    getResMenu(res);
  }

function getResMenu(res){
      setMenuItems(res?.data?.cards.find(x=> x.groupedCard)?.
      groupedCard?.cardGroupMap?.REGULAR?.
      cards?.map(x => x.card?.card)?.
      filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
      map(x=> x.itemCards).flat().map(x=> x.card?.info) || [])
}

  return {restaurant, menuItems};
};


export default useRestaurant;