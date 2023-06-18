import React from "react";
import feature3 from "../../public/feature1.jpg";

const OtherBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 2,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 3,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 4,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 5,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 6,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 7,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
    {
      id: 8,
      title: "Understanding the Global Food Waste Epidemic: Causes and Consequences",
      description:
        "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain.Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations.",
      imageUrl: feature3,
    },
   
    // Add more blog objects here
  ];

  return (
    <div className=" min-h-screen p-8">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold mb-4 text-center">Other Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="flex mb-4 p-6 rounded-[20px] bg-[#D9D9D9] shadow-xl">
            <img className="w-1/4 mr-4 rounded-xl" src={blog.imageUrl} alt={blog.title} />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-justify text-ellipsis overflow-hidden">{blog.description}</p>
              <button className="bg-[#f48c06] text-white w-[100px] h-[40px] rounded-xl hover:bg-[#252641] text-white">
                <a href="/article">Read More</a>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlog;
