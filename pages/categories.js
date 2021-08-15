import Head from "next/head";

export default function Categories({}) {
  const categoriesContents = [
    {
      title: "Interview",
      img: "https://images.unsplash.com/photo-1554446422-d05db23719d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Politics",
      img: "https://images.unsplash.com/photo-1501776553610-5b5c2107f93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9saXRpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Philosophy",
      img: "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhpbG9zb3BoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Culture",
      img: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGN1bHR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap h-32 gap-2 mx-10 my-10">
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {categoriesContents.map((category) => {
        return (
          <div className="relative flex-grow">
            <img
              className="w-full h-32 rounded-lg object-cover brightness-75 hover:brightness-50"
              src={category.img}
              alt={category.title}
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-3xl text-gray-100">{category.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
