import { forwardRef, VideoHTMLAttributes } from 'react';

const CustomVideo = forwardRef((props: VideoHTMLAttributes<HTMLVideoElement>, ref) => {
  return (
    <video
      ref={ref as React.RefObject<HTMLVideoElement>}
      x5-video-player-type='h5'
      webkit-playsinline='true'
      x-webkit-airplay='true'
      x5-video-player-fullscreen='true'
      x5-playsinlinee='h5'
      muted
      playsInline
      preload='auto'
      {...props}
    ></video>
  );
});

CustomVideo.displayName = 'CustomVideo';

export default CustomVideo;
