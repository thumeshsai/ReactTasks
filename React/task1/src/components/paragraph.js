
import { useState } from "react";

const Paragraphcount = () => {
    const [count, setCount] = useState(0);

    const handleclickchange =(event)=>
    { const text=event.target.value;

        const words = text.trim().split(/\s+/);
        setCount(words.length);

    };


    return (
        <>
            <h1 className="text-center font-normal text-2xl m-2">
                Responsive Paragraph word counter

            </h1>
            <textarea onChange={handleclickchange} className="w-full border-2 mt-3 h-28" style={{ minHeight: '200px', width:'100%' }}>

            </textarea>

            <p>Word count :{count}</p>
        </>

    );
};
export default Paragraphcount;