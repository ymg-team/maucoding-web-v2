import { clientApiCaller } from "@helpers/clientApiCaller";
import { objToQuery } from "string-manager";

export const fetchPosts = async ({ query }) => {
  const Response = await clientApiCaller({
    endpoint: `/api/posts?${objToQuery(query)}`,
  });
  return Response;
};

// export const fetchPostDetail = async ({ query }) => {
//   const Response = await clientApiCaller({
//     endpoint: `/api/post?${objToQuery(query)}`,
//   });
//   return Response;
// };