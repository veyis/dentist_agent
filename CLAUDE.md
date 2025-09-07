# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the Next.js development server on localhost:3000
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Setup
1. Install dependencies: `npm install`
2. Set environment variable: `OPENAI_API_KEY` in `.env` file (copy from `.env.sample`)

## Architecture Overview

This is a Next.js application demonstrating advanced voice agent patterns using the OpenAI Realtime API and OpenAI Agents SDK.

### Core Patterns

1. **Chat-Supervisor Pattern** (`src/app/agentConfigs/chatSupervisor/`)
   - A realtime chat agent (gpt-4o-realtime-mini) handles basic conversation
   - Complex tasks are delegated to a supervisor agent (gpt-4.1) via `getNextResponseFromSupervisor`
   - Supervisor has full tool access and higher intelligence for complex operations

2. **Sequential Handoff Pattern** (`src/app/agentConfigs/customerServiceRetail/`, `simpleHandoff.ts`)
   - Specialized agents transfer users between them based on intent
   - Each agent has specific domain expertise (authentication, returns, sales)
   - Handoffs managed via tool calls and agent graph definitions

### Key Components

- **Agent Configs** (`src/app/agentConfigs/`): Define agent behaviors, tools, and handoff logic
- **API Routes** (`src/app/api/`):
  - `/api/session`: Creates ephemeral OpenAI Realtime API sessions
  - `/api/responses`: Handles supervisor agent completions
- **Realtime Session Hook** (`src/app/hooks/useRealtimeSession.ts`): Manages WebRTC connection and event handling
- **Main App** (`src/app/App.tsx`): UI orchestration, guardrail checks, and event management

### Agent Configuration

All agent scenarios are registered in `src/app/agentConfigs/index.ts`. Each config uses the `@openai/agents` SDK's `RealtimeAgent` class with:
- `name`: Agent identifier
- `instructions`: System prompt defining behavior
- `tools`: Available function definitions
- `handoffs`: Other agents this agent can transfer to

### Important Notes

- The app uses WebRTC for real-time audio streaming with the OpenAI Realtime API
- Guardrail checks are implemented in `App.tsx` for output safety
- Tool logic can be defined in agent configs for custom functionality
- Default scenario is `chatSupervisor` (configurable in UI)