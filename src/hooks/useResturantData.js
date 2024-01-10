import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addRestaurantData } from "../features/dataSlice"
import { WEB_API } from "../constants/constants"


const useResturantData = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await fetch(WEB_API)
        const data = await response.json()
        dispatch(addRestaurantData(data.data))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useResturantData;