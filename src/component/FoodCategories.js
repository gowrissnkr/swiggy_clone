import { CDN_URL, LOADER_IMAGE_URL } from "../constants/constants"
import useFetchData from "../hooks/useFetchData"

const FoodCategories = () => {
    const foodCategoryMap = useFetchData("whats_on_your_mind")
    return (
        <div className="bodyWidth">
            <div>
                <div className="relative mt-[16px]">
                    <div className="bg-[rgb(255,255,255)] p-[16px] overflow-hidden">
                        <div className="bg-[rgb(255,255,255)] mb-[16px] flex justify-between overflow-hidden">
                            <div className="">
                                <h2 className="m-0 text-[24px] font-[800] leading-[28px] space-[-0.4px] overflow-hidden w-[100%]">
                                    Best offers for you
                                </h2>
                            </div>
                        </div>
                        <div className="px-[16px] relative overflow-y-hidden">
                            <div className="">
                                <div className="pt-[0px] flex overflow-x-scroll overflow-y-hidden scroll">
                                    <div className="flex">
                                        {foodCategoryMap?.card?.gridElements?.infoWithStyle?.info.map(({ id, imageId }) => (
                                            <div className="block h-[180px] w-[140px]" key={id}>
                                                <img
                                                    className="object-cover"
                                                    src={LOADER_IMAGE_URL+imageId}
                                                    width={"100%"}
                                                    alt="GET 50% OFF ON FIRST ORDER"
                                                />
                                            </div>
                                        ))}                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCategories