import instance from "./instance";

export const getCategory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/category");
      dispatch({
        type: "GET_CATEGORY",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
