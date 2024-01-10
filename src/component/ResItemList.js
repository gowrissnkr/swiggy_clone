import { useState } from "react";
import ResItemCard from "./ResItemCard";

const ResItemList = ({ data }) => {
    const [showList, setShowList] = useState(false);
    const { itemCards, title } = data?.card?.card
    return (
        <>
            <div className="relative">
                <div className="relative m-[24px_8px_16px_16px]">
                    <button className="w-[100%] flex justify-between mb-[24px] pr-[16px] text-[1.15rem]" onClick={() => setShowList(!showList)}>
                        <h3 className="text-[#3e4152] font-[800] text-[1.3rem] inline-block">
                            <span>{title} ({itemCards.length})</span>
                        </h3>
                        {!showList ? <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span> : <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        </span>}
                    </button>
                    <div>
                        <div>
                            <ResItemCard items={itemCards} key={itemCards?.card?.info?.id} showList={showList} />
                        </div>
                    </div>
                    <div className="h-[16px] border-b-[16px] border-solid border-b-[#f1f1f1]"></div>
                </div>
                
            </div>
            
        </>
    )
}

export default ResItemList;