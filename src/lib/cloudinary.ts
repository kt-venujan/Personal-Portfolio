const cloudName = 'f7jvj0wh';

export function cloudinaryImage(publicId: string, extension: string, width = 960): string {
  const encodedPublicId = publicId
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:eco,w_${width},c_limit/portfolio/${encodedPublicId}.${extension}`;
}
