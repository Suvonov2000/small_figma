import {
  TruckOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const Cart = () => {
  return (
    <div className="w-[90%] h-[400px] m-auto flex items-center justify-around relative">
      <div className="w-[249px] h-[161px]">
        <div className="flex items-center justify-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <TruckOutlined className="text-white pl-[18px] pt-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[20px] font-semibold mt-[15px] mb-[10px]">
          FREE AND FAST DELIVERY
        </h1>
        <h2 className="text-[14px] text-sm">
          Free delivery for all orders over $140
        </h2>
      </div>

      <div className="w-[249px] h-[161px]">
        <div className="flex items-center justify-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <CustomerServiceOutlined className="text-white pl-[18px] pt-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[20px] font-semibold mt-[15px] mb-[10px]">
          24/7 CUSTOMER SERVICE
        </h1>
        <h2>Friendly 24/7 customer support</h2>
      </div>

      <div className="w-[256px] h-[161px]">
        <div className="flex items-center justify-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <CheckCircleOutlined className="text-white pl-[18px] pt-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[20px] font-semibold mt-[15px] mb-[10px]">
          MONEY BACK GUARANTEE
        </h1>
        <h2>We reurn money within 30 days</h2>
      </div>

      <div className="absolute right-0 bottom-4 w-[46px] h-[46px] rounded-[50px] bg-[#F5F5F5] flex items-center justify-center">
        <ArrowUpOutlined />
      </div>
    </div>
  );
};

export default Cart;
