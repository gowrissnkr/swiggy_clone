import { useSelector } from "react-redux"

export const fetchData = async (fileterId) => {

    const bannerList = await useSelector((state) => state?.data?.restaurantData[0]);
    const filterItems = await bannerList?.cards?.filter((item) => item.card.card.id === fileterId);
    return filterItems
}