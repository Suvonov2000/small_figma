import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const Categories = () => {
  return (
    <div className="flex">
      <div className="w-[170px] h-[145px] border border-black flex flex-col items-center justify-center gap-[15px] mt-[30px] ">
        <MobileOutlined />
        <h3>Phones</h3>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <div className="w-[90%] h-[360px] m-auto mt-[100px] border-b border-solid">
        <div className="relative h-[108px] flex">
          <div className=" ">
            <div className="flex items-center gap-[10px]">
              <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
              <h3 className="text-sm font-semibold text-red-500">Categories</h3>
            </div>
            <h1 className="text-[36px] font-semibold">Browse By Category</h1>
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
        <div className="flex gap-[40px]">
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </div>
      </div>
    </div>
  );
};
export default Category;
