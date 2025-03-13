import { Link } from "react-router";

export default function Card({
  imageSrc,
  altText,
  linkId,
  cardTitle,
}: {
  imageSrc: string;
  altText: string;
  linkId: string;
  cardTitle: string;
}) {
  return (
    <Link to={`/single/${linkId}`} className="">
      <div className="card rounded-lg relative flex items-end relative">
        <img
          className="object-cover rounded-lg h-100 max-h-80"
          src={imageSrc}
          alt={altText}
        />
        <div className="absolute bottom-5 left-5 font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
          {cardTitle}
        </div>
      </div>
    </Link>
  );
}
