import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/33528159/pexels-photo-33528159.jpeg?_gl=1*1jnmu6u*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTg1MDkkbzYkZzEkdDE3NTc5NTg1MzgkajMxJGwwJGgw"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center mt-2">
        <span className="font-semibold">Dukey</span>
        <div className="flex items-center gap-2">
          <div className="flex ">
            <Image
              src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">527 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
