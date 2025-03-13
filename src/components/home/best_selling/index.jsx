import { HeartOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const Cards = (props) => {
  return (
    <div>
      <div className=" h-[350px] ">
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
            <img className="w-[140px] h-[146px]" src={props.img} alt="" />
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

      <div className="grid grid-cols-5 gap-[20px]">
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sObVp-vtSy4b2YB~-7jkxuPbZ3TO04ux2VB4yIXW0zv6YyoJgYaYvN6~qR3L20BTMWEtyuehJ9P15d5MS5AYCck2vhpbEZQEzR19qpVEk7Spga7dsZAf0TyDbcBTjKGh3gND7FDAKFkrHAqbyM66ma-DVdQeS4eg-PMEXmVGaM1Tr70bc4i1EBW8-naqZcsJk6yJMNtmfsim2hZHn5rZLPaLW8-KuTBYM85ahZ0VYTtSTx3PJB5mDX3X6kx~rhlD5TDXIx7LCyzW21rn3fzDkkPFrxwBQ9dBR97b6sYar-5hcyS0UabfV2cGBlEeJA7H2THMguJ40Dc~c6A928UVpA__"
          }
          title={"The north coat"}
          price_down={"$260"}
          price={"$360"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TUTYLKHPu5ty7nAX7TqIJQmhyuBTZJSTk1xV-hcsLtcAn3Q0SXUbzeZ0X4lba~mZDxy-p88KVFJmg-MG8rSAVJFFLc92dSGS9~kK5prerVTlSAV1sX0D19d2WaMVEPOjaC~blFiYuoWZJ300Qq4t7T9E84hRzShBCuKfYdm4PStpeTZ-O97V4GXQo3T2qP9ELTUpUCu10Obe9IZT~WrnNRw76eE4ds5pqThMYP~k7ST09YhxH3Jv19Tl8vQTiPQQHTsfBAiK5RGnx9oZ17YQ6pD-DU4kRpQQWM0w9o7XQ~yAiU2FrsgHgBGYDRnNkumuIDc90YUDtfotSZqzr4PnLw__"
          }
          title={"Gucci duffle bag"}
          price_down={"$960"}
          price={"$1160"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nmfCRyQdKJJ3zKApAi-BGlavsnI8XOD5Tw3p3UrJuVoej5WP7ry~iyyKJuiJrU2Dm9RxHciiNi1ZXTwYxr17Zm9E-AwGHOL~v~IqKa-OuDpPASe23RkLGLxqxAz0y6sHxuz81UDSFp107AwgmcDt-XkBvv-ZlvDMAXX5zYo42nL6CeQyWVjeu45~5hkhuPKzFytXkVIPBk-TwgU0175LjMeq75zAfop3mVwLQhRYJfIaWOQVchYeH2rY4YC7m8wpSX8662H5HTStJQrLqV~wTkvLBtw89phpGC3lT08L1MErDVAQ5-0~nHaSZ7OVUB8BjT-Rh6fu9KghOoMpReq9Cw__"
          }
          title={"RGB liquid CPU Cooler"}
          price_down={"$170"}
          price={"$160"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JHBJAEkki0JiSwRD7OgDfN3ruSjRkYCJJ-oYiD0dB~cJmJrJvzpzwP0EfW9LwIutQj43wgak3Mfj9vKYFMYeGV7qQ5vYGvNLf0DXQJdq0sW1FlgJcq6QWCTzuhCyBjK-MMLmz20KTG~l6kdi8Psy8Xg-Q2ctoOxJT-mq04y6342imsd00e-~lEZpgcYPyXvXBZ4xzX9kUIfW2qs~sksiL0okwm9v2fKubOMAgiOSTh1Gx3X37N3o9vZq29sFYshrToo2wEX-2Q7eBX5zwWRxGd2tlDnpnX9XyMA8Wxo8gcJWMhstwJCC0hIKwD2QzuIcCOvYhQmMFwEyLgkk7n3Z2w__"
          }
          title={"Small BookSelf"}
          price_down={"$360"}
          price={"$320"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMiweqzloa4rRDOOpofbqEGs-wZC7boTFhWAtdTiokwmm122IdeIejn6cz-OH5C021hdkH-GqwUCSkFYMeCqpxZghYsFVI7cyM5XqIWSHqMkJrZHaNwAQVXZNWRNjV6IRHdbLg0uigkh8mPoP7H8QrZh80Lk3QkbCyir91znc889AGIIRVjjLJfrIgX5CE6P-7~qS9ZZakqBNd9OwYqyD7uHEh3PPWehI~3EZmdslEfR2gnwYhJ3~D2LFsX3Y4tKuHLpFOU1Dg2aO6FcI9GwELt5Uq787GppFc6eBSrnCZwgNG44bDwvsM~g9YoZpukex2w46zEUGy40uTCccDcqqQ__"
          }
          title={"Havic HV G-92 Gamepad"}
          price_down={"$150"}
          price={"$192"}
        />
      </div>
    </div>
  );
};

export default Best_selling;
