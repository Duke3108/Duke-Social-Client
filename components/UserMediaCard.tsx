import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/30778022/pexels-photo-30778022.jpeg?_gl=1*gm7sr*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTQ4OTUkajUyJGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/29465872/pexels-photo-29465872.jpeg?_gl=1*573yqz*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTQ5NjAkajYwJGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/28127043/pexels-photo-28127043.jpeg?_gl=1*1bxseq2*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTQ5NzEkajQ5JGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/29914624/pexels-photo-29914624.jpeg?_gl=1*brhp41*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTQ5ODckajMzJGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/29014048/pexels-photo-29014048.jpeg?_gl=1*seg5hh*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTUwMTEkajkkbDAkaDA."
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/28848639/pexels-photo-28848639.jpeg?_gl=1*qrukg8*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTUwNDgkajQ0JGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/33381617/pexels-photo-33381617.jpeg?_gl=1*10t8p8v*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTUwNzAkajIyJGwwJGgw"
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-22 xl:h-24">
          <Image
            src="https://images.pexels.com/photos/31302081/pexels-photo-31302081.jpeg?_gl=1*e7lf4w*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTQ4ODckbzUkZzEkdDE3NTc5NTUwODYkajYkbDAkaDA."
            alt="media"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
