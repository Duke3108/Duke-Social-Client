import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md">
            <div className="w-full h-64 relative ">
              <Image
                src="https://images.pexels.com/photos/33528159/pexels-photo-33528159.jpeg?_gl=1*1jnmu6u*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTg1MDkkbzYkZzEkdDE3NTc5NTg1MzgkajMxJGwwJGgw"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Dukey</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">5</span>
                <span className="text-sm ">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">527</span>
                <span className="text-sm ">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">200</span>
                <span className="text-sm ">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
