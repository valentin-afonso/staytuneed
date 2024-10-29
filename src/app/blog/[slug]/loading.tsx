import ProgressBar from "@/ui/ProgressBar";

export default function Loading() {
  return (
    <>
      <ProgressBar />
      <div className="flex flex-col w-[840px] max-w-full gap-4 m-auto">
        <div className="w-3/4 h-[22px] rounded-xl bg-slate-100"></div>
        <div className="w-full h-[45px] rounded-xl bg-slate-100"></div>
        <div className="flex justify-between">
          <div className="w-[300px] h-[18px] rounded-xl bg-slate-100"></div>
          <div className="w-[83px] h-[18px] rounded-xl bg-slate-100"></div>
        </div>
        <div className="w-[58px] h-[29px] rounded-xl bg-slate-100"></div>
        <div className="w-full h-[1px] rounded-xl bg-slate-100"></div>
        <div className="w-full h-[472px] rounded-xl bg-slate-100"></div>
      </div>
      <p>loading...</p>
    </>
  );
}
