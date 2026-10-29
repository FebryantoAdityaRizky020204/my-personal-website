import { Camera } from "lucide-react";
import Image from "next/image";

// Tempat foto: kalau `src` kosong, tampil kotak placeholder.
interface PhotoProps {
  src?: string;
  alt: string;
  label: string;
  className?: string;
}

function Photo({ src, alt, label, className = "" }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-700 p-4 text-center text-slate-500">
          <Camera />
          <span className="text-sm">{label}</span>
        </div>
      )}
    </div>
  );
}

export default Photo;
