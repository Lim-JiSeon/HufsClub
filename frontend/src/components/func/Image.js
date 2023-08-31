const Image = ({ src, width, height, alt, ...props }) => {
  const imageStyle = {
    display: "block",
    width: width ? width : "120px",
    height: height ? height : "120px",
  };

  return <img {...props} src={src} alt={alt} style={{ ...imageStyle }} />;
};

export default Image;
