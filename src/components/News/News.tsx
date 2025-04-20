import React from "react";
import useQueryBlogPosts from "../../hooks/useQueryBlogPosts";
import Error from "../Error";
import Loader from "../Loader";
import BlogPost from "./BlogPost";

const News: React.FC = () => {
  const { blogPosts, error, isLoading } = useQueryBlogPosts();

  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Discover Our New Adventures
        </h2>
        {isLoading && !error && <Loader />}

        {!isLoading && !error && (
          <ul className="flex flex-col gap-y-34">
            {blogPosts?.map((news) => <BlogPost {...news} key={news.id} />)}
          </ul>
        )}

        {!isLoading && error && (
          <Error>
            It looks like something went wrong while loading our recent news.
          </Error>
        )}
      </div>
    </section>
  );
};

export default News;
