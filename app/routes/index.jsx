// import { Outlet, useLoaderData } from "@remix-run/react";
// import { getAllPosts } from "~/api/posts/get-all-posts.server";

// export async function loader() {
//   const response = await getAllPosts();
//   return response.json();
// }

export default function HomeRoute() {
  // const { data } = useLoaderData();
  return (
    <div>Welcome to Paul's Remix Starter Base Template</div>
  );
}
