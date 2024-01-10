import useFetchData from "../hooks/useFetchData";
import { CDN_URL } from "../constants/constants";

const Banner = () => {
  const bannerList = useFetchData("topical_banner");

  return (
    <div className="bodyWidth">
      <div>
        <div className="relative mt-[16px]">
          <div className="bg-[rgb(255,255,255)] p-[16px] overflow-hidden">
            <div className="bg-[rgb(255,255,255)] mb-[16px] flex justify-between items-baseline overflow-hidden">
              <div className="">
                <h2 className="m-0 text-[24px] font-[800] leading-[28px] space-[-0.4px] overflow-hidden w-[100%]">
                  Best offers for you
                </h2>
                <div className="text-[16px] font-[200] leading-[19px] space-[-0.3px] text-[rgba(2,6,12,0.92)] overflow-hidden w-[100%]"></div>
              </div>
            </div>
            <div className="mx-[-16px] relative overflow-hidden">
              <div className="pt-[0px] flex overflow-x-scroll overflow-y-hidden scroll">
                {bannerList?.card?.gridElements?.infoWithStyle?.info.map(
                  ({ id, imageId }) => (
                    <div className="pl-[16px]" key={id}>
                      <div>
                        <div className={`block h-[252px] w-[425px]`}>
                          <img
                            className="object-cover"
                            src={CDN_URL + imageId}
                            width="100%"
                            alt="GET 50% OFF ON FIRST ORDER"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
