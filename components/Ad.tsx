import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="Ad" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/25427762/pexels-photo-25427762.jpeg?_gl=1*1dzgg3h*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTA5MDckbzQkZzEkdDE3NTc5NTEwODAkajU5JGwwJGgw"
            alt="Ad"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25427762/pexels-photo-25427762.jpeg?_gl=1*1dzgg3h*_ga*MTQyMDg0MzAyNi4xNzU3ODgwMjY4*_ga_8JE65Q40S6*czE3NTc5NTA5MDckbzQkZzEkdDE3NTc5NTEwODAkajU5JGwwJGgw"
            alt="Ad"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Meow Meow</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Your cat deserves the best! Discover our premium cat food and accessories to keep your feline friend happy and healthy."
            : size === "md"
            ? "Your cat deserves the best! Discover our premium cat food and accessories to keep your feline friend happy and healthy. Shop now for exclusive deals!"
            : "Your cat deserves the best! Discover our premium cat food and accessories to keep your feline friend happy and healthy. Shop now for exclusive deals and give your cat the love it deserves!"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
