import { memo, useState, useCallback } from 'react';
import classnames from 'classnames';

import scroll from '@/services/lock-body-scroll';

import styles from './VideoGeneral.module.scss';

import PlayIcon from '@/components/svgs/play-icon.svg';
import PlayCircle from '@/components/svgs/play-circle.svg';

import VideoModal from '@/components/VideoModal/VideoModal';

export type Props = {
  className?: string;
  imLink: string;
  vidId: number;
  alt?: string;
};

function VideoGeneral({ className, imLink, vidId, alt }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openVideo = useCallback(async () => {
    setModalOpen(true);
    scroll.lock();
  }, []);

  const closeVideo: () => void = useCallback(async () => {
    scroll.unlock();
    setModalOpen(false);
  }, []);

  return (
    <div className={classnames(styles.VideoGeneral, className)}>
      <button onClick={openVideo}>
        <PlayCircle className={styles.svgPlayCircle} />
        <PlayIcon className={styles.svgPlayIcon} />
      </button>
      <img src={imLink} alt={alt}></img>
      {modalOpen && <VideoModal id={vidId} closeModal={closeVideo} />}
    </div>
  );
}

export default memo(VideoGeneral);