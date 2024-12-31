import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

export const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={`px-2 py-4 bg-white text-black shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer ${
        isDragging && "opacity-50"
      }`}
      {...listeners}
    >
      <div className="flex items-center justify-between">{title}</div>
    </div>
  );
};
