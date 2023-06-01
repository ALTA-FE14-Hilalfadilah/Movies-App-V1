import { useSelector } from "react-redux";
import { ListState } from "../features/FavoriteSlice";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Favorite = () => {
  const Favorite = useSelector(
    (state: { favorite: ListState }) => state.favorite
  );

  return (
    <Layout>
      <Navbar />
      <div className="mt-32 flex flex-row gap-x-5">
        {Favorite
          ? Favorite?.items?.map((item) => {
              return (
                <Card
                  id=""
                  key={item.id}
                  description={item.description}
                  image={item.image}
                />
              );
            })
          : null}
      </div>
    </Layout>
  );
};

export default Favorite;
