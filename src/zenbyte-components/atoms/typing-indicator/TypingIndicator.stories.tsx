import type { Meta, StoryObj } from "@storybook/react";
import { TypingIndicator } from "./TypingIndicator";

/**
 * TypingIndicator component displays an animated three-dot indicator
 * to show that the AI is processing/typing a response.
 *
 * This component is typically shown while waiting for an AI response
 * in a chat interface, similar to typing indicators in messaging apps.
 */
const meta: Meta<typeof TypingIndicator> = {
  title: "Zenbyte/Atoms/TypingIndicator",
  component: TypingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Optional className for custom styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypingIndicator>;

/**
 * Default typing indicator
 */
export const Default: Story = {
  args: {},
};

/**
 * Typing indicator with custom margin
 */
export const WithMargin: Story = {
  args: {
    className: "m-4",
  },
};

/**
 * Multiple typing indicators to show animation timing
 */
export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TypingIndicator />
      <TypingIndicator />
      <TypingIndicator />
    </div>
  ),
};

/**
 * Typing indicator in a chat context
 */
export const InChatContext: Story = {
  render: () => (
    <div className="w-80 bg-white p-4 rounded-lg shadow-zb-200">
      <div className="mb-4">
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-zb-indigo-500 flex-shrink-0" />
          <div className="bg-zb-indigo-500 text-white px-4 py-2 rounded-zb-cards">
            Hello, how can I help you?
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-zb-gray-200 flex-shrink-0" />
        <TypingIndicator />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example showing the typing indicator in a realistic chat context",
      },
    },
  },
};
