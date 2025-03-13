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
      <div className="w-full h-[350px]  ">
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

          <div className="flex items-center justify-center mt-[20px]">
            <img className="w-[130px] h-[180px]" src={props.img} alt="" />
          </div>
        </div>
        <div>
          <h1 className="w-[194px] h-[24px] text-semibold text-[#000000] mt-[10px]">
            {props.title}
          </h1>

          <div className="flex mt-[10px] gap-[10px]">
            <h3 className="text-[#DB4444] text-sm text-[16px]">
              {props.price}
            </h3>
            <Rate
              allowHalf
              defaultValue={5}
              className="w-[140px] h-[20px] text-[#FFAD33]"
            />
            <h3 className=" text-sm text-[16px]">{props.number}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="w-[90%] h-[1016px] m-auto  mt-[100px] border-b border-solid relative">
      <div className="w-full h-[103px] flex ">
        <div className="flex flex-col  ">
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
            <h3 className="text-sm font-semibold text-red-500">Our Products</h3>
          </div>
          <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
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

      <div className="grid grid-cols-5 gap-4 ">
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/78e7/2711/8c99fe72271cf43f5e3566b39ca7c8f4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-xt3bKeX6LFtmZzhfq0A5o85muDnHADyE3uEpgL3YpqopCFRx0oNO0STbybGNdNdmVo6pQNIfDGkchrpZWW2y7Ogr12ub7TE96LrjOq1njFr4LjPAicnKq7BAARvRMJyHBBb0XMbow9aBibfKmQTf~DrKS84JWi5XqhtCUqC9OYPPMnqIvPPvGFpyc~-2MZ4jdPUBIH9IvwOWSEGzKbB8g8Mg3Dq39ERDRyITIFJbGZ48REEPO7vkpkjfBTd168OMHT3aVRET9P-OopH9t34fMp6IspP~El9ZCe-XlA9-Udu0DOSL5ebgkD73QLxhhVZSbKc9Np8wvBRx9IwNeR3g__"
          }
          title={"Breed Dry Dog Food"}
          price={"$100"}
          number={"(35)"}
        />

        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YutgXN7YIFzsrod4G0Z486YI~m7FHeRCMMmv6rGMndRhslZYDvBByCKOHMi2WmuPAWs1QG0YXxHVTyJPCDZC4NjOTsDTIw-wKffhihtnikLsgO~A58xuuwbWFXpQdMzlgjPN~DKw6dI2mC1lwLi2plKU-W-ZORDqZri6sS15r7XiKFkltYRihNzhCaw9htk~gDru-J648Dq-N0Mo3dhVRi-WiM0ZNJcaTJgzAFnGT71GCnoo52HVJeIbNL1NGrRqsJEqeNlIezMWk~4Qcmk6K-AW34LkiHh-HHm9lgr7hlr5GqTH7exNXbFhzcqbQqey75p72VZDp0bOLEcp6IEnXg__"
          }
          title={"CANON EOS DSLR Camera"}
          price={"$360"}
          number={"(95)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OMoLIkaR~K7u97EPwXg9SwniXw~UaMBZVeXyJ7r~tS1G5v8yMzHajflb7tlpMlpyxFPrYXySw3eGi6RSJXI16F7CCtgymkE1YxdtpdcKa50sQtFi7QARbhvXn-3Js4trAI2O34OJlXviUaYMHycFGVnHGUlyGxksCijn1TMjLCDH55wNnkWSdhqAnNifdVsqihUL8DTG2cj2KCzmnpQNw43UI3l8YApXdJdQYlZ0PDJ18LT-ppU8g-rlaX-jpqD2kLqkg5oRqm9AJQovChEcpgI9h-vhdhXks~GqDJ4KFAP0y6pAgNCt6apxxPrhXloTYshpgMTfhW6EojMm1S25Xw__"
          }
          title={"ASUS FHD Gaming Laptop"}
          price={"$700"}
          number={"(325)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jHOLEba4pdIynK6kk~vww-2htJMkNmp1vjQaY~2zGRTTPUsPr7ZAoW~ZM~XbQMgSDXghlaU4-db8yJB7zvNR7va~06JMOQ4o61fCVOLF7-xwEw-~DlAqvPAlrrZQBn-scFMAuX0AWXKp4ktY5EaI1lm9tCP7sNVNX7CBrAPDNuMBskoAnIEMbxu8J4tI3KbuEuUpUOhKqmIkKerZnX2dqxFEP0nH0j9DtIAlcaU6CPQ9zc4gg5kfKPuIShmWihGv0xSNZ6QH4sRJe5GPJ807FmJ8WGKAJVAIQkQ9197w~z138OAzaAMUq2UhQUcnMmMlWrxR62ekBkTHhGsdj3cKbA__"
          }
          title={"Curology Product Set "}
          price={"$500"}
          number={"145"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/d146/45ee/f2ed92b892cb1bd561fee82625fdb3bf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lE6kGFTsvPKNvgV4xELC3v2ehAmDTAz~o0ISLTHBufvzrZtoN5zswGdxNCbGvKv3y3srjxxsPOW1ns7WkVmMsONFxeO3EKTHPlaxFGOyB6uCJypxPVQFubF44I459XttUBLoAmT2ekvT~RefIahG9GkWoLN3KVdC~Tr3lsfCEoDbpladZyxkqKHLn4KW3Oiga0UuPNlTqdKatbznZAdaWbNQanjCXR-tJ4GZxX1FHN8SuDlOLc28~Vb28eDx8riHyEjsXrDc2Yezvvtpo4JLBBbppYfzVbWxgZOA6MZgexhhlc6QWUMBhFlERc0BQpvoqduMJQskmIB0SwC1FY3CzQ__"
          }
          title={"FUSCE ALIQUAM"}
          price={"$450"}
          number={"(75)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/5f4e/a9ac/f805319ddf3897fc9daaf58559542260?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I7UI4ORW0e2IKxD9qvzCLl-LioDTl-Ed4eImh1vCekffN5ychx4Mcq3DrYSWDjBidbS42B-G9lyZLOVivojgnA9Ad3eb0NkckPLL5tlp8J44Hf1UWF-nbgQ3jXJ4nHX8YhHZfIqmt-O1CktGgvP3dQO~hww6DLjdcjnpbxHbDOSanUSCKBkPfJCHsbmIC~9f3xehiwex02aCFvnNYm6PJRLgNNsE2Zu9Ys4OJIBcUcnVaOQx6mq4I2Hr8fXC2IqrSSFw73uz3-Yck-Dgsjmkz9YAqzTBHo~ukpST8K6dpdHkSuy1VD-XzibscyM-YedsASyRTMprPUNn1eM7iy3PDw__"
          }
          title={"Kids Electric Car"}
          price={"$960"}
          number={"(65)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/d0b7/bb25/884f6fdfc1357634d7d7b09e05755c2f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qZmbhtsOgHSOAECkGNNAr2Bu~eeCWQ3rPQyeBOZNIi5b04~YKa4g5DFRWKMWK-InE47dcvp15qPTGe~5IVe7QHEI3jJKzm7KJaDMwiMpylBd3y7-oD3J6wMps9shUqrPPg5jnaTRMpjcFAQfAue~VqlTzyocS2TC6um7~yqIAPXsRIauMwbIPAVlTJGkvEz4TR631SRaRkZYe4TF0DlrHH6ESExiLmgUKM2GugH967PGg6IVpYK0MwTU-ggXv7phNYYvtxaT-pKpww4pdvZ7PDXnrIEHurlLfSusBCx0hhKt7rFlZL1Gq4linqqA-KgUuO6aekqjW3YpA0IznywtRA__"
          }
          title={"Jr. Zoom Soccer Cleats"}
          price={"$1160"}
          number={"(35)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O64LJUiMcgpvkr~2bUxx1xZBgmhX-iiSDxUrmXlPJ1JpshsDTW5QaJmfFSm~YhoV3zPPqUPktqZFGHbRUnF7nFzlftR20c5RZmyYawuc5-ggh87If9XvBZ1AxNQbaLXAY92Bi3EQuu4JEBbUrakw~UXKgdUsorPwmSCjij~DmN9cP7Z79FE0MP5X5MxTNo0zHOPQ8-4MlUh7fudk~dvykb7daCCb-j963GDpOsOX1U978YasdrvLeBFEx2vtEESCiBjkuCbdtBvsSAFhwXzi4my1hc5~ok5qFK5ws8AGW~BXP2SoPOIhgCWKufgKD5usJXowKXG0IETFAMkwn9DpVQ__"
          }
          title={"GP Shooter USB Gamepad"}
          price={"$660"}
          number={"(55)"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dnEGs5JJPRSACTajQVCAj7ot2frjMemzQO5G2WxUBq-VJf1h5yMr~ri-mqCkDrU7~CamKcc~61b5WTdN4paktaTOoXb6CwRW3MfWMbiu8HGos9i-nOB1oJy7BsZovK8Fir-Bx66WgIPeGoiKc0Qg0IrV78wm5ChUFc9aPfdBaes3EOcCJb7ceo7vV2gaKMTfLg5vVm~HmwO0fxA1-dZHr9-~uYIwZ~cvr4y7g3EnWGoEOHcRyykbJo4AAHibCZW6AAo~sw1xnW6nxnnnaHWwF-7OYdI2cPvAAiKUdjQtMfEAxbJsN3Bs34uuPyeU~RAl5mZ5UY3HHONjiBcWSxl23A__"
          }
          title={"Quilted Satin Jacket"}
          price={"$660"}
        />
        <Cards
          img={
            "https://s3-alpha-sig.figma.com/img/09aa/86df/8158c0cda86398a2874f37f49b06d90d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tLCpn3nkEQayB1Z2efQghja2nHPVvl~Xr2zs-doCECurveeVC5FMiRuwXRbQx4Q8xtFOVLwxuSG~pol3pLrOyNUC3~vfxWvHvi6eE-WYfKZpSLRiUaiJxtqWTFPn37jNpwUP4GJx-n5D98mnCxgSCF3ht0PILZnlZYsLLMsF-gAINbKmC5X1GpxzN8LHhe0QsU6b9GNm7suYo2-6UftD0ubwl-3BOU6B4M0SZYNMOK2ekuo1Z9aPWQmDSh8UEAuJawTu~d6aEMXfKKtC6Sdr3NpbQdLHOqmmZwuJymxmsw~4PCM-~vVgKzpFo4F12htbmYpD~bRPEAZTKCryDlIlFA__"
          }
          title={"Trenton modular sofa_3"}
          price={"$1000"}
          number={"80"}
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

export default Products;
