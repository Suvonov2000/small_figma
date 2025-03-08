import { Input } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="w-[90%] h-[440px] m-auto flex-col mt-10">
      <div className="w-full flex justify-between pt-20">
        <div className="flex flex-col gap-[15px]">
          <h1>Exclusive</h1>
          <p>Subcribe</p>
          <p>Get 10% off your first order</p>
          <Input
            className="w-[216px] h-[48px]"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1>Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1>Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Whishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Term Of Use</p>
          <p>Faq</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1>Download App</h1>
          <h3>Save $3 with App New User Only</h3>
          <div className="w-[full] h-[80px] relative">
            <div className="flex-1 flex ">
              <div className="flex-1">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=blpaPSha~2DZ1j8xInYZ28yo~snRdQKbzRVJzoCvMKMWbOYBC9Beix~TgbcA18chN9~-9nw4Fo-1js0pxW0ftCJRr2TO4RnetDuIxhscvRxoWjRV~dT4tZZ8k6NVwHMNOSio49Qq4HSdbL5z38X5BrOdbOqwtK1b~-U~r9tIDJAfksBpeBG4-tYGyKNx8J-hMoyk5qLz7Egs0Si7-rLh1EEL~71-3hMPpuZUwVsIgdXFbmKHD4hva0C4LpNj5KRwa9QRT2yAnUV7Tq5qtrT4uyCajOf0SEEilBHPYI6QC~cwCYRc6ELYZLLTQltwPVHG2DACiCXqC77s1RxNQa8sCg__"
                  alt=""
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="flex-1 flex-col">
                <div className="flex-1 absolute top-1">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D2koTdfZZAtsjuE6guoFTBW~n3qMB-PPDMOWzqiICSVebgUv10O6G1hM2pmnXteSmGMfF0AmlEc9b4OcvKzv9w4e0G3aERTt4LmdhqpqGrGETYTz4kE2D-HPUDbuXDPuNFKYnAMdv0Xk3KpWSkfv8jTOQ6PNi9Qux6UiSdxDWqjOOzRXrDBqaAmKXg6VO14rt~ZgTLUPJnui7bBGgZp1uDcIkUuogWS6SeF7Hc1nwZgc3y3THfXOi29pv6ZAzW8dnZWvA69XfJKXnze93yvLlT7jGvLXXxxGltruwCvDhBtvDMTgL2ry3xF5QqixrgveRmd~lPbWJ6qOvp9GzRlENA__"
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex-1 absolute bottom-1">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMKufTp90PVdRDJW7GDFG9MgIuH06sx2zcmOX2R5L8XQiJ07GZveiitPYsbFPjCRDxtEbf05PEJhE3sgA3jo4c-WlZHeeTjEKIcs1ae8ayiGNJInx4FZAKayyH6C9GJhMM0XgORDAZSmEhbWKfv00DYukZP6AOKtRNeV4~ovUHvr3xTzrjB6KytjGjNNblG6WlF~6adS~-itNX9UHEp8LaPdJBL7v-eUfcyTazN9NnmSpn5Sf4xNcMCu3YKNiPrdFkkeBidZGVBT7sxZbFN10KQJCOtbbhW73EHhsJjDNP2F1NEFLk1I9Yx~eV1RfVRTOawCXqasWX8lsrSE6Mm~7w__"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  mt-20">
        <h1>Copyright Rimel 2022. All right reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
