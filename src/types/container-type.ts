import { UniqueIdentifier } from "@dnd-kit/core";

export interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  description?: string;
  onAddItem?: () => void;
}
