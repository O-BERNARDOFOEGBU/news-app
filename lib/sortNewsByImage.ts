// function sortNewsByImage(news: NewsResponse) {
//   const newsWithImages = news.data.filter((item) => item.image !== null) ?? [];
//   const newsWithoutImages =
//     news.data.filter((item) => item.image === null) ?? [];

//   // //either we spread or we riginalspread

//   // const newsWithImagesAndText = [...newsWithImages, ...newsWithoutImages]

//   //or we spread

//   const sortedNews = {
//     pagination: news.pagination,
//     data: [...newsWithImages, ...newsWithoutImages],
//   };

//   return sortedNews;
// }

// export default sortNewsByImage;

// Make sure to import the correct type definition

function sortNewsByImage(news: NewsResponse) {
  // Check if news is undefined or null
  if (!news || !news.data) {
    return { pagination: null, data: [] }; // Return an empty array if news is undefined or null
  }

  // Filter news items with images
  const newsWithImages = news.data.filter((item) => item.image !== null);

  // Filter news items without images
  const newsWithoutImages = news.data.filter((item) => item.image === null);

  // Construct sorted news object
  const sortedNews = {
    pagination: news.pagination,
    data: [...newsWithImages, ...newsWithoutImages],
  };

  return sortedNews;
}

export default sortNewsByImage;
