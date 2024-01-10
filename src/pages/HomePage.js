import { useSelector } from "react-redux";
import Banner from "../component/Banner";
import { LoadingSlider } from "../component/Loading";
import useResturantData from "../hooks/useResturantData";
import FoodCategories from "../component/FoodCategories";
import Restaurants from "../component/Restruants";


const HomePage = () => {
    useResturantData();
    const bannerDetails = useSelector((state) => state.data?.restaurantData[0])

    return (
        <>
            <div className="flex-grow-1">
                <div className="h-[100%]">
                    <div className="">
                        {(!bannerDetails) ? <LoadingSlider /> :
                            <main className="flex w-[100%] h-[100%] flex-col bg-[rgb(255,255,255)] ">
                                <Banner />
                                <FoodCategories />
                                <Restaurants />
                            </main>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;