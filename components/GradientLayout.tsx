import Image from "next/image";

const GradientLayout = ({
  gradient,
  background,
  children,
  image,
  subtitle,
  title,
  description,
  roundedImage,
}) => {
  return (
    <div
      className={`h-full overflow-y-auto bg-gradient-to-b ${gradient} to-black`}
    >
      <div className={`flex items-center p-10 ${background}`}>
        <div className="p-5">
          <Image
            src={image}
            height={176}
            width={176}
            alt="profile image"
            className={`h-44 w-44 shadow-2xl ${
              roundedImage ? "rounded-full" : "rounded"
            }`}
          />
        </div>
        <div className="text-white">
          <p className="text-xs uppercase">{subtitle}</p>
          <p className="text-8xl font-bold">{title}</p>
          <p className="mt-10 text-xs font-light capitalize">{description}</p>
        </div>
      </div>
      <div className="py-12">{children}</div>
    </div>
  );
};

export default GradientLayout;
