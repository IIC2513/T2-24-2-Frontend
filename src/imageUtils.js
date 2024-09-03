export const imagesFormatter = (images) => {
  if (
    images.length > 0 &&
    images[0].startsWith('["') &&
    images[images.length - 1].endsWith('"]')
  ) {
    const firstImage = images[0].substring(2);
    const lastImage = images[images.length - 1].slice(0, -2);
    const formattedArray = [firstImage, ...images.slice(1, -1), lastImage];
    const formattedUrls = formattedArray.map(url => url.replace(/"/g, ''));
    return formattedUrls;
  } else {
    return images;
  }
};
