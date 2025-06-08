import Image from 'next/image';
import storefrontImg from '/public/images/storefront.jpg';

export default function StoreFront({ className = '' }: { className?: string }) {
  return (
    <Image
      src={storefrontImg}
      alt="Simpler Salon"
      className={`object-cover ${className}`}
      width={600}
      height={400}
    />
  );
}
