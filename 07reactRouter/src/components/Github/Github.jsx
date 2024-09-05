import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // using loader to show data
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/shubhdeep123")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

const data = useLoaderData()
  return (
    <div className="text-center bg-gray-800 m-4 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture"/>
    </div>
  );
}


export default Github;