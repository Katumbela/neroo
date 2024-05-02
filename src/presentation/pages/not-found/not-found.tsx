import React from "react";
import { pages } from "../../../utils/imagesExporter";
import { Overlay } from "../../components";

export function NotFound() {
  return (
    <div className="w-full h-screen bg-white">
      <Overlay />
      <br />
      <div className="bg-black md:mt-0 mt-[6rem] w-[14rem] py-6 rounded-2xl shadow-lg z-10 mx-auto shadow-orange-500 ">
        <img src={pages.logo} alt="" className="mx-auto" />
      </div>
      <br />
      <img src={pages.notFound} alt="" className="mx-auto animate-pulse md:w-5/12 -z-10" />
    </div>
  );
}
