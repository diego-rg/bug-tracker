import bugsAPI from "../apis/bugs";

const deleteBug = async (bugId) => {
  try {
    const deleteBugResponse = await bugsAPI.delete(`/bugs/${bugId}`);
    if (deleteBugResponse.status === 200) {
      console.log(deleteBugResponse.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteBug;
