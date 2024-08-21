import fs from "fs";
import path from "path";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";

import { LessonsData } from "~/lib/definitions";
import { RightButton, LeftButton } from "~/ui/buttons";
import { MultipleChoiceExercise } from "~/ui/multipleChoiceExercise";
import { VideoExercise } from "~/ui/videoExercise";

export const meta: MetaFunction = () => {
  return [
    { title: "Data Booster - Customized Data & AI Upskilling" },
    {
      name: "description",
      content:
        "It's our mission to enable data-driven decision making in your organisation by upskilling your non-tech teams in data AI literacy.",
    },
  ];
};

const serverFilePath = path.resolve(process.cwd(), "app/lib/lessons.json");

export const loader: LoaderFunction = async () => {
  try {
    const fileContent = fs.readFileSync(serverFilePath, "utf-8");
    const data = JSON.parse(fileContent);
    return json(data);
  } catch (error) {
    return json({ error: "Failed to load data" }, { status: 500 });
  }
};

export default function Index() {
  const data: LessonsData = useLoaderData();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const lesson = data.lessons[0];
  const exercises = lesson.exercises;
  const currentExercise = exercises[currentExerciseIndex];

  const handleOnClickPreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleOnClickNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <main className="bg-[#7000DF] min-h-screen flex flex-col font-sans p-[40px]">
      <div className="mt-auto mb-6 md:px-[124px]">
        {currentExercise.resourcetype === "VideoExercise" && (
          <VideoExercise
            url={currentExercise.url || ""}
            lessonTitle={lesson.title}
          />
        )}

        {currentExercise.resourcetype === "MultipleChoiceExercise" && (
          <MultipleChoiceExercise
            answers={currentExercise.answers || []}
            exerciseTitle={currentExercise.title}
            description={currentExercise.description}
          />
        )}
      </div>

      <div className="flex mt-auto">
        <div className="mr-auto">
          <LeftButton
            onClick={handleOnClickPreviousExercise}
            hidden={currentExerciseIndex === 0}
          />
        </div>

        <div className="ml-auto">
          <RightButton
            onClick={handleOnClickNextExercise}
            hidden={currentExerciseIndex === exercises.length - 1}
          />
        </div>
      </div>
    </main>
  );
}
