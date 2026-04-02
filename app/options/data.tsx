import Image from "next/image";

interface IDataProps {
  label: string;
  icon: React.ReactNode;
}

const frontendOptions: IDataProps[] = [
  {
    label: "Image1",
    icon: <Image src="/image1.svg" alt="Image1" width={32} height={32} />,
  },
  {
    label: "Image2",
    icon: <Image src="/image2.svg" alt="Image2" width={32} height={32} />,
  },
];

export { frontendOptions };
export type { IDataProps };
