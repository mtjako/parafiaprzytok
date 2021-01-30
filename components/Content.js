import { Dots } from "./Dots";

export const Content = ({ post }) => {
  const thumbnail =
    post.featuredImage != null
      ? post.featuredImage.node.srcSet.split(", ")[1].split(" ")[0]
      : "/defaultPost.jpg";
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Dots />
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              {post.categories.nodes[0].name}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
          <img
            className="w-full rounded-lg mt-6"
            src={thumbnail}
            alt=""
            width="1310"
            height="873"
          />
          <div
            className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};
