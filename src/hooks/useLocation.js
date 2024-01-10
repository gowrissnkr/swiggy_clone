import { useState, useEffect } from "react"

const useLocation = () => {
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("");

    const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    useEffect(() => {
        fetchLocation()
    }, [])
}

export default useLocation