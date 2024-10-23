"use client";
import JobCard from "@/components/Folder Components/JobCard/JobCard";
import SearchBar from "@/components/Search/SearchBar";
import SearchInput from "@/components/SearchInput/SearchInput";
import SwitchBtn from "@/components/switch/switchBtn";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import React from "react";
import { FcSearch } from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";

function ResuitmentPage() {
  let Hd = `Mỗi mô tả cần bắt đầu bằng dấu "-"
  - Mô tả 1
  - Mô tả 2
  `;
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const Body = () => {
    return (
      <div className="mx-[18%] mt-20 px-14 py-10  bg-white">
        <div className=" text-xl">Tiêu đề</div>
        <textarea
          placeholder="Nhập tiêu đề của bài tuyển dụng"
          className="mt-3 flex min-h-[20px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />

        <div className="mt-5 text-xl">Mô tả công việc</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Địa điểm</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Yêu cầu ứng viên</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Lương</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Quyền lợi</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />

        <div className="mt-5 text-xl">Thời gian làm việc</div>
        <textarea
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />

        <div className="mt-5 text-xl">
          Thời gian dự kiến kết thúc tuyển dụng:{" "}
          <input
            type="date"
            name="date"
            id=""
            className="border-2 rounded-sm px-2 ml-2"
          />
        </div>
        <button className="bg-[#00b14f] mt-10 rounded-[7px] p-[7px] font-semibold text-white hover:bg-green-600">
          Tạo bài tuyển dụng
        </button>
      </div>
    );
  };
  return (
    <div className="bg-[#f4f5f5] pt-10 pb-20">
      <SearchInput></SearchInput>
      <Body></Body>
      <div className="mt-[20px] "></div>
    </div>
  );
}

export default ResuitmentPage;
