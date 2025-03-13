import {
  TruckOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  DollarOutlined,
  GiftOutlined,
  MoneyCollectOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="w-full h-710px] flex flex-col mt-[50px]">
        <div className="">
          <h3 className="text-[14px]">
            <span className="text-gray-400 text-[14px]">home /</span> about
          </h3>
        </div>
        <div className="flex gap-20 mt-[30px]">
          <div className="flex flex-col flex flex-col justify-center">
            <div className="w-[525px] flex flex-col justify-center">
              <h1 className="text-[54px] text-semibold">Our story</h1>
              <p className="text-[16px] text-sm mt-[20px]">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <br />
              <p className="text-[16px] text-sm">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              className="h-[609px] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uQiLyEehv6bNpPpEG0vInuNLwLS1t3Sa7YORdXhHTnWL2-WGBFDjKfk~erlI~mgOr8wdo5piXMU-9IZREa~Ll2u-SObiFal9S4htpLoWhg3ICFBfgyZHT~P-hGcv0HLCSHO~lHcZpCNXHVkm8M1s8pIc-MKcT4~s4Y5P784HpsAlPQ9iwTCDBKIFuDJfrEswnJsByaKjOCoUJ7clTBkNFopAGfNDBLeFECysIZJ5hsry9bl7L0rGsccSzxdCuxGMnx1RzLp1~aDpnSar7cG38sAq8vThIk5RYfF--konZhE9vXkXjIz2aTt1k2bdS4J07ra13su4UCy2WIW59S4AQg__"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[30px] mt-[100px] mb-[100px]">
        <div className="w-[270px] h-[230px] border border-solid flex flex-col items-center justify-center gap-5 ">
          <div className="flex items-center justify-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <HomeOutlined className="text-white pl-[18px] pt-[17px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[20px] font-semibold ">10.5k</h1>
            <h2 className="text-[16px]">Sallers active our site</h2>
          </div>
        </div>

        <div className="w-[270px] h-[230px] border border-solid flex flex-col items-center justify-center gap-5 bg-[#DB4444] ">
          <div className="flex items-center justify-center">
            <div className="w-[80px] h-[80px] rounded-full bg-red-300 flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-white">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <DollarOutlined className=" pl-[18px] pt-[17px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[20px] font-semibold text-white ">33k</h1>
            <h2 className="text-[16px] text-white">Mopnthly Produduct Sale</h2>
          </div>
        </div>

        <div className="w-[270px] h-[230px] border border-solid flex flex-col items-center justify-center gap-5 ">
          <div className="flex items-center justify-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <GiftOutlined className="text-white pl-[18px] pt-[17px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[20px] font-semibold ">45.5k</h1>
            <h2 className="text-[16px]">Customer active in our site</h2>
          </div>
        </div>

        <div className="w-[270px] h-[230px] border border-solid flex flex-col items-center justify-center gap-5 ">
          <div className="flex items-center justify-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <MoneyCollectOutlined className="text-white pl-[18px] pt-[17px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[20px] font-semibold ">25k</h1>
            <h2 className="text-[16px]">Anual gross sale in our site</h2>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="grid grid-cols-3 gap-[40px]">
          <div className="w-[370px] h-[564px]">
            <div className="flex items-center justify-center bg-[#F5F5F5]">
              <img
                className="h-[391px]"
                src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rtMgKPPrD0Y8nzYjsE8nsbpwHbbGpmVBIAcdrJ-vvKG79HJjlQkwDlHgNROxHMaV9zwje46IkAV1dHxtjxn3qNHxmjPBIJpgrY5UQ8bX6HwZv5SEVZwWncyYnDS4JKeQq1MD-KXYuxGtlsrL6ZzB6-BYoqahZ2PC8h5cz4SHS5gf~Y-KIazhq6U7b1zATWsNqmhEPfgPTthPOIc8rOGqxxvB2UAkr0eDYNfi6BiZugV9LAH7skgtJLCgMqAT6MMDgsqcrp367r26Bv9UbNpiQYwzKs~Fbu1W2dF1dliKA8y~LfkoNkXI5njBlGQI-Hrq8k4Fx04ri5ymEDt8WxF3rw__"
                alt=""
              />
            </div>

            <div className="flex flex-col mt-[20px]">
              <div className="flex flex-col">
                <h1 className="text-[32px] ">Tom Cruise</h1>
                <h3 className="text-[16px]">Founder & Chairman</h3>
              </div>
              <div className="flex mt-[10px] gap-5">
                <TwitterOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
              </div>
            </div>
          </div>

          <div className="w-[370px] h-[564px]">
            <div className="flex items-center justify-center bg-[#F5F5F5]">
              <img
                className="h-[391px]"
                src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E4sOMqlUfoxcewJyeNPmnzGjvT7YdDR4rXJgahFIzo2Fdul~UnASdIHQSZcO2KdDoStnKEpn8-Q1UG3u8RRZjkjWr0PKZ51nACHDZUGhVxr3ftvlX~CDxWLqeAs0y0q416zz5wknu5EzjhwdWaAmTWSpF0u1e902ODPcFDvwQqefUuBIQo46NIQv7luyVYZdjcT96hcEgryy6FJKa78ozMDkn~B-bpIkViyiBT1pUFM8MM0iItIxc4FrE5IX1dtIjKvFCTAT68RVOJdYQd9J1hc~MJGrGk~DO8akHDtAoUADF2za2C5HhvWNKzUbvmTTRtI2RazF42DVIt6MwRVn2Q__"
                alt=""
              />
            </div>

            <div className="flex flex-col mt-[20px]">
              <div className="flex flex-col">
                <h1 className="text-[32px] ">Emma Watson</h1>
                <h3 className="text-[16px]">Managing Director</h3>
              </div>
              <div className="flex mt-[10px] gap-5">
                <TwitterOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
              </div>
            </div>
          </div>

          <div className="w-[370px] h-[564px]">
            <div className="flex items-center justify-center bg-[#F5F5F5]">
              <img
                className="h-[391px]"
                src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MvS7ga1CC-R35aKjFZeqwHEKceSybMcAJHvtoiWTzKg1M4ngfKQrF22Oi0bqJOUsSipqIxCsfDm1kQp9KnjyB8JrreHpv4eH9WjbkL3QVjqwhNU9aXh~KCuPBDgwmAXofMYogBcz4fR-6tovT6-H2RlQWgIB9JyD4lYhlUZ4P69tdcmVkysSxwUI2BSYkPdze~tbGkoMmT0FBmDdU77af3JTIJjVRUEMtPhBHVQrtnQ-DF10WcZTjjdx2V6HW2eGmcus4KSUwdUA95zIORiZIDRB7DRbG5C7flusrjT-D6FRr0LdyGOFN2E1xbnQJnHyY0~W5048AbDcJlvu5zE82w__"
                alt=""
              />
            </div>

            <div className="flex flex-col mt-[20px]">
              <div className="flex flex-col">
                <h1 className="text-[32px] ">Will Smith</h1>
                <h3 className="text-[16px]">Product Designer</h3>
              </div>
              <div className="flex mt-[10px] gap-5">
                <TwitterOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2  justify-center">
          <div className="w-[12px] h-[12px] rounded-[50px] bg-gray-300"></div>
          <div className="w-[12px] h-[12px] rounded-[50px] bg-gray-300"></div>
          <div className="w-[12px] h-[12px] rounded-[50px] bg-[#DB4444]"></div>
          <div className="w-[12px] h-[12px] rounded-[50px] bg-gray-300"></div>
          <div className="w-[12px] h-[12px] rounded-[50px] bg-gray-300"></div>
        </div>
      </div>

      <div className="w-full flex items-center justify-around mt-[100px] mb-[100px]">
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
      </div>
    </div>
  );
};

export default Contact;
