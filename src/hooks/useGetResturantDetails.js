import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MENU_API } from "../constants/constants";
import { addSingleRestaurantDetails } from "../features/dataSlice";

const useGetResturantDetails = (id) => {
  const [resInfo, setResInfo] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(MENU_API + id);
    const data = await response.json();
    setResInfo(data);
    dispatch(
      addSingleRestaurantDetails(
        resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) =>
            card.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useGetResturantDetails;
