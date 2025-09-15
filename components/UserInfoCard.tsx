import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500 ">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Tuoc Khuu</span>
          <span className="text-sm">@Dukey</span>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="pin" width={16} height={16} />
          <span>
            Living in <b>Viet Nam</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="pin" width={16} height={16} />
          <span>
            Studied at <b>HUFLIT University</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="pin" width={16} height={16} />
          <span>
            Working at <b>ABC Company</b>
          </span>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-between gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="pin" width={16} height={16} />
            <Link
              href="https://github.com/Duke3108"
              className="text-blue-500 font-medium"
            >
              Duke3108
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="pin" width={16} height={16} />
            <span className="whitespace-nowrap">Joined September 2025</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
