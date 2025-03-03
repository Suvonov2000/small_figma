import { HeartOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const Cards = (props) => {
  return (
    <div>
      <div className="w-[267px] h-[350px] ">
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

          <div className="flex items-center justify-center pt-[30px]">
            <img
              className="w-[140px] h-[146px]"
              src="https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sObVp-vtSy4b2YB~-7jkxuPbZ3TO04ux2VB4yIXW0zv6YyoJgYaYvN6~qR3L20BTMWEtyuehJ9P15d5MS5AYCck2vhpbEZQEzR19qpVEk7Spga7dsZAf0TyDbcBTjKGh3gND7FDAKFkrHAqbyM66ma-DVdQeS4eg-PMEXmVGaM1Tr70bc4i1EBW8-naqZcsJk6yJMNtmfsim2hZHn5rZLPaLW8-KuTBYM85ahZ0VYTtSTx3PJB5mDX3X6kx~rhlD5TDXIx7LCyzW21rn3fzDkkPFrxwBQ9dBR97b6sYar-5hcyS0UabfV2cGBlEeJA7H2THMguJ40Dc~c6A928UVpA__"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="w-[194px] h-[24px] text-semibold text-[#000000] mt-[10px]">
            The north coat
          </h1>
          <div className="flex gap-[5px] mt-[10px]">
            <h3 className="text-[#DB4444] text-sm text-[16px]">$260</h3>
            <h3 className="text-sm text-[16px] line-through text-[#000000]">
              $360
            </h3>
          </div>
          <div className="flex mt-[10px]">
            <Rate
              allowHalf
              defaultValue={5}
              className="w-[140px] h-[20px] text-[#FFAD33]"
            />
            <h3 className=" text-sm text-[16px]">(65)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Best_selling = () => {
  return (
    <div className="w-[90%] h-[500px] m-auto mt-[100px]">
      <div className="relative h-[108px] flex">
        <div className=" ">
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
            <h3 className="text-sm font-semibold text-red-500">This Month</h3>
          </div>
          <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
        </div>

        <div className="absolute right-0  pt-[50px] pl-[20px]">
          <div className="w-[159px] h-[56px] bg-[#DB4444] border rounded-[4px] flex items-center justify-center ">
            <h1 className="text-white ">View All</h1>
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
    </div>
  );
};

export default Best_selling;
