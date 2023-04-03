import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex-grow items-center bg-blue-400 w-auto">
      <div class='inline-block justify-center items-center md:m-10 p-10'>
        <h1 class=" font-extrabold text-5xl md:text-9xl my-4 md:m-4">QuizUp</h1>
        <p class='md:text-3xl text-xl mx-auto my-auto md:m-5'>Practice questions and be graded in the comfort of your bed</p>
        
        <button class='bg-black hover:bg-blue-600 hover:duration-300 p-4 m-5 font-bold items-center rounded-full'>
          <Link href="/courses">
          Get Started
          </Link>
        </button>
      
      </div>
    </div>
  );
};

export default Hero;
