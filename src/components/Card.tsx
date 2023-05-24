import { Component } from "react";

interface CardProps {
  id: string;
  title?: string;
  description?: string;
  image?: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, title, description, image } = this.props;

    return (
      <div>
        <div className="card w-[310px] bg-gray-200 shadow-xl" id={id}>
          <figure className="p-10">
            <img
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description} / 10</p>
            <div className="card-actions justify-center mt-4 pb-4">
              <button className="btn btn-primary">Watch Now</button>
              <button className="btn btn-primary">Add to favorite</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
