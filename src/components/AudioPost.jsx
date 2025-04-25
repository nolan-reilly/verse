export default function AudioPost(pathToAudio) {
  return (
    <div>
      <audio controls>
        <source src="/path/to/your-audio-file.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
