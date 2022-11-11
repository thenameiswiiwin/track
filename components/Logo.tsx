import Image from "next/image";

const Logo = ({ text, bg }) => {
  return (
    <>
      <Image
        src="/logo.svg"
        height={40}
        width={80}
        alt="track logo"
        className={`bg-${bg}`}
      />
      <h1 className={`ml-3 font-mono text-4xl font-bold italic text-${text}`}>
        Track
      </h1>
    </>
  );
};

export default Logo;
