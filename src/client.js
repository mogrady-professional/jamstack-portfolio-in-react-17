import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'hu7y7pbg',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skiRa22NDpbYsEKhaLbo6FymKtBwHAxCVTFwhZYNcLCo9JCKJJRSCfS4arAvHyGtD3QPviFdo5QnAeUvNd2yJIihOBaK1z6wqx1N57yvPNlcb6zUZGTUo9d96wZjLTWDInqpSrI3lEPaFZMyNQp4DjItL5vDUz7d3kWPwcjy6RQsolfLiTLZ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
