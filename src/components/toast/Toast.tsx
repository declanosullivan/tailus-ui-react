import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {toast as theme} from "@tailus/themer-toast";
import {cn} from "../../lib/utils.ts";

const ToastProvider = ToastPrimitive.Provider;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Root
      ref={forwardedRef}
      className={cn(theme.root, props.className)}
      {...props}
    />
  );
});

const ToastHeader = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={cn(theme.header, props.className)}
      {...props}
    />
  );
});

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Title
      ref={forwardedRef}
      className={cn(theme.title, props.className)}
      {...props}
    />
  );
});

const ToastActions = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={cn(theme.actions, props.className)}
      {...props}
    />
  );
});

const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot,
  Header: ToastHeader,
  Title: ToastTitle,
  Actions: ToastActions,
}

export default Toast;

export {
  ToastProvider,
  ToastRoot,
  ToastHeader,
  ToastTitle,
  ToastActions,
}