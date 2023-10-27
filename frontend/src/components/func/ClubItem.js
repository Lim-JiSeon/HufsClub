const ClubItem = (data) => {
  return (
    <div key={data._id}>
      <img src={data.logoUrl} />
      <div>{data.name}</div>
      <div>
        {data.topic.map((title) => (
          <div>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default ClubItem;
