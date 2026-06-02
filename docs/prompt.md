# Project Context: LLM Chooser

You are helping me build a small web application called "LLM Chooser".

## Problem Statement

I have a habit of instinctively going to ChatGPT whenever I need an AI assistant.

I want a small website that introduces a deliberate decision point before choosing an LLM.

The goal is not to prevent me from using ChatGPT. The goal is to make me consciously choose the most appropriate model for a task.

---

## Current Architecture

The site is deployed as a static website on GitHub Pages.

Current stack:

* HTML
* CSS
* Vanilla JavaScript
* GitHub Pages

I intentionally chose not to use React because:

* The application is small.
* There is very little state.
* No backend is currently required.
* I want zero build steps.
* I want future contributors to understand the code quickly.

---

## Current File Structure

```text
AI-CHOICE-INTERCEPTOR/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── llms.js
│   ├── shuffle.js
│   └── render.js
│
├── assets/
│   └── logos/
│
├── docs/
│   └── developer-guide.md
│
└── README.md
```

Responsibilities:

* llms.js = model definitions
* shuffle.js = randomization logic
* render.js = UI rendering
* app.js = orchestration

---

## Current UX

User opens the chooser page.

The page displays cards for various LLMs.

Examples:

* ChatGPT
* Claude
* Gemini
* Perplexity

Cards are shuffled on every page load.

The user clicks a card and is navigated to the selected LLM.

---

## Important Discovery

I originally attempted to intercept visits to ChatGPT using a browser extension called Redirector.

My rule matched any URL containing "chat".

Flow:

1. User visits chatgpt.com
2. Redirector sends them to my chooser page
3. User intentionally selects ChatGPT
4. Redirector intercepts chatgpt.com again
5. Infinite redirect loop

Important lesson:

The extension only understands URLs.

It cannot distinguish between:

* accidental navigation
* intentional navigation

This led to a redirect loop.

---

## Future Features Under Consideration

### Search

I want users to search for models.

Example:

* ChatGPT
* Claude
* Gemini
* DeepSeek
* Qwen
* Kimi
* Grok

The search should be local and fast.

---

### Product Question

If a user searches for a model that is not in the catalog:

Example:

"deepseek"

and the catalog contains no DeepSeek entry,

I want to learn from that search.

The key insight:

Users rarely fill out feedback forms.

However, users willingly perform searches.

Therefore the search feature should double as a telemetry system.

---

## Desired Search Analytics

For every search:

Capture:

* search term
* result count
* whether a model was clicked

Examples:

Search = "deepseek"
Results = 0
Clicked = false

Search = "claude"
Results = 1
Clicked = true

This allows us to identify:

* most requested missing models
* successful searches
* abandoned searches

---

## Hosting Constraints

The application is deployed via GitHub Pages.

Assume:

* no traditional backend
* no server-side code
* static hosting

However, I am open to lightweight services if justified.

Examples:

* Google Analytics
* Google Apps Script
* Google Sheets
* Firebase

---

## Preferred Product Philosophy

I care more about learning from user behavior than collecting explicit feedback.

Examples:

Good:

* search analytics
* click analytics
* failed search analytics

Less useful:

* long feedback forms

I prefer passive signals over active feedback.

---

## Current Questions

Please help me evaluate and design:

1. Search architecture
2. Search analytics collection
3. Failed search tracking
4. GitHub Pages compatible telemetry
5. Future roadmap
6. Tradeoffs between:

   * Google Analytics
   * Google Sheets + Apps Script
   * Firebase
7. Whether user accounts are justified
8. Whether Google Drive sync is worth building
9. How to keep the project simple while still learning from users

When making recommendations, optimize for:

* simplicity
* maintainability
* learning from user behavior
* low operational burden
* GitHub Pages compatibility