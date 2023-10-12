import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const handleTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    setCount(words.length);
  };
  return (
    <>
      <p className=" text-center font-normal text-2xl m-2">
        Responsive Paragraph Word Counter
      </p>
      <textarea
        onChange={handleTextareaChange}
        className="w-full border-2 mt-3  h-28"
      ></textarea>
      <p>word count : {count}</p>
    </>
  );
};

export default Card;
