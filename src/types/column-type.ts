import { UniqueIdentifier } from "@dnd-kit/core";

export type ColumnType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};
