import Comments from "@/components/Comments";
import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30778022/pexels-photo-30778022.jpeg?_gl=1*17pe3x7*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4OTIzNzkkbzIkZzEkdDE3NTc4OTIzOTUkajQ0JGwwJGgw"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Dukey</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4 ">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/28127043/pexels-photo-28127043.jpeg?_gl=1*isq9v*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc4OTIzNzkkbzIkZzEkdDE3NTc4OTM3NDAkajQ2JGwwJGgw"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quos
          blanditiis dolore tempore incidunt reiciendis recusandae cumque? Odit
          non sit placeat, eum soluta, praesentium, consequuntur quas asperiores
          doloribus officia a.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
