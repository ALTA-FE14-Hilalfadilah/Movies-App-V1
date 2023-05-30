import { FC, useContext } from "react";
import Button from "./Button";
import { DarkModeContext } from "../utils/Darkmode";

interface CardProps {
  id: string;
  title?: string;
  description?: string;
  image?: string;
}

const Card: FC<CardProps> = ({ id, title, description, image }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? "bg-zinc-600 card shadow-md" : "bg-gray-200 card shadow-md"
      }
    >
      <div className="card w-[310px]" id={id}>
        <figure className="p-10">
          <img
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="">
            ⭐<br />
            {description}
          </p>
          <div className="card-actions justify-center mt-4 pb-4">
            <Button id="Watch Now" Label="Watch Now" />
            <Button id="Add to Favorite" Label="Add to Favorite" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
