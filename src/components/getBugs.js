import bugsAPI from "../apis/bugs";

const getBugs = async (setBugs) => {
  try {
    const { data } = await bugsAPI.get("/bugs");
    setBugs(data.bugs);
  } catch (error) {
    console.log(error);
  }
};

export default getBugs;
