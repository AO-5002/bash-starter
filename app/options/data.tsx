import Image from "next/image";

interface IDataProps {
  label: string;
  icon: React.ReactNode;
}

const frontendOptions: IDataProps[] = [
  {
    label: "Image3",
    icon: <Image src="/image3.svg" alt="Image3" width={32} height={32} />,
  },
  {
    label: "Image2",
    icon: <Image src="/image2.svg" alt="Image2" width={32} height={32} />,
  },
];

const backendOptions: IDataProps[] = [
  {
    label: "Image1",
    icon: <Image src="/image1.svg" alt="Image1" width={32} height={32} />,
  },
  {
    label: "Image6",
    icon: <Image src="/image6.svg" alt="Image6" width={32} height={32} />,
  },
  {
    label: "Image5",
    icon: <Image src="/image5.svg" alt="Image5" width={32} height={32} />,
  },
];

const authOptions: IDataProps[] = [
  {
    label: "Image1",
    icon: <Image src="/image1.svg" alt="Image1" width={32} height={32} />,
  },
];

const realtimeOptions: IDataProps[] = [
  {
    label: "Image1",
    icon: <Image src="/image1.svg" alt="Image1" width={32} height={32} />,
  },
];

const databaseOptions: IDataProps[] = [
  {
    label: "Image1",
    icon: <Image src="/image1.svg" alt="Image1" width={32} height={32} />,
  },
];

const mlAiOptions: IDataProps[] = [
  {
    label: "Image4",
    icon: <Image src="/image4.svg" alt="Image4" width={32} height={32} />,
  },
];

export {
  frontendOptions,
  backendOptions,
  databaseOptions,
  authOptions,
  realtimeOptions,
  mlAiOptions,
};
export type { IDataProps };
