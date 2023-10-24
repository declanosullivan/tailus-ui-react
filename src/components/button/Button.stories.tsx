import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";


const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['solid', 'soft', 'outlined', 'ghost'] 
    },
    colorVariant: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray", "neutral"] 
    },
    icon: { 
      control: 'select', 
      options: ["none", "only", "leading", "trailing"] 
    },
    size: { 
        control: 'select', 
        options: ["xs", "sm", "md", "lg", "xl"] 
      },
    disabled: {
        control: 'boolean'
    },
    label: { control: 'text' },
    href: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Solid: Story = {
  args: {
    variant: 'solid',
    colorVariant: 'primary',
    icon: 'none',
    size: "md",
    label: "Open",
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    colorVariant: 'primary',
    icon: 'none',
    size: "md",
    label: "Open",
  },
};

export const Oulined: Story = {
    args: {
      variant: 'outlined',
      colorVariant: "primary",
      icon: 'none',
      size: "md",
      label: "Open",
    },
  };

  export const Ghost: Story = {
    args: {
      variant: 'ghost',
      colorVariant: "primary",
      size: "md",
      label: "Open",
    },
  };
  
