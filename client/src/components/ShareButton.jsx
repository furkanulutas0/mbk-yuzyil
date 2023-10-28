import { useState } from "react";

const ShareButton = ({ url, type, title, text }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleSharing = async () => {
    setIsSharing(true);

    try {
      await navigator.share({
        url,
        type,
        title,
        text,
      });
    } catch (error) {
      console.log(error);
    }

    setIsSharing(false);
  };

  return (
    <button
      disabled={isSharing}
      onClick={handleSharing}
    >
      Share
    </button>
  );
};

export default ShareButton;
