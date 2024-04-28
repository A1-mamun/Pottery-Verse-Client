import { Link } from "react-router-dom";
import image from "../../assets/image1.jpg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
const CraftCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-7 border border-dark-15 flex flex-col h-full w-full">
      <figure className="bg-dark-05 rounded-2xl">
        <img
          className="h-42 lg:h-52 w-full"
          src={image}
          alt="Clay made pottery"
        />
      </figure>
      <div className="border-b-2 border-dashed pb-5 mt-5 grow">
        <h2 className="card-title my-4 text-2xl font-playfair font-bold ">
          Hand made Clay pottery
        </h2>
        <div className="flex justify-between text-dark-8 font-medium">
          <p className="text-dark-8 font-medium"> Clay made pottery</p>
          <p className="text-dark-8 font-medium"> </p>
        </div>
      </div>
      <div className="flex justify-between mt-5 text-dark-8 font-medium">
        <div className="flex items-center gap-1">
          <p>2,000</p>
          <FaBangladeshiTakaSign />
        </div>
        <div className="flex items-center gap-1">
          <p>4.9</p>
          <FcRating />
        </div>
      </div>
      <div className="flex justify-end items-center mt-5">
        <Link>
          <button className="btn btn-success btn-sm">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CraftCard;
