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
      <div className="w-[270px] h-[350px] ">
        <div className="w-full h-[250px] bg-[#F5F5F5] mt-[30px]">
          <div className="pt-[20px] pl-[20px] flex relative">
            <div className="flex flex-col gap-[5px] absolute right-3">
              <div className="w-[34px] h-[34px] rounded-[50px] bg-white flex items-center justify-center">
                <HeartOutlined />
              </div>

              <div className="w-[34px] h-[34px] rounded-[50px] bg-white flex items-center justify-center">
                <FolderViewOutlined />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-[20px]">
            <img
              className="w-[115px] h-[180px]"
              src="https://s3-alpha-sig.figma.com/img/78e7/2711/8c99fe72271cf43f5e3566b39ca7c8f4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-xt3bKeX6LFtmZzhfq0A5o85muDnHADyE3uEpgL3YpqopCFRx0oNO0STbybGNdNdmVo6pQNIfDGkchrpZWW2y7Ogr12ub7TE96LrjOq1njFr4LjPAicnKq7BAARvRMJyHBBb0XMbow9aBibfKmQTf~DrKS84JWi5XqhtCUqC9OYPPMnqIvPPvGFpyc~-2MZ4jdPUBIH9IvwOWSEGzKbB8g8Mg3Dq39ERDRyITIFJbGZ48REEPO7vkpkjfBTd168OMHT3aVRET9P-OopH9t34fMp6IspP~El9ZCe-XlA9-Udu0DOSL5ebgkD73QLxhhVZSbKc9Np8wvBRx9IwNeR3g__"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="w-[194px] h-[24px] text-semibold text-[#000000] mt-[10px]">
            Breed Dry Dog Food
          </h1>

          <div className="flex mt-[10px] gap-[10px]">
            <h3 className="text-[#DB4444] text-sm text-[16px]">$120</h3>
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

const Products = () => {
  return (
    <div className="w-[90%] h-[1016px] m-auto  mt-[100px] border-b border-solid relative">
      <div className="w-full h-[103px] flex ">
        <div className="flex flex-col  ">
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
            <h3 className="text-sm font-semibold text-red-500">Our Products</h3>
          </div>
          <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
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

      <div className="flex flex-col ">
        <div className="flex gap-[20px]">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="flex gap-[20px]">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <div className="flex items-center justify-center mt-[50px]">
        <div className="w-[234px] h-[56px] bg-[#DB4444] rounded-[4px] cursor-pointer flex items-center justify-center">
          <h1 className="text-white text-semibold">View All Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
