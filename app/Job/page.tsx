"use client";
import JobCard from "@/components/Folder Components/JobCard/JobCard";
import SearchBar from "@/components/Search/SearchBar";
import SwitchBtn from "@/components/switch/switchBtn";
import React from "react";

const JobPage = () => {
  let x: number = 0;
  return (
    <div className=" h-[100vh] ">
      <div className=" mx-[15%]  pt-[60px]">
        <SearchBar></SearchBar>
      </div>
      <div>
        <SwitchBtn></SwitchBtn>
      </div>
      <div className="text-center mt-[50px] mx-[12%] gap-[50px]  grid grid-cols-3 ">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobPage;
