const Image = ({ src, width, height, borderRadius, alt, ...props }) => {
  const imageStyle = {
    display: "block",
    width: width ? width : "120px",
    height: height ? height : "120px",
    borderRadius: borderRadius ? borderRadius : undefined,
    margin: "auto",
    objectFit: "contain",
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
