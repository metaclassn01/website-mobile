import Image, { ImageProps } from 'next/image';

type IProps = ImageProps & {
  className?: string;
};

const CustomImage = (props: IProps) => {
  return <Image alt='' objectFit='contain' objectPosition='center center' {...props} />;
};

export default CustomImage;
