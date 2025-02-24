import React from 'react';

interface ImageProps {
  title: string;
  url: string;
  description: string;
}

const Image: React.FC<ImageProps> = ({ title, url, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <h3>{description}</h3>
    </>
  );
};

export default Image;