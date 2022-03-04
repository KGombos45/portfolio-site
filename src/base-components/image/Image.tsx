/* eslint-disable jsx-a11y/alt-text */
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = props => <img {...props} />;
