import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

interface ButtonPropsInterface {
  onClick: () => void;
  hidden: boolean;
}

export const LeftButton = (props: ButtonPropsInterface) => {
  if (props.hidden) return null;

  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center p-3 bg-transparent rounded-md hover:bg-[#9747FF] transition-colors duration-300"
    >
      <img src={arrowLeft} alt="Arrow Left" className="w-6 h-6" />
    </button>
  );
};

export const RightButton = (props: ButtonPropsInterface) => {
  if (props.hidden) return null;

  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center p-3 bg-transparent rounded-md hover:bg-[#9747FF] transition-colors duration-300"
    >
      <img src={arrowRight} alt="Arrow Right" className="w-6 h-6" />
    </button>
  );
};
