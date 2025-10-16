# AI Chat Component - Implementation Plan

## Overview
Building an AI chat component following atomic design principles with typing indicators, message history, and mobile-first responsive design.

## Research Findings - Best Practices

### UX Best Practices
1. **Typing Indicator**: Use animated dots (3 dots with staggered animation) to show AI is processing
2. **Message Display**: Clear visual distinction between user and AI messages
3. **Timestamps**: Show time for each message for context
4. **Avatars**: Use avatars to identify message sender (user vs AI)
5. **Auto-scroll**: Automatically scroll to newest message
6. **Mobile-First**: Ensure touch-friendly on mobile devices
7. **Accessibility**: Screen-reader friendly, keyboard navigation support
8. **Loading States**: Clear indication when waiting for response

### Technical Implementation
1. **Message Structure**: `{ user: string, message: string, timestamp: Date }`
2. **Typing Animation**: 3 dots with CSS keyframe animations (staggered delays: 0ms, 200ms, 400ms)
3. **State Management**: Control loading state externally via props
4. **Method Exposure**: Use imperative handle or callback props to add messages
5. **Scrolling**: UseRef + scrollIntoView for auto-scroll behavior

## Component Breakdown (Atomic Design)

### Atoms
1. **ChatMessage** - Individual message bubble component
   - Props: message, user, timestamp, isUser (boolean for styling)
   - Uses: Avatar atom, typography tokens
   - Styling: Different background colors for user vs AI messages

2. **TypingIndicator** - Animated dots showing AI is typing
   - Props: None (pure presentation)
   - Animation: 3 dots with bounce animation
   - Uses Tailwind keyframe animations

### Molecules
3. **ChatMessageList** - Scrollable list of messages
   - Props: messages array
   - Composes: ChatMessage atoms
   - Handles: Auto-scroll behavior, message rendering

4. **ChatInput** - Input field for user messages
   - Props: onSend callback, disabled state, placeholder
   - Composes: Input atom, Button atom
   - Handles: Enter key submission, input validation

### Organism
5. **ChatContainer** - Complete AI chat interface
   - Props:
     - messages: ChatMessage[]
     - isLoading: boolean
     - onSendMessage: (message: string) => void
     - title?: string
     - placeholder?: string
   - Composes: ChatMessageList molecule, ChatInput molecule, TypingIndicator atom
   - Manages: Message display, loading state, input handling

## Tasks

### Phase 1: Atoms
- [ ] Create ChatMessage atom component
  - [ ] Create ChatMessage.tsx in atoms/chat-message/
  - [ ] Implement message bubble styling (mobile-first)
  - [ ] Add Avatar integration
  - [ ] Add timestamp display
  - [ ] Add isUser prop for styling variants
  - [ ] Create ChatMessage.stories.tsx with examples

- [ ] Create TypingIndicator atom component
  - [ ] Create TypingIndicator.tsx in atoms/typing-indicator/
  - [ ] Implement 3-dot animation with Tailwind
  - [ ] Add staggered animation delays
  - [ ] Mobile-responsive sizing
  - [ ] Create TypingIndicator.stories.tsx

### Phase 2: Molecules
- [ ] Create ChatMessageList molecule component
  - [ ] Create ChatMessageList.tsx in molecules/chat-message-list/
  - [ ] Implement scrollable container
  - [ ] Add auto-scroll to bottom functionality
  - [ ] Integrate ChatMessage atoms
  - [ ] Add empty state handling
  - [ ] Create ChatMessageList.stories.tsx

- [ ] Create ChatInput molecule component
  - [ ] Create ChatInput.tsx in molecules/chat-input/
  - [ ] Compose Input and Button atoms
  - [ ] Handle Enter key submission
  - [ ] Handle disabled state
  - [ ] Add validation (non-empty messages)
  - [ ] Mobile-responsive layout
  - [ ] Create ChatInput.stories.tsx

### Phase 3: Organism
- [ ] Create ChatContainer organism component
  - [ ] Create ChatContainer.tsx in organisms/chat-container/
  - [ ] Compose ChatMessageList and ChatInput molecules
  - [ ] Integrate TypingIndicator atom
  - [ ] Manage message state display
  - [ ] Handle loading state
  - [ ] Add proper spacing and layout
  - [ ] Ensure NO raw HTML (only atoms/molecules)
  - [ ] Create ChatContainer.stories.tsx with interactive examples

### Phase 4: Integration & Export
- [ ] Add TypeScript types export (ChatMessage interface)
- [ ] Export all components in zenbyte-components/index.ts
- [ ] Export with Zenbyte prefix in main index.ts
- [ ] Test all components in Storybook
- [ ] Verify mobile responsiveness
- [ ] Verify accessibility (keyboard nav, screen readers)

### Phase 5: Documentation & Testing
- [ ] Update component documentation
- [ ] Create comprehensive Storybook examples
- [ ] Test integration with external state management
- [ ] Verify Tailwind token usage (all zb- prefixed)
- [ ] Build and verify no errors

## Component API Design

### ChatMessage Interface
```typescript
interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  isUser: boolean;
}
```

### ChatContainer Props
```typescript
interface ChatContainerProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  title?: string;
  placeholder?: string;
  className?: string;
}
```

## Design Tokens to Use
- Colors: `zb-indigo-*`, `zb-gray-*`, `zb-white`
- Typography: `text-zb-mobile-bodyRegular`, `text-zb-desktop-bodyRegular`
- Spacing: `gap-zb-v-16`, `p-zb-h-16`
- Border radius: `rounded-zb-cards`
- Shadows: `shadow-zb-200`

## Notes
- Follow mobile-first approach (base styles, then md: breakpoints)
- Use Avatar atom for user/AI identification
- Organisms should contain ZERO raw HTML elements
- All components need proper JSDoc comments on props
- Use Zenbyte prefix for exports
