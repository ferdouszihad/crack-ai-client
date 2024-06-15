import { useLoaderData } from "react-router-dom";

const PaintingDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap">
        <div>
          <img src={data?.url} alt="" className="w-full" />
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl">{data?.title}</h2>
          <p>{data?.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
