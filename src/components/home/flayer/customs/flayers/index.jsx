import { Button, Carousel } from "antd";
import React from "react";

const Flayer = () => {
  return (
    <div className="w-full h-[344px] bg-black flex items-center justify-between ml-[40px]">
      <div className="pl-[64px] flex-1">
        <div className="flex items-center gap-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J~ECbf-UvIHNGUL-WhQoAqxuvBfO3b0Qy~3q4tktNMGsoC4f2zsANp40uK9vqZALnHAXtNl-XWdUJvVQJw0-9h1yNRuaoY1yggWUXBRPHMu6QWi3B4p0wxMi7AWX4shO~JXVlXyMGVsFxG2jo43ekdCEAhKunZJx8dAoKRXjl1FfdclTVWEvUzgf-LiUooKv7oMdi4jwXngZmVODfO6HQFDJkt07rlGMQcgNjyEMQ~9-c7DhlAI-samtkluk3j4RYP9~DWc7wPxwZBOkmLY~yRSlybndck7HfgH9EQwYIIaE0RfP5VVNTD-~wbyHqDKCXeVAhRe6rX7EIPnv1zswpQ__"
            alt=""
            className="h-12 w-12"
          />
          <h3 className="text-base text-white">iphone 14 Series</h3>
        </div>
        <h1 className="text-[48px] text-white font-semibold">
          Up to 10% <br /> off Voucher
        </h1>
        <Button type="link">Shop Now</Button>
      </div>

      <div className="flex-1 flex items-end">
        <img
          src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PtR7my52iNKJmo8aCgwk2miIbzNRWVDoNTsI9mI~2J1BjvDTG5lzw5lWGBAsD9aQgL4mhklO-ZIJihWjfb3PK8MMPs2LIgTFVfdhZPYISMP5CBGOw8fH5nHD6TOQ80CgDWAyrgkn0Qwp7Zw9fOQoTuVm9cKt2S4jIJTWrIXOst-2BV9bWOVBwXAg1yoAxBZkuIIxIQU4DZoXWOODUVrfBJruaFYEmWOZEtotBECxFCIFDPJ7rehyc0OkyE5WujeD7NF~NQrriVWnH3bbkRP~KPnPq8BkQdsIxLCaknLIrfw20cINkTXqvLCJAOxoVSU-mShAaaA2QIXhipw-yhr-Yg__"
          alt=""
          className="h-[352px] relative -bottom-[30px]"
        />
      </div>
    </div>
  );
};

const Flayers = () => {
  return (
    <div className="flex-1 mt-10 h-[344px] grid items-center justify-center grid-cols-1">
      <Carousel className="w-full">
        <Flayer />
        <Flayer />
        <Flayer />
        <Flayer />
      </Carousel>
    </div>
  );
};

export default Flayers;
