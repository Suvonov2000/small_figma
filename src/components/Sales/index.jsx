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
      <div className="w-[265px] h-[350px] ">
        <div className="w-full h-[250px] bg-[#F5F5F5] mt-[30px]">
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
            <img className="w-[172px] h-[152px]" src={props.img} alt="" />
          </div>
        </div>
        <div>
          <h1 className="w-[194px] h-[24px] text-semibold text-[#000000] mt-[10px]">
            {props.title}
          </h1>
          <div className="flex gap-[5px] mt-[10px]">
            <h3 className="text-[#DB4444] text-sm text-[16px]">
              {props.price_down}
            </h3>
            <h3 className="text-sm text-[16px] line-through text-[#000000]">
              {props.price}
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
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QoPE1xfyhTKLQUs65WgTKi6aXbaOf2ftJpWp8VkrvIkqMtzhUDGHdALPgC96cpb49oozocup-FhZNm99kqY1uU10KV2HpUDUxZZaNu-5lKuvEMuKx9Q~YI6WE1KP62kr-0~iQDE~PYckleUSlYMTHo~s~cQueS-JpzBCvBKOgRAd0Ra9Re0MWmYUaLv5Po3zEpII~tIJX4gVCNFRU7SJrWvkZeMwLFhELQj-p~3GQgD3PjBW9zlMDjj8Qzqvn50gJbnD7oHiYYypklGQ~EdD5-pn28-0YVOxVd-vDD00AKivyMpxpWq8s2PbILbSCkG6rpbofIfr6RGBAIr~ZFFgQw__"
          }
          title={"HAVIT HV-G92 Gamepad"}
          price_down={"$120"}
          price={"$160"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FHVmvlQ0qcj~rNgFkrk4Eb50~4WF8RFduZEqyGM2yFItzwtRF0fokLSXHvoVeTu7h6vvZNOw2QOiw7ZR5EvxtKmGOnbR2Iw9WLiSxdi4Szo5qzPbouHbDI7wmevwrngGnWEwPEUZXgVv4DacrDBblKNZG~k3VcU0Ihwsfg1uYwh0nPwzB3EIM12UYVmnQQnVUmn~fn-xcBMKAlpL0SdBkHq5vwj3ZmiP6b7SZd9Y2GA~VMawfWklijapMPhhSLosG15TRaNoDmHpcsubwVuzLOMcMGST8m7PSya~DFk0ZAl9G2YHNQwTidrvyRnO2DQR-8XOEXA31VuBWepK~C1c5g__"
          }
          title={"AK-900 Wired Keyboard"}
          price_down={"960"}
          price={"$1160"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o0Vm8R~f1xmKFyroIfj03OSjn1UrZyg6vqTWDTh47IoypePFPtDQGyF3AVp3HO~wSYyfU-0hG--tap9ouFLkWkvnA6OEk6ga~L3PRWuv1pk1iwLXKW5JIWzj-PDiDp757jrV7xIymA-KPZb5dNJT5S6dZvivjfvzlRMTs1IPUCk2asgAa2W8XDGO-Jarq8AKe8pignGa6PixdxRq-bzbcaOvwvvLGll8L3jbyjrJBEY8bM2h-UxPRFAPM4H5G96tdA3ds6mFs-0fJuvDgds5hlyuYkmjVuhgHhXN2FnczvQg0lIbQaOdh8URfdJW2T8dv3tmcDcIut9rEL9s-0du7A__"
          }
          title={"IPS LCD Gaming Monitor"}
          price_down={"$370"}
          price={"$400"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ez9YwPfoR~nJNgvC1id5JOOVY2~fQ1r~FTUBr3o4K9OFQ0SGECEiJhqqs~uCdb9ozhG7Z323q5-BgzHN8f4pS0ckfm3GbTKkNY7M9sLMhU~HaEo44SeWBB2Pb7Pu-Ow-fmHVbuugOVm2iEVkhUxmtNniemc-5vCeOGnRdIlNPm4zoAwf380kdglcFMLfqTkyTnItdFq6lJ0QjHr2tza0ikfz3hjOF0cPMRdMAQm9rGGAP8UdPTtLUIfZUhQuVv77GrEnz1LqNX7EIFBpst-xYxo9ldgy~dKQRVEWcQRxAn~T5PYFPxIOXirVRVJC7MopGyAsVjhnF3OB4XqAi~w~aQ__"
          }
          title={"Granite square side table"}
          price_down={"$250"}
          price={"$300"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nmfCRyQdKJJ3zKApAi-BGlavsnI8XOD5Tw3p3UrJuVoej5WP7ry~iyyKJuiJrU2Dm9RxHciiNi1ZXTwYxr17Zm9E-AwGHOL~v~IqKa-OuDpPASe23RkLGLxqxAz0y6sHxuz81UDSFp107AwgmcDt-XkBvv-ZlvDMAXX5zYo42nL6CeQyWVjeu45~5hkhuPKzFytXkVIPBk-TwgU0175LjMeq75zAfop3mVwLQhRYJfIaWOQVchYeH2rY4YC7m8wpSX8662H5HTStJQrLqV~wTkvLBtw89phpGC3lT08L1MErDVAQ5-0~nHaSZ7OVUB8BjT-Rh6fu9KghOoMpReq9Cw__"
          }
          title={"RGB liquid CPU Cooler"}
          price_down={"$300"}
          price={"$340"}
        />
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
