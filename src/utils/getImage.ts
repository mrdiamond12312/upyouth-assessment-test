import urlcat from 'urlcat';

interface IImageOptimizerParams {
  url: string;
  quality?: number;
  width?: number;
}

export const getImageByQuality = ({ url, quality = 100, width = 1536 }: IImageOptimizerParams) => {
  return urlcat('https://www.upyouth.org/_vercel/image?url=:url&w=:width&q=:quality', {
    url,
    quality,
    width,
  });
};

export const getSrcSet = (sizes: number[], url: string) => {
  return sizes.map((width) => `${getImageByQuality({ url, width })} ${width}w`).join(', ');
};
