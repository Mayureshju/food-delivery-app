import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constant";
import useRestaurant from "../hooks/useRestaurant";
import { AiTwotoneStar } from "react-icons/ai";
import { BiCaretUpSquare } from "react-icons/bi";
import { LuSquareDot } from "react-icons/lu";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slice/cartSlice";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, menuItems } = useRestaurant(id);

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFromCart = (item) => {
    dispatch(removeItem(item.id));
  };
 

  return (
    <div className="w-11/12 mt-10">
      {restaurant.length == 0 ?(
        <div><Shimmer/></div> 
      ) : (
        <div className="flex justify-between items-center">
          <div className="ml-11+11px">
            <h1 className="font-bold text-2xl">{restaurant.name}</h1>
            <h5 className=" mt-2 text-[12px] text-[#a0a1a3]">
              {restaurant?.cuisines?.join(", ")}
            </h5>
            <p className="text-[12px] text-[#a0a1a3]">
              {restaurant.city} {restaurant.areaName} ,{" "}
              {restaurant.sla?.lastMileTravel}
            </p>
          </div>
          <div className="mr-11+11px">
            <div className="mt-3 h-[70px] w-[70px] border border-teal-400 rounded-md shadow-md flex flex-col">
              <div className="flex items-center justify-center">
                <span className="mr-2 ">
                  <AiTwotoneStar color="#26A69A" />
                </span>
                <p className="font-extrabold text-teal-400">
                  {" "}
                  {restaurant.avgRatingString}
                </p>
              </div>
              <div className="h-[1px] w-[80%] bg-gray-300 mx-[5px] mt-1" />
              <p className="text-[11px] font-bold text-gray-500 mt-1 text-center">
                {restaurant.totalRatingsString}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="border-dashed ml-11+11px border mt-6"></div>
      {menuItems.length == 0 ?(
        <div><Shimmer/></div>
      ) : (
      <div>
        <h1 className="ml-11+11px mt-4 font-extrabold text-[20px]">
          Recommended ({menuItems.length})
        </h1>
        {Object.values(menuItems).map((item, index) => {
          return (
            <div key={index} className="">
              <div className="flex mt-4 mb-4">
                <div className="ml-11+11px border-b-[1px] w-[1900px]">
                  <p>
                    {item?.itemAttribute?.vegClassifier == "NONVEG" ? (
                      <BiCaretUpSquare fontSize={20} color="red" />
                    ) : (
                      <LuSquareDot fontSize={20} color="green" />
                    )}
                  </p>
                  <p className="text-[1.15rem] font-medium text-[#3e4152]">
                    {item?.name}
                  </p>
                  <p className="flex items-center text-[14px] text-[#3E4152]">
                    <span>
                      <LiaRupeeSignSolid />
                    </span>
                    {item?.price / 100}
                  </p>
                  <p className="text-[0.8rem] text-[rgba(40,44,63,.45)]">
                    {item?.description}
                  </p>
                </div>
                <div className=" mb-5 flex flex-col items-center mr-11+11px w-[300px]">
                  <img
                    className="h-[96px] w-[118px] rounded-md mb-4 relative"
                    src={`${IMG_CDN}${item?.imageId}`}
                  />

                  {cart.some((p) => p.id == item.id) ? (
                    <button
                      className="px-2 py-[1px] rounded-md z-10 -mt-[20px] font-medium bg-green-300"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      Remove Item
                    </button>
                  ) : (
                    <button
                      className="px-2 py-[1px] rounded-md z-10 -mt-[20px] font-medium bg-green-300"
                      onClick={() => addFoodItem(item)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
