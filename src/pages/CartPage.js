import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  removeItemFromCart,
} from "../features/dataSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.data.cartItem);

  const totalAmount = cartItems.reduce((total, item) => {
      return total + (item.itemQuantity * (item.card?.info?.price / 100))
    }, 0);

    console.log(totalAmount)

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center pt-[20px] max-w-lg mx-auto">
      <div className="w-[271px] h-[256px] bg-cover mx-auto bg-no-repeat bg-[url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0')]"></div>
      <h2 className="text-xl font-bold mb-2 mt-10">Your cart is empty</h2>
      <p className="text-sm font-light mb-8">
        You can go to home page to view more restaurants
      </p>

      <button
        className="py-3 px-6 uppercase font-semibold text-white bg-[#fc8019]"
        onClick={() => navigate("/")}
      >
        See Restaurants near you
      </button>
    </div>
  ) : (
    <div className="bg-[#e9ecee] pt-[20px] flex justify-center">
      <div className="w-6/12 bg-white mt-8 m-10 py-5 px-10 min-h-[550px] self-start">
        <h2 className="font-bold text-xl uppercase mt-2 mb-4 text-left">
          Secure Checkout
        </h2>
        <button
          className="text-white bg-red-500 rounded-md p-2 mb-4"
          onClick={() => {
            dispatch(removeItemFromCart());
          }}
        >
          Clear Cart
        </button>

        <div className="mt-6">
          <div className="items mt-6 max-h-[350px] overflow-y-auto">
            {cartItems?.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex items-center py-2.5"
              >
                <div className="font-normal text-[#282c3f] text-[14px] text-ellipsis w-56 truncate">
                  {item?.card?.info?.name}
                </div>
                <div className="flex items-center ml-4">
                  <div className="flex border items-center justify-center w-[70px] text-sm h-8 border-[#d4d5d9]">
                    <span
                      className="block text-center font-medium w-1/3 text-base cursor-pointer text-[#9a9ca3]"
                      onClick={() =>
                        dispatch(decreaseItem(item?.card?.info?.id))
                      }
                    >
                      -
                    </span>
                    <span className="block text-center font-medium w-1/3 text-[#60b246] ">
                      {item?.itemQuantity}
                    </span>
                    <span
                      className="block text-center font-medium w-1/3 text-[#60b246] cursor-pointer text-base"
                      onClick={() =>
                        dispatch(increaseItem(item?.card?.info?.id))
                      }
                    >
                      +
                    </span>
                  </div>
                  <div className="ml-5 text-[13px] text-[#606375] text-right w-[60px]">
                    ₹
                    {parseFloat(
                      (
                        item?.itemQuantity *
                        (item?.card?.info?.price / 100)
                      ).toFixed(2)
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-3/12 bg-white self-start min-h-[400px] mt-8 ml-0 mr-10 pt-5 px-8  ">
        <div className="pb-5 border-b-2 border-[#282c3f]">
          <div className="text-[#282c3f] font-medium">Bill Details</div>
          <div className="flex items-center text-[13px] font-light my-2.5">
            <div className="">Item Total</div>
            <div className="flex-1 text-right">₹{totalAmount}</div>
          </div>
          <div className="flex items-center text-[13px] font-light my-2.5">
            <div className="">Delivery partner fee</div>
            <div className="flex-1 text-right">₹{19}</div>
          </div>
          <hr className="my-5 block" />
          <div className="flex items-center text-[13px] font-light my-2.5">
            <div className="">Platform fee</div>
            <div className="flex-1 text-right">₹{2}</div>
          </div>
          <div className="flex items-center text-[13px] font-light my-2.5">
            <div className="">GST & Restaurant Charges</div>
            <div className="flex-1 text-right">₹{32}</div>
          </div>
        </div>
        <div className="flex items-center pt-6 text-[#282c3f] font-semibold">
          <div className="uppercase">To Pay</div>
          <div className="flex-1 text-right">₹{totalAmount + 19 + 2 + 32}</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
