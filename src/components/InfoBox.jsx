import CroppedImage from './CroppedImage';

export default function InfoBox({ imageSrc, alt, action, route, body }) {

  function imageClicked() {
    if (action) {
      action(imageSrc, alt);
    }
  }

  function openRoute() {
    if (route) {
      window.open(route, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="info-box">
      <CroppedImage
        imageSrc={imageSrc}
        alt={alt}
        action={imageClicked}
      />
      <div
        className={route ? "info-text" : "info-text-no-link"}
        onClick={openRoute}
      >
        {body}
      </div>
    </div>
  );
}