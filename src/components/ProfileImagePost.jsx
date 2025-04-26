export default function ProfileImagePost({ imageURL, description, isLeft }) {
  return (
    <div
      className={`flex ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } gap-8 align-flex-start`}
    >
      <img
        src={imageURL}
        alt="profile"
        className="profile-page-image rounded-lg"
      />
      <p className="profile-page-image-text text-small">{description}</p>
    </div>
  );
}
