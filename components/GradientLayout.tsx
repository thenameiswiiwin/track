import Image from 'next/image';

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundedImage,
}) => {
  return (
    <div
      className={`h-full overflow-y-auto bg-gradient-to-b from-${color}-500 to-black`}
    >
      <div className={`flex bg-${color}-600 items-end p-10`}>
        <div className="p-5">
          <Image
            src={image}
            height={160}
            width={160}
            alt="profile image"
            className={`w-40 h-40 shadow-2xl ${
              roundedImage ? 'rounded-full' : 'rounded'
            }`}
          />
        </div>
        <div className="p-5 leading-10 text-white">
          <p className="text-xs font-bold uppercase">{subtitle}</p>
          <p className="text-6xl">{title}</p>
          <p className="text-xs font-light">{description}</p>
        </div>
      </div>
      <div className="py-12">{children}</div>
    </div>
  );
};

export default GradientLayout;
