
interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: number | string; // allow flexible sizing
}

export default function ProfileImage({ src, alt = "Profile", size = 96 }: ProfileImageProps) {
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
