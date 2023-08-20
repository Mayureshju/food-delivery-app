import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const cartdata = useSelector((store) => store.cart);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between items-center h-[80px] px-6 outline outline-[#b3b1a9]">
      <div className="sm:hidden">
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <Link
        to="/"
        className="hidden sm:flex items-center justify-center flex-shrink-0"
      >
        <div className="w-[132px] h-[36px]">
          <svg
            width="132"
            height="36"
            viewBox="0 0 131 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M67.071 26.9393L64.3573 18.0831L61.6932 26.9393H57.0973L53.002 13.668H57.1289L59.5571 22.8667L62.4273 13.668H66.2857L69.1798 22.9396L71.5837 13.668H75.7102L71.6666 26.9393H67.071Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.5772 12.1433C78.128 12.1433 77.1543 11.1901 77.1543 9.77138C77.1543 8.36782 78.128 7.4248 79.5772 7.4248C81.0185 7.4248 82.0251 8.3899 82.0251 9.77138C82.0251 11.168 81.0185 12.1433 79.5772 12.1433ZM77.5095 26.9392H81.5936V13.6678H77.5095V26.9392Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.7007 16.6857C88.7961 16.6857 87.5655 18.0359 87.5655 20.1256C87.5655 22.1222 88.8254 23.4638 90.7007 23.4638C92.5317 23.4638 93.8107 22.0911 93.8107 20.1256C93.8107 18.1002 92.5317 16.6857 90.7007 16.6857ZM89.7365 33.0805C86.9743 33.0805 84.2236 32.0778 82.8184 30.4505L84.5317 27.4827C85.641 28.8121 87.6184 29.6055 89.4318 29.6055C91.9993 29.6055 93.6583 28.096 93.6583 25.7597V24.9109C92.4367 26.2759 90.7821 26.9599 89.3811 26.9599C85.8525 26.9599 83.4816 24.2134 83.4816 20.1258C83.4816 16.0354 85.8117 13.2871 89.2797 13.2871C90.8194 13.2871 92.506 14.0258 93.6837 15.6121L93.6835 13.6677H97.7424V25.8613C97.7424 30.2468 94.6 33.0805 89.7365 33.0805Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M106.715 16.6857C104.81 16.6857 103.579 18.0359 103.579 20.1256C103.579 22.1222 104.839 23.4638 106.715 23.4638C108.546 23.4638 109.824 22.0911 109.824 20.1256C109.824 18.1002 108.546 16.6857 106.715 16.6857ZM105.75 33.0805C102.988 33.0805 100.237 32.0778 98.832 30.4505L100.545 27.4827C101.655 28.8121 103.632 29.6055 105.445 29.6055C108.013 29.6055 109.672 28.096 109.672 25.7597V24.9109C108.45 26.2759 106.796 26.9599 105.395 26.9599C101.866 26.9599 99.4951 24.2134 99.4951 20.1258C99.4951 16.0354 101.825 13.2871 105.293 13.2871C106.833 13.2871 108.52 14.0258 109.697 15.6121L109.697 13.6677H113.756V25.8613C113.756 30.2468 110.614 33.0805 105.75 33.0805Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M126.793 13.668L122.902 21.6187L119.335 13.668H115.016L120.825 25.8609L117.565 32.5231H121.772L131 13.668H126.793Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6591 15.9547L44.1216 15.4724C42.3326 15.1295 41.5693 14.5479 41.5693 13.5278C41.5693 12.29 42.6763 11.4583 44.3239 11.4583C46.9043 11.4583 47.6492 13.9016 47.7222 14.1653L51.3501 12.2362C50.4284 9.54529 47.7241 7.95801 44.3747 7.95801C40.2569 7.95801 37.1044 10.222 37.1044 13.9591C37.1044 16.8737 38.8848 18.5203 42.8765 19.2979L45.3857 19.7795C47.9216 20.3294 48.2711 21.0883 48.2711 21.8265C48.2711 23.1495 46.9089 24.0736 44.9583 24.0736C41.4652 24.0736 40.4471 20.9606 40.3322 20.5668L36.6719 22.5132C37.5636 25.6653 40.7186 27.5737 44.806 27.5737C47.1139 27.5737 49.0815 26.9979 50.4962 25.9082C51.9449 24.7923 52.7107 23.2141 52.7107 21.3442C52.7107 18.3639 50.7887 16.6516 46.6591 15.9547Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
            <g filter="url(#filter0_b_2008_54209)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.4781 17.1505C23.6424 16.1846 23.4499 15.4451 22.9531 15.0589C22.2073 14.4797 21.0823 14.1639 18.4143 14.1731C16.4405 14.178 14.3214 14.1877 13.4162 14.1921C13.3321 14.178 13.0272 14.0745 13.0131 13.7023L12.9801 7.79516C12.9801 7.42298 13.2708 7.11689 13.6369 7.11689C14.0025 7.11689 14.2976 7.41812 14.2976 7.7903C14.2976 7.7903 14.3165 10.9985 14.3214 12.1383C14.3214 12.2467 14.387 12.5056 14.6306 12.5717C16.2247 13.0003 24.2798 12.6568 24.1485 11.1583C23.4455 4.94506 18.302 0.14517 12.0753 0.164118C10.1157 0.168491 8.25879 0.653873 6.61773 1.50657C2.69334 3.59337 -0.0870301 7.78593 0.00208205 12.6237C0.0629973 16.0481 2.29012 22.1346 3.64047 23.0339C4.26406 23.4488 5.07987 23.2934 8.74169 23.2793C10.4015 23.2744 11.9489 23.2744 12.7083 23.2744C12.7881 23.2885 13.2008 23.3876 13.2052 23.7739L13.2285 28.2628C13.2285 28.635 12.9383 28.9411 12.5722 28.9411C12.2066 28.9411 11.911 28.6447 11.911 28.2677C11.911 28.2677 11.9392 26.4637 11.9349 25.7946C11.9349 25.6391 11.9441 25.3705 11.4988 25.1727C10.0403 24.5134 5.30491 24.9278 5.04234 25.6625C4.9439 25.9452 5.47371 27.0336 6.29424 28.4324C9.02327 32.8135 11.7 36.2286 12.1317 36.7752C12.1599 36.7985 12.1833 36.8224 12.2066 36.8364C12.5678 36.3933 22.0104 25.7334 23.4781 17.1505Z"
                fill="#F15700"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_b_2008_54209"
                x="-11.6247"
                y="-11.4607"
                width="47.3998"
                height="59.9223"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="5.81236"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2008_54209"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2008_54209"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="nav-items hidden sm:block">
        <ul className="flex gap-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FaCartArrowDown
                className="relative"
                color="#fc8019"
                fontSize={22}
              />{" "}
              {cartdata.length > 0 ? (
                <div className="ml-[15px] absolute top-9 ">
                  <span className=" bg-green-300 p-[2px] rounded-full text-[12px] font-medium tracking-wider		">
                    {cartdata.length}
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>

<div className="flex justify-start">
<div className={`nav-items ml-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FaCartArrowDown
                className="relative"
                color="#fc8019"
                fontSize={22}
              />{" "}
              {cartdata.length > 0 ? (
                <div className="ml-[15px] absolute top-9 ">
                  <span className=" bg-green-300 p-[2px] rounded-full text-[12px] font-medium tracking-wider		">
                    {cartdata.length}
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
</div>
      

      <div className="mr-2">
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
