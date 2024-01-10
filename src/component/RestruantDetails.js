import { useParams } from "react-router";
import useGetResturantDetails from "../hooks/useGetResturantDetails";
import { Link } from "react-router-dom";
import ResItemList from "./ResItemList";


function RestruantDetails() {
  const { id } = useParams();
  const resInfo = useGetResturantDetails(id);

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const data = resInfo?.data?.cards[0]?.card?.card?.info
  return (
    <div className="grow">
      <div>
        <div className="max-w-[800px] mt-[20px] mx-auto relative">
          <div className="max-w-[700px] min-w-[700px] z-[7] h-[30px] text-[10px] text-[#93959f] flex relative mx-auto">
            <span>
              <Link to={"/"} className="my-0 mx-[5px] text-inherit">
                <span className="hover:text-[#fc8019] ">Home</span>
              </Link>
            </span>
            <span className="_1yRfx">{"-- "} </span>
            <span className="kpkwa pl-[5px]">{data?.name}</span>
          </div>
          <div>
            <div className="mx-[20px]">
              <div className="pt-[16px] mb-[18px]">
                <div className="inline-block mr-[16px] w-[calc(100% - 120px)]">
                  <div>
                    <p className="text-[1.43rem] font-[600] text-[#282c3f] mb-[8px] uppercase">
                      {data?.name}
                    </p>
                    <p className="text-[.93rem] text-[#7e808c] h-[calc(0.93rem + 2px)] overflow-hidden text-ellipsis mb-[4px] whitespace-nowrap">
                      {data?.cuisines.join(", ")}
                    </p>
                  </div>
                </div>
                <button className="border border-solid border-[#e9e9eb] shadow-[0_1px_5px_#f9f9f9] rounded-[6px] text-center p-[8px] max-w-[100px] float-right">
                  <span className="text-[#3d9b6d] pb-[10px] border-b border-solid border-b-[#e9e9eb] font-[700] mb-[8px] block">
                    <span>⭐</span>
                    <span>{data?.avgRating}</span>
                  </span>
                  <span className="text-[11px] font-[600]">
                    {data?.totalRatingsString}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <hr className="border-b border-dashed border-[#d3d3d3]" />
          <div className="my-[18px]">
            <ul className="text-[#3e4152] text-[15px] font-[700]">
              <li className="mr-[24px] inline-block">
                <span>{data?.sla?.slaString}</span>
              </li>
              <li className="inline-block">
                <span>{data?.costForTwoMessage}</span>
              </li>
            </ul>
          </div>
          {categories?.map((data) => (
            <ResItemList data={data} key={data?.card?.card.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestruantDetails;
