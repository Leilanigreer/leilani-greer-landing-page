import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'ddp35mzkz'
  }
});

// Helper function to get image URL using the Cloudinary instance
export const getCloudinaryUrl = (publicId) => {
  return cld.image(publicId).toURL();
};

export default cld; 