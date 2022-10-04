import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useCallback,
  useState,
} from 'react';

import { Loader, LoaderVariant } from 'components/Loader';

import './Image.style.css';

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt?: string;
  loaderVariant?: LoaderVariant;
}

export function Image({
  src,
  alt = 'Sem descrição para a imagem',
  loaderVariant = 'bubbles',
  ...props
}: ImageProps) {
  const [loadingImage, setLoadingImage] = useState(true);

  const handleImageLoad = useCallback(() => {
    setLoadingImage(false);
  }, []);

  return (
    <>
      {loadingImage && <Loader variant={loaderVariant} />}

      <img
        {...props}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
      />
    </>
  );
}
