import Image from "next/image";

import logo from "@/app/assets/logo.png";

export const Hero = () => {
  return (
    <section className="h-[500px] flex items-center" id="hero">
      <div className="w-full bg-primary-400 xl:h-[420px] rounded-[40px] flex items-center">
        <Image
          alt="logo"
          className="rounded-[40px]"
          height={450}
          src={logo}
          width={450}
        />
        <p className="text-center w-1/2 p-4">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          atque sed aliquam, sit mollitia neque, porro facere, nihil quae
          reprehenderit cupiditate assumenda pariatur fugiat reiciendis officia
          in ad autem. Error.
        </p>
      </div>
    </section>
  );
};
