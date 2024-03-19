const Image = ({ src, width, height, borderRadius, alt, ...props }) => {
  const imageStyle = {
    display: "block",
    width: width ? width : "auto",
    height: height ? height : "auto",
    borderRadius: borderRadius ? borderRadius : undefined,
    margin: "auto",
    objectFit: "fill",
    objectPosition: "50% 50%",
  };

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      style={{ ...imageStyle }}
      border-radius={{ borderRadius }}
    />
  );
};

export default Image;
