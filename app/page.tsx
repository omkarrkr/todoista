"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState as usestate } from "react";
import link from "next/link";
interface CardInterface {
  userId: number;
  id: number;
  title: string;
  body: string

}

export default function Home() {
  const [text, setText] = usestate("");
  const [gotData, setGotData] = usestate([]);

  useEffect(() => {
  const fetchInfo=async()=>{
    const Response= await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= await Response.json();
    setGotData(data);
  };

  fetchInfo();
},[]);


      
  const submitbtn=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(text);
    alert(`The animal you entered was: ${text}`);
  }

  return (
      <div className="p-10">
      <h1 className="text-6xl justify-center text-green-400 font-black capitalize bg-slate-800/90  text-right py-20">
        this is the h1 tag
      </h1>
      <p className="text-xl text-justify mt-10 mb-10 text-shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id,
        modi dolore veniam commodi ut veritatis voluptatem illum nihil inventore
        explicabo laudantium fugiat, ratione ducimus, velit culpa dignissimos
        repellendus. Sequi! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Reiciendis iure, dignissimos eum quo facilis, quas facere
        molestiae ex itaque esse vero accusamus necessitatibus, eveniet nostrum?
        Tenetur recusandae odit vitae sequi?
      </p>
    
    <form
        onSubmit={submitbtn}
        className="mb-10 flex flex-col items-center bg-slate-400 p-4"
      >
        <input
          className="text-white bg-black w-full p-4 text-xl placeholder:text-green-400"
          type="text"
          placeholder="What is your fav animal?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-yellow-500 px-4 py-2 text-2xl rounded-2xl mt-4 w-max">
          Submit
        </button>
      </form>
    
    <div className="flex flex-col">
        <Link
          target="_blank"
          className="px-4 py-2 bg-blue-400 text-2xl rounded-2xl w-max hover:bg-green-500 transition duration-300"
          href="http://localhost:3001/aboutme"
        >
          Goto About us
        </Link>
      </div>

      <h1 className="text-4xl text-center font-bold mt-10">
        Fetched data from the internet
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {gotData.map((data: CardInterface, idx) => (
          <div
          key={data.id}
            className={"bg-red-500 px-4 py-2 rounded-xl"}
          >
            <h1 className="text-5xl text-center">Card Count:{idx + 1}</h1>
            <h1 className="text-xl font-semibold mt-2 text-gray-800 text-center">
              {data.title}
            </h1>
            <h1 className="font-semibold mt-2 text-gray-800 text-center">
              {data.body}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
