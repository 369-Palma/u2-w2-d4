import { useSelector } from "react-redux";
const FavouriteJobs = () => {
  const myFavList = useSelector((state) => state.favJobs.content);

  return (
    <ul>
      {myFavList.map((jobs, i) => {
        return <li key={i}> {jobs.title}</li>;
      })}
    </ul>
  );
};

export default FavouriteJobs;
