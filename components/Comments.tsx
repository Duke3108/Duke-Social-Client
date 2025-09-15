import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/29221495/pexels-photo-29221495.jpeg?_gl=1*ho2o7y*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4ODAyNjckbzEkZzEkdDE3NTc4ODE3OTkkajMxJGwwJGgw"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Dukey</span>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              adipisci consequuntur architecto, ullam illo accusantium
              consectetur error quo expedita dignissimos facere distinctio
              tempore at praesentium quis aut quod possimus voluptas.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
