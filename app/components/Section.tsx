import React from "react";
import Btn from "./Btn";
import { IDataProps } from "../options/data";

interface ISectionProps {
  title: string;
  content: IDataProps[];
}

function Section({ title, content }: ISectionProps) {
  return (
    <section className="w-[800px] h-full border border-white flex flex-col gap-3 items-start justify-start">
      <h2 className="text-2xl font-light">{title}</h2>
      <div className="w-full flex flex-row gap-3 items-center">
        {content.map((item, index) => (
          <Btn key={index} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

export default Section;
