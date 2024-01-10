import { Link } from "react-router-dom";
import { CDN_URL } from "../constants/constants";

const RestruantCard = ({ restaurants }) => {
  const { info } = restaurants;
  return (
    <div className="w-[100%] px-[16px]">
      <div>
        <Link
          to={
            "/restruants/" +
            info.name.replace(/[^a-zA-Z0-9']+/g, "-").toLowerCase() +
            "/" +
            info.areaName +
            "/" +
            info.id
          }
          className="text-inherit outline-0 cursor-pointer block w-[19.5rem] h-auto"
        >
          <div className="grid cursor-pointer gap-[12px] grid-flow-row justify-stretch items-center p-0">
            <div className="relative cZZEwO">
              <div className="absolute top-0 left-0 w-[100%] h-[100%]">
                <div className="w-[100%] relative h-[100%] rounded-[16px] overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src={CDN_URL+info?.cloudinaryImageId}
                    alt={info?.name}
                  />

                  <div className="absolute bottom-0 right-0 left-0 grid content-end text-left px-[12px] pb-[8px]  offers text-white">
                    <div className="uppercase">
                      <div className="offer_text">
                      {info?.aggregatedDiscountInfoV3?.header
                        ? info.aggregatedDiscountInfoV3.header +
                          " " +
                          info?.aggregatedDiscountInfoV3.subHeader
                        : ""}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[12px]">
              <div>
                <div className="m-0 text-[18px] font-[700] leading-[24px] tracking-[-0.3px] text-[rgba(2,6,12,0.75)] overflow-hidden w-[100%] break-words line-clamp-1">
                  {info.name}
                </div>
              </div>
              <div className="grid items-center mt-[2px] gap-[2px] grid-flow-col justify-start">
                <div className="mt-[-4px]">
                  <span className="text-[16px] font-[400] leading-[19px] tracking-[-0.3px] text-[rgba(2,6,12,0.75)] ">
                    ⭐ {info.avgRating}
                  </span>
                </div>
              </div>
              <div className="grid items-center mt-[2px] gap-[2px]">
                <div className="text-[16px] font-[200] leading-[19px] tracking-[-0.3px] w-[100%] break-words text-[rgba(2,6,12,0.75)] overflow-hidden block whitespace-nowrap text-ellipsis">
                  {info.cuisines.join(", ")}
                </div>
                <div className="text-[16px] font-[200] leading-[19px] tracking-[-0.3px] w-[100%] break-words text-[rgba(2,6,12,0.75)] overflow-hidden">
                  {info.areaName}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestruantCard;
