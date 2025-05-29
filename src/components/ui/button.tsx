import * as React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomSize = "default" | "sm" | "lg" | "icon";
type CustomVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "orange";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size"> {
  variant?: CustomVariant;
  size?: CustomSize;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    prop !== "customVariant" && prop !== "customSize",
})<{ customVariant?: CustomVariant; customSize?: CustomSize }>(
  ({ theme, customVariant = "default", customSize = "default" }) => ({
    gap: "0.5rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1rem",
    },
    ...(customVariant === "default" && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(customVariant === "destructive" && {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    }),
    ...(customVariant === "outline" && {
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
    ...(customVariant === "secondary" && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    }),
    ...(customVariant === "ghost" && {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
    ...(customVariant === "link" && {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      textDecoration: "underline",
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    }),
    ...(customVariant === "orange" && {
      backgroundColor: "#fb923c", // orange-400
      color: "white",
      "&:hover": {
        backgroundColor: "#f97316", // orange-500
      },
    }),
    ...(customSize === "default" && {
      height: "2.5rem",
      padding: "0.5rem 1rem",
    }),
    ...(customSize === "sm" && {
      height: "2.25rem",
      padding: "0.25rem 0.75rem",
      fontSize: "0.875rem",
    }),
    ...(customSize === "lg" && {
      height: "2.75rem",
      padding: "0.5rem 2rem",
    }),
    ...(customSize === "icon" && {
      height: "2.5rem",
      width: "2.5rem",
      padding: 0,
    }),
  })
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", ...props }, ref) => {
    const muiVariant =
      variant === "default" ||
      variant === "destructive" ||
      variant === "secondary" ||
      variant === "orange"
        ? "contained"
        : "text";
    const muiSize =
      size === "default" ? "medium" : size === "sm" ? "small" : "large";

    return (
      <StyledButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        customVariant={variant}
        customSize={size}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
