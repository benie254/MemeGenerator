import { useState } from "react";
import Boxes from "../data/Boxes";

interface BoxProps {
    boxId: number;
    boxOn: boolean;
    handleClick: (id: number) => void;
}

export default function Box({boxId, boxOn, handleClick}: BoxProps) {
    return (
        <>
            <div>
                <div 
                    style={{
                        backgroundColor: boxOn ? '#222222' : 'transparent'
                    }} 
                    className="boxes" 
                    key={boxId}
                    onClick={() => handleClick(boxId)}
                >
                </div> 
                <button>Click</button>
                <br />
            </div>
        </>
    )
}