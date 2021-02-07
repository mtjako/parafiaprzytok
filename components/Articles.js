import Link from "next/link";
import { Header } from "./Header";

export const Articles = ({ posts }) => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-8 lg:pb-8">
        <Header category="Ogłoszenia parafialne" title="Aktualności" />
        <div className="mx-auto grid gap-5  lg:grid-cols-3 md:grid-cols-2 max-w-none">
          {posts == null ? (
            <p className="text-3xl font-extrabold text-red-400">Błąd połącznia z bazą danych</p>
          ) : (
            posts.map((post) => <ArticlesTile key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </>
  );
};

const ArticlesTile = ({ post }) => {
  const date = post.date.split("T")[0];
  const thumbnail =
  post.featuredImage != null
    ? post.featuredImage.node.sourceUrl
    : "/defaultPost.jpg";
  return (
    <>
      <Link href={`/post/${post.slug}`}>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-600">{post.categories.nodes[0].name}</p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <span>
                  <span className="sr-only">{post.author.node.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.node.avatar.url}
                    alt=""
                  />
                </span>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">
                  <p href="#" className="hover:underline">
                    {post.author.node.name}
                  </p>
                </div>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={date}>{date}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
