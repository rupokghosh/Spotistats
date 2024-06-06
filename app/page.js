import Image from "next/image";

export default function Home() {
  const img =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  return (
    <div className="flex flex-col items-center justify-evenly gap-10 mt-12">
      <img src={img} alt="avatar" className="w-24 rounded-full" />
      <div className="font-bold text-2xl text-neutral">Top Songs</div>
      <div className="songs flex justify-evenly items-center gap-6 ">
        <img src={img} alt="avatar" className="w-24 rounded-md " />
        <img src={img} alt="avatar" className="w-24 rounded-md " />
        <img src={img} alt="avatar" className="w-24 rounded-md " />
        <img src={img} alt="avatar" className="w-24 rounded-md " />
        <img src={img} alt="avatar" className="w-24 rounded-md " />
      </div>
      <div className="font-bold text-2xl text-neutral"> Top Artists </div>
      <div className="artists flex justify-evenly items-center gap-6">
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
      </div>
      <div className="font-bold text-2xl text-neutral"> Top Genres</div>
      <div className="artists flex justify-evenly items-center gap-6">
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
        <img src={img} alt="avatar" className="w-24 rounded-full" />
      </div>
    </div>
  );
}
