import {emptyState} from "@tailus/themer-empty-state"
import React from "react";
import {cn} from "../../lib/utils.ts";

type Intent = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info" | "gray";

const EmptyStateRoot = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(emptyState.root, className)}
    {...props}
  />
));


interface EmptyStateImageProps {
  intent?: Intent;
}

const EmptyStateImageContainer = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & EmptyStateImageProps
>(({className, intent = "gray", ...props}, ref) => (
  <div
    ref={ref}
    className={cn(emptyState.imageContainer[intent], className)}
    {...props}
  />
));

const EmptyState = {
  Root: EmptyStateRoot,
  ImageContainer: EmptyStateImageContainer,
};

export default EmptyState;

export {
  EmptyStateRoot,
  EmptyStateImageContainer,
}

export type {
  Intent,
}