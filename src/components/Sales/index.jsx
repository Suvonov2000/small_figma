import React from "react";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  HeartOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";

const Cards = (props) => {
  return (
    <div>
      <div className="w-[270px] h-[350px]">
        <div className="w-full h-[250px] bg-[#F5F5F5]">
          <div className="pt-[20px] pl-[20px] flex relative">
            <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-[4px]">
              <h3 className="text-white text-center pt-[3px] text-[12px]">
                -40%
              </h3>
            </div>
            <div className="flex flex-col gap-[5px] absolute right-3">
              <div className="w-[34px] h-[34px] rounded-[50px] bg-white flex items-center justify-center">
                <HeartOutlined />
              </div>

              <div className="w-[34px] h-[34px] rounded-[50px] bg-white flex items-center justify-center">
                <FolderViewOutlined />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="w-[172px] h-[152px]"
              src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QoPE1xfyhTKLQUs65WgTKi6aXbaOf2ftJpWp8VkrvIkqMtzhUDGHdALPgC96cpb49oozocup-FhZNm99kqY1uU10KV2HpUDUxZZaNu-5lKuvEMuKx9Q~YI6WE1KP62kr-0~iQDE~PYckleUSlYMTHo~s~cQueS-JpzBCvBKOgRAd0Ra9Re0MWmYUaLv5Po3zEpII~tIJX4gVCNFRU7SJrWvkZeMwLFhELQj-p~3GQgD3PjBW9zlMDjj8Qzqvn50gJbnD7oHiYYypklGQ~EdD5-pn28-0YVOxVd-vDD00AKivyMpxpWq8s2PbILbSCkG6rpbofIfr6RGBAIr~ZFFgQw__"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="w-[194px] h-[24px] text-semibold text-[#000000] mt-[10px]">
            HAVIT HV-G92 Gamepad
          </h1>
          <div className="flex gap-[5px] mt-[10px]">
            <h3 className="text-[#DB4444] text-sm text-[16px]">$120</h3>
            <h3 className="text-sm text-[16px] line-through text-[#000000]">
              $160
            </h3>
          </div>
          <div className="flex mt-[10px]">
            <Rate
              allowHalf
              defaultValue={5}
              className="w-[140px] h-[20px] text-[#FFAD33]"
            />
            <h3 className=" text-sm text-[16px]">(83)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sales = () => {
  return (
    <div className="w-[90%] h-[650px] m-auto  mt-[100px] border-b border-solid relative">
      <div className="w-full h-[103px] flex ">
        <div className="flex flex-col  ">
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
            <h3 className="text-sm font-semibold text-red-500">Today's</h3>
          </div>
          <h1 className="text-[36px] font-semibold">Flash Sales</h1>
        </div>
        <div className="flex items-center  gap-[20px] pt-[20px] pl-[100px]">
          <div className="flex flex-col">
            <h6 className="text-[12px] text-sm">Days</h6>
            <h3 className="text-[32px] font-semibold">03</h3>
          </div>
          <h1 className="font-semibold text-[35px] text-[#E07575] pt-2">:</h1>
          <div>
            <h6 className="text-[12px] text-sm">Hours</h6>
            <h3 className="text-[32px] font-semibold">23</h3>
          </div>
          <h1 className="font-semibold text-[35px] text-[#E07575] pt-2">:</h1>
          <div>
            <h6 className="text-[12px] text-sm">Minutes</h6>
            <h3 className="text-[32px] font-semibold">19</h3>
          </div>
          <h1 className="font-semibold text-[35px] text-[#E07575] pt-2">:</h1>
          <div>
            <h6 className="text-[12px] text-sm">Seconds</h6>
            <h3 className="text-[32px] font-semibold">56</h3>
          </div>
        </div>
        <div className="flex gap-[10px] absolute right-0 pt-[45px]">
          <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-[46px] flex items-center justify-center">
            <ArrowLeftOutlined />
          </div>
          <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-[46px] flex items-center justify-center">
            <ArrowRightOutlined />
          </div>
        </div>
      </div>

      <div className="flex gap-[20px]">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <div className="w-[234px] h-[56px] bg-[#DB4444] rounded-[4px] cursor-pointer flex items-center justify-center">
          <h1 className="text-white text-semibold">View All Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Sales;
