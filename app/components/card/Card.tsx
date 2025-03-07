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
    <Link to={`/single/${linkId}`}>
      <div className="card rounded-lg relative flex items-end">
        <img className="object-cover rounded-lg" src={imageSrc} alt={altText} />
        <div className="absolute bottom-5 left-5">{cardTitle}</div>
      </div>
    </Link>
  );
}
