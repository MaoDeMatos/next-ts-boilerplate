import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import tw from "twin.macro";

type CustomImageProps = ImageProps & {
  wrapperProps?: HTMLAttributes<HTMLSpanElement>;
};

const Wrapper = tw.span`relative`;

/**
 * Wrapper that provides default values for the "next/image" component.
 *
 * Use "wrapperProps" to change the image's parent props.
 *
 * @example
 * <CustomImage wrapperProps={{ css: { ...tw`your-classes` } }} {...otherProps} />
 */
export const CustomImage = ({
  wrapperProps,
  src = "#",
  alt = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}: CustomImageProps) => {
  return (
    <Wrapper {...wrapperProps}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        {...props}
      />
    </Wrapper>
  );
};
