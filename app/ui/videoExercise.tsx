interface VideoExerciseProps {
  url: string;
  lessonTitle: string;
}

export const VideoExercise = ({ url, lessonTitle }: VideoExerciseProps) => (
  <div className="flex justify-center items-center">
    <div className="w-full max-w-[1000px]">
      <h1 className="text-white font-bold text-2xl md:text-4xl mb-8">
        {lessonTitle}
      </h1>

      <iframe
        src={url}
        className="w-full aspect-[16/9]"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Video Exercise"
      />
    </div>
  </div>
);
