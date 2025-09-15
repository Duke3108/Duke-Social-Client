import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {/* POST */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/posts.png" alt="My Post" width={20} height={20} />
          <span>My Post</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* ACTIVITY */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/activity.png" alt="Activity" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* MARKETPLACE */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/market.png" alt="Market" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* EVENTS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/events.png" alt="Events" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* ALBUMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/albums.png" alt="Albums" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* VIDEOS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/videos.png" alt="Videos" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* NEWS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/news.png" alt="News" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* COURSES */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/courses.png" alt="Courses" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* LISTS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/lists.png" alt="Lists" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        {/* SETTINGS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Image src="/settings.png" alt="Settings" width={20} height={20} />
          <span>Settings</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
      </div>
    </div>
  );
};

export default LeftMenu;
