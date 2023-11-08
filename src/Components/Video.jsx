import video1 from '../assets/images/Video/video.mp4'

const Video = () => {
    return (
        <div>

            <video controls src={video1}></video>
        </div>
    );
};

export default Video;