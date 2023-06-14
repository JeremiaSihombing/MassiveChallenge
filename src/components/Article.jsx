import React from "react";
import feature3 from "../../public/features3.png";

const Article = () => {
  const imageSrc = feature3;
  const imageAlt = "Judul Gambar";
  const title = "Understanding the Global Food Waste Epidemic: Causes and Consequences";
  const description =
    "The global food waste epidemic is a worrying phenomenon in the context of the current global food system. Food waste includes food that is wasted, lost, or not used efficiently in the food supply chain . Food waste not only poses significant environmental challenges but also has profound economic and social implications. The sheer magnitude of the global food waste epidemic is staggering, with an estimated 1.3 billion metric tons of food wasted annually, according to the Food and Agriculture Organization (FAO) of the United Nations. One of the major contributors to food waste is the inefficient food supply chain. From production and processing to distribution and consumption, various stages in the food system are plagued by inefficiencies, leading to substantial amounts of food being discarded. In developing countries, much of the waste occurs during the early stages, such as post-harvest losses due to inadequate storage facilities and infrastructure. On the other hand, in developed countries, a significant portion of food waste stems from consumer behavior, including excessive purchasing, improper storage, and disposal of edible food.The environmental consequences of food waste are multifaceted. First and foremost, food waste contributes to greenhouse gas emissions. As discarded food decomposes in landfills, it releases methane, a potent greenhouse gas that significantly contributes to global warming. Moreover, the resources utilized in food production, such as water, energy, and land, are squandered when food is wasted. This inefficient use of resources exacerbates the strain on ecosystems, exacerbating issues such as deforestation, water scarcity, and biodiversity loss. From an economic perspective, food waste represents a significant loss of valuable resources. The economic value of global food waste amounts to approximately $1 trillion annually. This loss not only affects producers and suppliers but also has implications for consumers in terms of increased food prices and decreased affordability. Furthermore, the economic impact extends to governments, as they must allocate significant resources to manage waste disposal and address the social consequences of food insecurity.Addressing the global food waste epidemic requires a comprehensive and collaborative approach involving all stakeholders, including governments, businesses, civil society organizations, and consumers. Strategies to reduce food waste should encompass the entire food supply chain, starting from sustainable agricultural practices that minimize losses during production to improved infrastructure and logistics for efficient distribution. Additionally, raising awareness and promoting behavior change among consumers is crucial to reduce food waste at the household level.In conclusion, the global food waste epidemic is a complex and urgent challenge that requires immediate action. By addressing food waste throughout the supply chain, adopting sustainable practices, and changing consumer behavior, we can mitigate the environmental, economic, and social impacts of this phenomenon. Achieving a more sustainable and efficient food system is not only essential for our planet but also for the well-being of present and future generations.";

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-10 mb-11">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <img src={imageSrc} alt={imageAlt} className=" mb-4" />

        <p className="text-lg text-gray-700 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Article;
