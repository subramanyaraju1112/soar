// import { useEffect, useState } from "react"
// import url from "../../api/api"

// interface DataType {
//   [key: string]: any
// }

// const Card = () => {
//   const [data, setData] = useState<DataType | null>(null);

//   const fetchData = async () => {
//     await fetch(`${url}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((result: DataType) => {
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("ERROR", error);
//       });
//   };

//   useEffect(() => {
//     fetchData()
//   }, [])

//   console.log("DATA", data)
//   return (
//     <section>Card</section>
//   )
// }

// export default Card

import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="h-full px-4 bg-[#171717] rounded-lg shadow-lg w-full">
      <div className="py-5 text-[#AFAFAF] text-left text-lg font-semibold border-b border-[#2E2E2E]">
        {title}
      </div>
      <div className="py-5 overflow-auto">{children}</div>
    </div>
  );
};

export default Card;