import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import { addToCart } from "../features/dataSlice";

const ResItemCard = ({ items, showList }) => {
  const { singleRestaurantDetails, cartItems } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  };

  return (
    <>
      {showList &&
        items.map((item) => (
          <div className="mb-[30px]" key={item.card.info.id}>
            <div className="items-start flex justify-between">
              <div className="max-w-[calc(100%-144px)]">
                <div className="mt-[4px]">
                  <h3 className="mr-[4px] text-[1.22rem] font-[500] text-[#3e4152] break-words">
                    {item?.card?.info?.name}
                  </h3>
                </div>
                <div className="mt-[4px]">
                  <span className="text-[1rem] mr-[8px] font-[400] text-[#3e4152]">
                    ₹{item?.card?.info?.price / 100}
                  </span>
                </div>
                <div className="mt-[14px] leading-[1.3] text-[rgba(40,44,63,.45)] tracking-[-.3px] text-[14px]">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="relative ml-[16px] min-w-[118px] h-[120px]">
                {item?.card?.info?.imageId && (
                  <div>
                    <button className="w-[118px] h-[96px] object-cover rounded-[6px] bg-[rgb(251_238_215)]">
                      {item?.card?.info?.nextAvailableAtMessage ? (
                        <img
                          alt={item?.card?.info?.name}
                          className="w-[118px] h-[96px] object-cover rounded-[6px] grayscale styles_itemImage__3CsDL"
                          loading="lazy"
                          width="256"
                          src={CDN_URL + item?.card?.info?.imageId}
                        />
                      ) : (
                        <img
                          alt={item?.card?.info?.name}
                          className="w-[118px] h-[96px] object-cover rounded-[6px] styles_itemImage__3CsDL"
                          loading="lazy"
                          width="256"
                          src={CDN_URL + item?.card?.info?.imageId}
                        />
                      )}
                    </button>{" "}
                  </div>
                )}

                <div className="absolute left-[50%] bottom-[8px] translate-x-[-50%] z-1">
                  {item?.card?.info?.nextAvailableAtMessage ? (
                    <div className="w-[96px!important] h-[36px!important] absolute bottom-[8px] min-h-[36px] left-[50%] translate-x-[-50%] shadow-[0_3px_8px_#e9e9eb] rounded-[4px] inline-block border-[1px_solid_#d4d5d9] text-[.9rem] text-center bg-[#fff]">
                      <div className="text-[.78rem] w-[100%] cursor-pointer">
                        {item?.card?.info?.nextAvailableAtMessage}
                      </div>
                    </div>
                  ) : (
                    <div className="w-[96px!important] h-[36px!important] absolute bottom-[8px] min-h-[36px] left-[50%] translate-x-[-50%] shadow-[0_3px_8px_#e9e9eb] rounded-[4px] inline-block border-[1px_solid_#d4d5d9] text-[.9rem] font-[600] leading-[30px] text-center bg-[#fff]">
                      <div
                        className="text-[#60b246] w-[100%] cursor-pointer"
                        onClick={() => {
                          addItemToCart(item);
                        }}
                      >
                        ADD
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-[6px] border-b-[0.5px] border-solid border-[#d3d3d3] h-[0.5px] m-[20px_0]"></div>
          </div>
        ))}
    </>
  );
};

export default ResItemCard;
