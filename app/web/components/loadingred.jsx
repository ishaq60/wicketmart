import Image from "next/image";
import svg from "../../../public/Image/Loader-svg/LoaderRed.svg";

export default function Loadingred() {
  return (
    <div>
      <div className="w-30 h-25 animate-spin">
        <Image src={svg} alt="Loading..." width={120} height={80} />
      </div>
    </div>
  );
}