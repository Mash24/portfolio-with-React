import { useState } from 'react';

const ProfileAvatar = ({
  src,
  alt = 'Jackson Macharia',
  className = '',
  initials = 'JM',
}) => {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-blue-600 to-violet-700 text-white font-bold ${className}`}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default ProfileAvatar;
