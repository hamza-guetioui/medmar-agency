import React from "react";
import TRow from "./TRow";

const apiUrl = process.env.API_URL;const getWorks = async () => {
  try {
    const response = await fetch(`${apiUrl}/works`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
// fetch products (SSR)

interface WorkTypes {
  _id: number;
  title: string;
  description: string;
  imageSrc: string;
  videoSrc: string;
  videoDescription: string;
  additionalInfo: string[];
}


type Props = {};

const TBody = async (props: Props) => {
  const works: WorkTypes[] = await getWorks();
  return (
    <tbody>
      {works.map((work, index) => {
        const {
          _id,
          title,
          description,
          imageSrc,
          videoSrc,
          videoDescription,
          additionalInfo,
        } = work;

        return (
          <TRow
            key={_id}
            index={index}
            id={_id}
            title={title}
            description={description}
            imageSrc={imageSrc}
            videoSrc={videoSrc}
            videoDescription={videoDescription}
            additionalInfo={additionalInfo}
          />
        );
      })}
    </tbody>
  );
};

export default TBody;
