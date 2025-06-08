export async function applyLogoToImage(
  imageFile: File,
  logoUrl: string,
  logoScale = 0.25,
  maxWidth = 1600
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const img = new Image();
    const logo = new Image();

    reader.onload = () => {
      img.src = reader.result as string;
    };
    reader.readAsDataURL(imageFile);

    img.onload = () => {
      logo.crossOrigin = 'anonymous';
      logo.src = logoUrl;
    };

    logo.onload = () => {
      // Resize image to maxWidth
      const scaleFactor = img.width > maxWidth ? maxWidth / img.width : 1;
      const resizedWidth = img.width * scaleFactor;
      const resizedHeight = img.height * scaleFactor;

      const canvas = document.createElement('canvas');
      canvas.width = resizedWidth;
      canvas.height = resizedHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Canvas context failed');

      // Draw resized base image
      ctx.drawImage(img, 0, 0, resizedWidth, resizedHeight);

      // Calculate logo size
      const newLogoWidth = resizedWidth * logoScale;
      const newLogoHeight = logo.height * (newLogoWidth / logo.width);
      const x = resizedWidth - newLogoWidth;
      const y = resizedHeight - newLogoHeight;

      // Draw logo
      ctx.drawImage(logo, x, y, newLogoWidth, newLogoHeight);

      // Export as compressed JPEG (or change to 'image/webp')
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject('Failed to convert canvas to blob');
          resolve(blob);
        },
        'image/jpeg',
        0.85 // Compression quality: 0.7–0.9 is usually enough
      );
    };

    img.onerror = reject;
    logo.onerror = reject;
  });
}
