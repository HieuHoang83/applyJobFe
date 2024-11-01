"use client";
import JobCard from "@/components/Folder Components/JobCard/JobCard";
import SearchBar from "@/components/Search/SearchBar";
import SearchInput from "@/components/SearchInput/SearchInput";
import SwitchBtn from "@/components/switch/switchBtn";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";
import { FcSearch } from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";

let dtoBđ = {
  title: "",
  description: "",
  address: "",
  require: "",
  salary: "",
  offer: "",
  timeWork: "",
  start: "",
  end: "",
};

function ResuitmentPage() {
  let Hd = `Mỗi mô tả cần bắt đầu bằng dấu "-"
  - Mô tả 1
  - Mô tả 2
  `;
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptitonRef = useRef<HTMLTextAreaElement>(null);
  const addresssRef = useRef<HTMLTextAreaElement>(null);
  const requireRef = useRef<HTMLTextAreaElement>(null);
  const salaryRef = useRef<HTMLTextAreaElement>(null);
  const offerRef = useRef<HTMLTextAreaElement>(null);
  const timeWorkRef = useRef<HTMLTextAreaElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  const [err, setErr] = React.useState<string>("sss");
  let handleCreated = () => {
    if (
      titleRef.current?.value.length == 0 ||
      descriptitonRef.current?.value.length == 0 ||
      addresssRef.current?.value.length == 0 ||
      requireRef.current?.value.length == 0 ||
      salaryRef.current?.value.length == 0 ||
      offerRef.current?.value.length == 0 ||
      timeWorkRef.current?.value.length == 0
    )
      setErr("Vui lòng nhập đủ thông tin");
    else {
      //@ts-ignore
      dtoBđ.address = addresssRef.current?.value;
      //@ts-ignore
      dtoBđ.require = requireRef.current?.value;
      //@ts-ignore
      dtoBđ.salary = salaryRef.current?.value;
      //@ts-ignore
      dtoBđ.offer = offerRef.current?.value;
      //@ts-ignore
      dtoBđ.timeWork = timeWorkRef.current?.value;
      //@ts-ignore
      dtoBđ.title = titleRef.current?.value;
      //@ts-ignore
      dtoBđ.description = descriptitonRef.current?.value;
      //@ts-ignore
      dtoBđ.start = "" + startRef.current?.value;
      //@ts-ignore
      dtoBđ.end = "" + endRef.current?.value;
      console.log(dtoBđ);

      setErr("");
    }
    //@ts-ignore
  };

  const Body = () => {
    return (
      <div className="mx-[18%] mt-20 px-14 py-10  bg-white">
        <div className=" text-xl">Tiêu đề</div>
        <textarea
          ref={titleRef}
          placeholder="Nhập tiêu đề của bài tuyển dụng"
          className="mt-3 flex min-h-[60px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />

        <div className="mt-5 text-xl">Mô tả công việc</div>
        <textarea
          ref={descriptitonRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Địa điểm</div>
        <textarea
          ref={addresssRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Yêu cầu ứng viên</div>
        <textarea
          ref={requireRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Lương</div>
        <textarea
          ref={salaryRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">Quyền lợi</div>
        <textarea
          ref={offerRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />

        <div className="mt-5 text-xl">Thời gian làm việc</div>
        <textarea
          ref={timeWorkRef}
          placeholder={Hd}
          className="mt-3 flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
        <div className="mt-5 text-xl">
          Thời gian dự kiến bắt đầu tuyển dụng:{" "}
          <input
            type="date"
            name="date"
            id=""
            className="border-2 rounded-sm px-2 ml-2"
            ref={startRef}
          />
        </div>
        <div className="mt-5 text-xl">
          Thời gian dự kiến kết thúc tuyển dụng:{" "}
          <input
            type="date"
            name="date"
            id=""
            className="border-2 rounded-sm px-2 ml-2"
            ref={endRef}
          />
        </div>
        <button
          className="bg-[#00b14f] mt-10 rounded-[7px] p-[7px] font-semibold text-white hover:bg-green-600"
          onClick={handleCreated}
        >
          Tạo bài tuyển dụng
        </button>
        <div>{err}</div>
      </div>
    );
  };
  return (
    <div className="bg-[#f4f5f5] pt-10 pb-20">
      <Body></Body>
      <div className="mt-[20px] "></div>
    </div>
  );
}

export default ResuitmentPage;
