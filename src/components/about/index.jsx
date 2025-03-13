import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Flex } from "antd";

const { TextArea } = Input;
const About = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className=" mt-[50px]">
        <h3 className="text-[14px]">
          <span className="text-gray-400 text-[14px]">home /</span> about
        </h3>
      </div>

      <div className="flex w-full h-[457px] mt-[50px] gap-8">
        <div className="flex flex-col gap-[30px] w-[340px] shadow-md p-7">
          <div className="flex flex-col gap-[20px] ">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[50px] bg-[#DB4444] flex items-center justify-center">
                <PhoneOutlined className="text-white" />
              </div>
              <h1 className="text-[16px] font-semibold">Call To Us</h1>
            </div>
            <p className="text-[14px] text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[14px] text-sm">Phone: +8801611112222</p>
          </div>

          <div className="w-full h-[1px] bg-gray-300"></div>

          <div className="flex flex-col gap-[20px] ">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[50px] bg-[#DB4444] flex items-center justify-center">
                <MailOutlined className="text-white" />
              </div>
              <h1 className="text-[16px] font-semibold">Write To US</h1>
            </div>
            <p className="text-[14px] text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px] text-sm">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[14px] text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-10 p-8 relative shadow-md">
          <div className="flex gap-5 ">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Your Phone" />
          </div>

          <div className="flex flex-col">
            <Flex vertical>
              <TextArea
                placeholder="Your Massage"
                style={{
                  height: 200,
                  resize: "none",
                }}
              />
            </Flex>
          </div>
          <button className="w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] text-white text-[16px] absolute right-8  bottom-10">
            Send Massage
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
