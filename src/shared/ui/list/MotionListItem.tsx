import { motion } from "framer-motion";

interface MotionListItemProps {
  key?: string;
  content: string;
  onClickList?: () => void;
  onClickText?: () => void;
  isRemoveable?: boolean | false;
  onRemove?: () => void;
  customListClassName?: string;
  customTextClassName?: string;
}

export function MotionListItem({
  key,
  content,
  onClickList,
  onClickText,
  isRemoveable,
  onRemove,
  customListClassName,
  customTextClassName,
}: MotionListItemProps) {
  return (
    <motion.li
      key={key}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex justify-between items-center p-2 border rounded-md bg-white ${customListClassName} ${
        onClickList && "cursor-pointer"
      }`}
      onClick={onClickList ? () => onClickList() : undefined}
    >
      <span
        className={`${
          onClickText && "cursor-pointer"
        } text-gray-800 dark:text-gray-800 ${customTextClassName}`}
        onClick={
          onClickText
            ? (event) => {
                event.stopPropagation();
                onClickText();
              }
            : undefined
        }
      >
        {content}
      </span>

      {isRemoveable && (
        <button
          onClick={
            onRemove
              ? (event) => {
                  event.stopPropagation();
                  onRemove();
                }
              : undefined
          }
          className="pl-2 text-red-500 hover:text-red-600 bg-transparent"
        >
          삭제
        </button>
      )}
    </motion.li>
  );
}
