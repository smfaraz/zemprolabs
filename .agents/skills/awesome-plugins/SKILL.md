---
name: awesome-plugins
description: Curated registry and directory of top 100 Claude Code plugins, agent skills, and harnesses. Use when researching available plugins, seeking specialized workflows for design, testing, SEO, memory, or looking up community tools.
---

# Awesome Claude Plugins & Skills Directory

Use this skill when seeking specialized agent skills, workflows, and extensions across the ecosystem.

## Top Categories & Notable Plugins

### 1. Frontend & Design Intelligence
- **frontend-design** (`anthropics/claude-code`): Opinionated, distinctive design lead aesthetic; breaks generic AI SaaS templates.
- **ui-ux-pro-max-skill** (`nextlevelbuilder/ui-ux-pro-max-skill`): Multi-platform design intelligence for web, iOS, Android.
- **taste-skill** (`Leonxlnx/taste-skill`): Design taste filter preventing generic slop and AI templates.
- **impeccable** (`pbakaus/impeccable`): Structured design language and token systems for agent harnesses.
- **open-design** (`nexu-io/open-design`): Local design engine for prototypes, landing pages, and decks.

### 2. Engineering & Agent Harnesses
- **superpowers** (`obra/superpowers`): Agentic skills framework and senior software engineering methodology.
- **skills** (`mattpocock/skills`): Production engineering skills straight from production `.agents` setups.
- **ECC** (`affaan-m/ECC`): Performance harness optimization: memory, research-first development, security.
- **andrej-karpathy-skills** (`multica-ai/andrej-karpathy-skills`): Coding behavior rules based on Karpathy's LLM coding observations.
- **ponytail** (`DietrichGebert/ponytail`): Minimalist dev philosophy: write less code, choose maintainable simplicity.

### 3. Agent Memory & Persistence
- **claude-mem** (`thedotmack/claude-mem`): Cross-session memory and context persistence.
- **mem0** (`mem0ai/mem0`): Production memory layer for agents.
- **mempalace** (`MemPalace/mempalace`): Fast vector/graph memory benchmarked for coding agents.

### 4. SEO, Growth & Marketing
- **claude-seo** (`AgriciDaniel/claude-seo`): 26 sub-skills covering technical SEO, schema, GEO, and Lighthouse.
- **marketingskills** (`coreyhaines31/marketingskills`): Copywriting, CRO, growth engineering, and funnel optimization.

## Workflow Instructions

When the user asks to add or reference a plugin from the awesome list:
1. Identify the matching plugin name and target repository.
2. Locate the repository's `.claude-plugin/plugin.json` or `skills/<name>/SKILL.md`.
3. Fetch and integrate the plugin manifest and instruction markdown into `.gemini/config/plugins/` (global) and `.agents/plugins/` (workspace).
