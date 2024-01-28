import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchData = (props) => {
  const bannerDetails = useSelector((state) => state.data?.restaurantData[0]);
  const [data, setData] = useState([]);

  const fetchData = () => {
    const filterData = bannerDetails?.cards.filter((item) => {
      return item.card.card.id === props;
    });

    if (fetchData) {
      setData(filterData[0]?.card);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchData;
