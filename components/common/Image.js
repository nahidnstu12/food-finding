import Image from "next/image";
export default function ImageOptimized({ className, imgSrc, imgAlt }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
        // priority
        className={className}
        // placeholder="blur"
        loading="lazy"
      />
    </div>
  );
}
