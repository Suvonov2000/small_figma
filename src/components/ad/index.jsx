const Ad = () => {
  return (
    <div className="w-[90%] h-[500px] m-auto bg-black flex items-center justify-center mt-[100px] ">
      <div className="flex-1 h-full py-[60px] pl-[54px] flex flex-col gap-[30px]">
        <h3 className="text-[#00FF66] text-base font-semibold">Categories</h3>
        <h1 className="text-white text-[48px] w-[443px]">
          Enhance Your Music Experience
        </h1>
        <div className="flex gap-[20px]">
          <div className="w-[62px] h-[62px] rounded-[50px] bg-white flex flex-col items-center justify-center">
            <h1 className="text-[16px] font-semibold">23</h1>
            <h1 className="text-[12px]">Hours</h1>
          </div>
          <div className="w-[62px] h-[62px] rounded-[50px] bg-white flex flex-col items-center justify-center">
            <h1 className="text-[16px] font-semibold">05</h1>
            <h1 className="text-[12px]">Days</h1>
          </div>
          <div className="w-[62px] h-[62px] rounded-[50px] bg-white flex flex-col items-center justify-center">
            <h1 className="text-[16px] font-semibold">59</h1>
            <h1 className="text-[12px]">Minutes</h1>
          </div>
          <div className="w-[62px] h-[62px] rounded-[50px] bg-white flex flex-col items-center justify-center">
            <h1 className="text-[16px] font-semibold">35</h1>
            <h1 className="text-[12px]">Seconds</h1>
          </div>
        </div>
        <div className="w-[171px] h-[56px] rounded-sm flex items-center justify-center bg-[#00FF66]">
          <h1 className="text-white ">Buy Now</h1>
        </div>
      </div>
      <div className="flex-1  ">
        <img
          src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i5FsTxTabyUJOpvACWCzXv61IIHr4ScEJdN1Baa01S7fIOf~MlqrJ8VWgdUf~hx7w32KKrzPyZjuJIwHP7NQWFyAJ6Q~HNs9yvPzlaaUIb6JaydRVprRMBxZHkIr5mKFUgEc9rYnL6slDRZsKGeCd7VwvBYFBfg0HZcwWyD37VfMCGoHX8RHLkPqHZeHZ4Zdb9x4v8hAcAuExnWzim8IPZr4DLmWuFodWM41dYKbsSYCEwooMrZmOkweMmrrqEoLx4tLFxqznni8o375eVMOO4T-clRnsYBJIXCbhHSoZbVMFaIw6OgKUw-jcL9asAtzdTP~sVHy5ws5w06nFUHhvw__"
          alt=""
        />
      </div>
    </div>
  );
};

export default Ad;
