import Flayers from "./customs/flayers";
import Sidebar from "./customs/sidebar";

const Flayer = () => {
  return (
    <div className="w-[90%] m-auto h-[384px] flex items-center">
      <Sidebar />
      <div className="h-full border-r border-solid" />
      <Flayers />
    </div>
  );
};

export default Flayer;
