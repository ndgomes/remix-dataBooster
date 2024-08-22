import { ExerciseAnswer } from "~/lib/definitions";

interface MultipleChoiceExerciseProps {
  answers: ExerciseAnswer[];
  exerciseTitle: string;
  description?: string;
}

export const MultipleChoiceExercise = ({
  answers,
  exerciseTitle,
  description,
}: MultipleChoiceExerciseProps) => (
  <div className="flex flex-col justify-center w-full p-4">
    <div className="mb-8 text-white font-bold text-2xl md:text-4xl">
      <h2>{exerciseTitle}</h2>
    </div>

    {description && (
      <div className="mb-10 text-white font-normal text-1xl md:text-2xl">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )}

    <p className="text-white/60 font-normal text-xl mb-3">Pick one option</p>

    <div className="w-full">
      {answers.map((answer) => (
        <label
          key={answer.id}
          className="flex items-center mb-3 p-8 bg-[#9548F5] rounded-md cursor-pointer"
        >
          <input
            type="radio"
            name="exercise"
            value={answer.answer}
            className="hidden peer"
          />
          <span className="min-w-6 min-h-6 flex items-center justify-center border-2 border-white/25 rounded-full peer-checked:border-[#9548F5] peer-checked:bg-[#fff] relative mr-6" />
          <span className="text-white text-xl">{answer.answer}</span>
        </label>
      ))}
    </div>
  </div>
);
