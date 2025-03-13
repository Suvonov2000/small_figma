import { Button } from "antd";

const Customs = () => {
  return (
    <div className="w-[90%] h-[770px] m-auto">
      <div className=" ">
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[40px] rounded-[4px] bg-red-500"></div>
          <h3 className="text-sm font-semibold text-red-500">Featured</h3>
        </div>
        <h1 className="text-[36px] font-semibold">New Arriaval</h1>
      </div>

      <div className="mt-[60px] w-full h-[600px] flex gap-6">
        <div className="flex-1 bg-black relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OdgVPr-2-scgppJBU8~r9P8qZXic6fCBD2F1h-D7MTC2gM5khu8NhqLDbHDomoT48azrVRapFPcZgOGV4H2ctuAJnodnX~Fox9JjBasYASYYi9oLZr0N6yCE8z9o9g9osofjXYf6a4CUWaVWg1sGGiZ915dJ~cFDc5mV8u4lSLC4rWc8pgjcif-GDfstQOWMPuUL6gLlrMPDp3DWfevz-zOWzktwDdJMHcYESkw~gaNL~tAnmN6f1Zh6mXpknhEZRoBbu2Qwdsfg~u8E7lZemZ5g9RWHTcsktB6aPw8QlrJYZ1jqJaV48nwnp9Dxkf7icYrqiG6g40CL30e7dRWk-w__"
            alt=""
          />

          <div className="absolute bottom-[32px] left-[32px] w-[242px]">
            <h1 className="text-[24px] font-semibold text-white">
              Playstation 5
            </h1>
            <p className="text-sm text-white mt-[10px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Button className="p-0 mt-[10px]" type="link">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex-1 w-full bg-black relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MhVLqCvmOuJ7rRD6hACMRV3ALMZmMceCUG3lcbUAMCH8sRdGg8byPubZ4Xy~OEgbpHJvXxUX8RBy-1A6yH295kh482rrNNoMA2wcmp70BBEaqGlIlHCTuHcG8EtlhZZdit5chAkIpZbrdilt9jFgTu~hpYMBLjfd3GtFpxo7JFWtXUXfFsiuvWKdSXwT~P5CguHioClXcYdnBsxpMQrVjX7TpPy4RhXyeDEkUDx8N-11kF75L~C3n2pR8gJKmZ20CBVMEY31Ncpqr0e6MiXAA2G3QwXPHePng8QJG4SF29OA5l5WnlG9HTx9cQg~r0jCKo4OoWH0eSDSbeKOOASAvQ__"
              alt=""
              className="h-[288px] ml-auto"
            />

            <div className="absolute bottom-[25px] left-[32px] w-[242px]">
              <h1 className="text-[24px] font-semibold text-white">
                Women’s Collections
              </h1>
              <p className="text-sm text-white mt-[10px]">
                Featured woman collections that give you another vibe.
              </p>
              <Button className="p-0 mt-[10px]" type="link">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="flex-1 flex gap-6">
            <div className="flex-1 bg-black relative flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l0qpA~P6LCrf6MKf19JEYI7RlVM1wE-TYUxJTNJCah5zEXZEKQ5an-wA3rEqkiqUAPkN0IScUn0SLATIjITbNk5C3FIpkDM6uDZt-119w2uERwFjd22rxeC4xF3u4SXGu0PfiP7wjmpQkLsm7bNfHZzv0zn4FiT8GhekRQjvYPrObMFsDA146j9~3ptkWiqs0miutkjdSZUliYvK9e11kodqBBWLkYDvgCHYTjeqzSNURPfu-nfDnvalXkcAsGgwpSQmFqmPGFvY6JUaPYEKAdTR~U1I9JPOunMO3ItvZjRqlhAYGfFjmU2b72t80QOfoVTXtR2QbK2g9cW~doC2~A__"
                alt=""
              />
              <div className="absolute bottom-[25px] left-[32px] w-[242px]">
                <h1 className="text-[24px] font-semibold text-white">
                  Speaker's
                </h1>
                <p className="text-sm text-white">Amazon wireless speakers</p>
                <Button className="p-0" type="link">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-black relative flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HrSq2N5unGRfZuEceRF7B7bVgiMpfMf-yILBcQTeQZzRN20-u0wam7MUTExZbF3cHK1qm~8py9a9REqEf-d1VgGjfZHCeTSExPANsfHRui~5QxJEj4AWhsO7Dfz-ptjzML0dg5NjE9Nvu9l-VUnVYAvW0-4h3IReM9EC69P5dMsGoR2Yc57Z~IguHiYiokBeH~tV0Bn1rn8tKSCP4m6quYAAjcT9PHegvrzLMatOBJLMLL8N58GwtvOrxdAldiK4fT4yPr~VicjlPNIfX69A6nBRAWwzfWbzaZIL~d3X2Cak2rri49ClR4ejrKfLwDJSMSWADs5yEGTOKa8Aqs~aSA__"
                alt=""
                className="w-[222px]"
              />
              <div className="absolute bottom-[25px] left-[32px] w-[242px]">
                <h1 className="text-[24px] font-semibold text-white">
                  Perfume
                </h1>
                <p className="text-sm text-white">GUCCI INTENSE OUD EDP</p>
                <Button className="p-0" type="link">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customs;
