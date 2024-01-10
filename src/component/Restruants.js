import { useSelector } from "react-redux";
import RestruantCard from "./RestruantCard";
import { useState } from "react";

const Restaurants = () => {
  const { restaurantData } = useSelector((store) => store.data);
  const [filterRestrauant, setFilterRestraunt] = useState([]);
  const { restaurants } =
    restaurantData[0]?.cards[5]?.card?.card?.gridElements?.infoWithStyle;


  const handleClick = (option) => {
    const filterItems = restaurants.filter((item) => {
      switch (option) {
        case "Ratings 4.0+":
          return item.info.avgRating > 4.0;
        case "Fast delivery":
            console.log(item.info.sla.deliveryTime )
          return item.info.sla.deliveryTime < 25;
        case "Clear Filters":
            console.log(restaurants)
            return restaurants
        default:
          return true;
      }
    });
    setFilterRestraunt((prevState) => (prevState = filterItems));
    console.log(filterItems)
  };

  const resturant = filterRestrauant.length > 0 ? filterRestrauant : restaurants

  return (
    <>
      <div className="container-grid-filter-sort">
        <hr className="border-b border-solid border-[#d3d3d3]" />
        <div>
          <h2 className="m-0 mt-[20px] text-[24px] font-[800] leading-[28px] space-[-0.4px] overflow-hidden w-[100%]">
            Restaurants with online food delivery in Coimbatore
          </h2>
          <div></div>
        </div>
      </div>
      <div className="container-grid-filter-sort mt-[10px]">
        <div>
          <div class="sc-kbousE h-[44px] w-[100%]">
            <div class="sc-dBmzty flex items-center h-[44px] w-[100%] cursor-pointer bg-[rgba(255_255_255)] overflow-hidden">
              <div class="sc-bDumWk mr-[8px] whitespace-nowrap">
                <div class="sc-dkmUuB border rounded-[18px] bg-[rgba(255_255_255)] py-[9px] px-[14px] inline-grid w-max grid-flow-col gap-[8px] shadow-[rgba(2_6_12_0.04)_0px_2px] transition-[all_100ms_ease-in_0s]">
                  <div class="sc-aXZVg font-[600] text-[14px] leading-[18px] text-[rgba(2_6_12_0.75)]">
                    Filter
                  </div>
                </div>
              </div>
              <div class="sc-bDumWk mr-[8px] whitespace-nowrap">
                <div class="sc-dkmUuB border rounded-[18px] bg-[rgba(255_255_255)] py-[9px] px-[14px] inline-grid w-max grid-flow-col gap-[8px] shadow-[rgba(2_6_12_0.04)_0px_2px] transition-[all_100ms_ease-in_0s]">
                  <button
                    class="sc-aXZVg font-[600] text-[14px] leading-[18px] text-[rgba(2_6_12_0.75)]"
                    onClick={() => {
                      handleClick("Fast delivery");
                    }}
                  >
                    Fast delivery
                  </button>
                </div>
              </div>
              <div class="sc-bDumWk mr-[8px] whitespace-nowrap">
                <div class="sc-dkmUuB border rounded-[18px] bg-[rgba(255_255_255)] py-[9px] px-[14px] inline-grid w-max grid-flow-col gap-[8px] shadow-[rgba(2_6_12_0.04)_0px_2px] transition-[all_100ms_ease-in_0s]">
                  <button
                    class="sc-aXZVg font-[600] text-[14px] leading-[18px] text-[rgba(2_6_12_0.75)]"
                    onClick={() => {
                      handleClick("Ratings 4.0+");
                    }}
                  >
                    Ratings 4.0+
                  </button>
                </div>
              </div>
              <div class="sc-bDumWk mr-[8px] whitespace-nowrap">
                <div class="sc-dkmUuB border rounded-[18px] bg-[rgba(255_255_255)] py-[9px] px-[14px] inline-grid w-max grid-flow-col gap-[8px] shadow-[rgba(2_6_12_0.04)_0px_2px] transition-[all_100ms_ease-in_0s]">
                  <button
                    class="sc-aXZVg font-[600] text-[14px] leading-[18px] text-[rgba(2_6_12_0.75)]"
                    onClick={() => {
                      handleClick("Clear Filters");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="h-[16px]"></div>
      <div className="m-0 container-grid-filter">
        <div>
          <div className="p-0 list-none grid grid-cols-3 gap-[32px] my-[32px] mx-[16px]">
            {resturant?.map((restraunt) => (
              <RestruantCard restaurants={restraunt} key={restraunt.info.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;
