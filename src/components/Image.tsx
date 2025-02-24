import React from 'react';

interface ImageProps {
  title: string;
  url: string;
  description: string;
}

const Image: React.FC<ImageProps> = ({ title, url, description }) => {
  return (
    <>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      <h5>{description}</h5>
    </>
  );
};

export default Image;