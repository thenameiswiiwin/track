import React, { FC } from 'react';
import Image from 'next/image';

type GradientLayoutProps = {
  color: string;
  children: React.ReactNode;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundedImage: boolean;
};

const GradientLayout: FC<GradientLayoutProps> = ({
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
      className={`h-full overflow-y-auto bg-gradient-to-b from-${color}-800 to-black`}
    >
      <div className={`flex items-center bg-${color}-800 items-end p-10`}>
        <div className="p-5">
          <Image
            src={image}
            height={176}
            width={176}
            alt="profile image"
            className={`h-44 w-44 shadow-2xl ${
              roundedImage ? 'rounded-full' : 'rounded'
            }`}
          />
        </div>
        <div className="text-white">
          <p className="text-xs uppercase">{subtitle}</p>
          <p className="text-8xl font-bold">{title}</p>
          <p className="text-xs font-light capitalize mt-10">{description}</p>
        </div>
      </div>
      <div className="py-12">{children}</div>
    </div>
  );
};

export default GradientLayout;
