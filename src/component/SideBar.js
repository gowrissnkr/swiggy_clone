import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMyLocation } from "react-icons/md";
import { debounceFun } from "../utils/debounce";
import useLocation from "../hooks/useLocation";

const SideBar = ({ show, onClose }) => {

    const [showCancel, setShowCancel] = useState(false)
    const [searchinputValue, setSearchInputValue] = useState("")

    const handledebounce = useRef(debounceFun((value) => {
        setSearchInputValue(value)
        setShowCancel(true)
    }, 100))

    const handleChange = (event) => {
        const { value } = event.target
        handledebounce.current(value)
    }

    const cancelSearch = () => {
        setSearchInputValue("")
        setShowCancel(false)
    }

    return (
        <div className={`fixed top-0 left-0 right-auto h-full overflow-y-scroll bg-white z-[10001] 
            transition-transform ${show ? 'translate-x-0' : 'translate-x-[-100%]'} duration-[0.3s] ease-out`}>
            <div className="relative h-screen">
                <div className="w-[390px] flex items-end flex-col lg:block lg:w-[537px] pr-[40px] lg:pl-[135px]">
                    <div className="mb-[30px] pt-[32px] flex justify-start">
                        <RxCross2 onClick={onClose} size={24} color="#3d4152" className="cursor-pointer" />
                    </div>
                    <div className="relative pb-[20px]">
                        <div className="block relative border border-[#d4d5d9]">
                            <input
                                type="text"
                                name="search-location"
                                placeholder="Search for area, street name..."
                                maxLength={30}
                                className="w-full h-[50px] pr-[72px] pl-5 outline-0 border-0 
                                    overflow-hidden text-ellipsis whitespace-nowrap font-medium"
                                onChange={handleChange}
                                value={searchinputValue}
                            />
                            {showCancel && searchinputValue && <button
                                className="absolute right-3.5 top-3.5 cursor-pointer text-[#fc8019] text-sm font-normal"
                                onClick={cancelSearch}
                            >
                                Cancel
                            </button>}
                        </div>
                        <div className="border mt-5 border-[#d4d5d9]" >
                            <div className="relative cursor-pointer">
                                <div className="table table-fixed px-6 py-5">
                                    <div className=" table-cell w-8 text-left text-lg text-[#535665] pt-[4px] pl-1">
                                        <MdOutlineMyLocation size={20} />
                                    </div>
                                    <div className="table-cell align-middle">
                                        <div className="text-base text-[#282c3f] font-medium">
                                            Get Current Location
                                        </div>
                                        <div className="pt-1 text-[13px] leading-[1.3] text-[#93959f]">Using GPS</div>
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

export default SideBar;