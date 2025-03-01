import { Button, Select } from "antd";
import Search from "antd/es/transfer/search";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <div>
      <div className="w-full h-12 border-b  border-solid">
        <div className=" h-full w-[90%] flex items-center justify-center relative">
          <div className="flex items-center">
            <h3 className="text-black text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h3>
            <Button className="py-0" variant="link" type="link">
              Shop Now
            </Button>
          </div>

          <div className="absolute right-0">
            <Select
              defaultValue="English"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "english",
                  label: "English",
                },
                {
                  value: "japanese",
                  label: "Japanese",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-12 border-b  border-solid">
        <div className="w-[90%] h-[38px] mt-10 mb-4 m-auto flex items-center justify-between">
          <div className="text-2xl font-semibold">Exclusive</div>
          <div className="flex item-center gap-12">
            <h3 className="cursor-pointer text-base">Home</h3>
            <h3 className="cursor-pointer text-base">Contact</h3>
            <h3 className="cursor-pointer text-base">About</h3>
            <h3 className="cursor-pointer text-base">Sign up</h3>
          </div>
          <div className="flex items-center gap-6">
            <Search placeholder="Search" />
            <div className="flex items-center gap-4">
              <Button>
                <HeartOutlined />
              </Button>
              <Button>
                <ShoppingCartOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
