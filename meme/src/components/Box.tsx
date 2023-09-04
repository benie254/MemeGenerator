import { useState } from "react";
import Boxes from "../data/Boxes";

interface BoxProps {
    boxId: number;
    boxOn: boolean;
}

export default function Box({boxId, boxOn}: BoxProps) {
    const [on, setOn] = useState<boolean>(boxOn);

    function boxClicked() {
        setOn(prevOn => !prevOn);
      }
    return (
        <>
            <div>
                <div 
                    style={{
                        backgroundColor: on ? '#222222' : 'transparent'
                    }} 
                    className="boxes" key={boxId}
                    onClick={boxClicked}
                >
                </div> 
                <br />
            </div>
        </>
    )
}