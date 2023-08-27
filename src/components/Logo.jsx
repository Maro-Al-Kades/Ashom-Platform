import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-black text-[#111] hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        منصة اسهـم
      </h2>
    </Link>
  );
};

export default Logo;
