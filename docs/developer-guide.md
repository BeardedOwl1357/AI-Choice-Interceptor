# LLM Chooser Developer Guide

## Purpose

The application interrupts automatic navigation to a specific LLM.

Instead of opening a model immediately, users consciously select from a shuffled list.

---

## Sequence Diagram

```mermaid
sequenceDiagram

    participant User
    participant Browser
    participant app.js
    participant llms.js
    participant shuffle.js
    participant render.js

    User->>Browser: Open chooser page
    Browser->>app.js: Load application

    app.js->>llms.js: Get model definitions
    llms.js-->>app.js: Return models

    app.js->>shuffle.js: Shuffle models
    shuffle.js-->>app.js: Return shuffled list

    app.js->>render.js: Render cards
    render.js-->>Browser: Update DOM

    User->>Browser: Click model
    Browser->>Selected LLM: Navigate
```

## High-Level Flow

```mermaid
flowchart TD

    A[User enters URL]
    B[Browser Extension Redirects]
    C[GitHub Pages Site Loads]
    D[Load LLM Definitions]
    E[Shuffle Order]
    F[Render Cards]
    G[User Selects Model]
    H[Navigate To Selected LLM]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
```

---

## Component Responsibilities

```mermaid
flowchart LR

    APP[app.js]

    APP --> LLM[llms.js<br/>Model Definitions]
    APP --> SHUFFLE[shuffle.js<br/>Randomization Logic]
    APP --> RENDER[render.js<br/>UI Rendering]

    LLM --> DATA[LLM Metadata]
    SHUFFLE --> ORDER[Shuffled List]
    RENDER --> UI[Rendered Cards]
```

| File | Responsibility |
|--------|--------|
| llms.js | Model definitions |
| shuffle.js | Randomization logic |
| render.js | UI rendering |
| app.js | Application orchestration |

---

## Application Startup

### Flow Diagram

```mermaid
flowchart TD

    START([Start])

    LOAD[Load LLM List]
    SHUFFLE[Shuffle List]
    RENDER[Render Cards]
    WAIT[Wait For User Click]
    OPEN[Open Selected URL]

    END([End])

    START --> LOAD
    LOAD --> SHUFFLE
    SHUFFLE --> RENDER
    RENDER --> WAIT
    WAIT --> OPEN
    OPEN --> END
```

### Pseudocode

```text
START

load llm list

shuffle llm list

render cards

wait for user click

open selected url

END
```

---

## Rendering Logic

### Flow Diagram

```mermaid
flowchart TD

    START([For Each LLM])

    CARD[Create Card]
    LOGO[Add Logo]
    TITLE[Add Title]
    DESC[Add Description]
    LINK[Attach Link]
    APPEND[Append To Container]

    START --> CARD
    CARD --> LOGO
    LOGO --> TITLE
    TITLE --> DESC
    DESC --> LINK
    LINK --> APPEND
```

### Pseudocode

```text
FOR each llm

    create card

    add logo

    add title

    add description

    attach link

    append to page

END
```

---

## Shuffle Algorithm

### Flow Diagram

```mermaid
flowchart TD

    START([Start Shuffle])

    LOOP[Select Current Index i]
    RANDOM[Choose Random Index j]
    SWAP[Swap Elements i and j]
    NEXT[Move To Next Element]

    END([Finished])

    START --> LOOP
    LOOP --> RANDOM
    RANDOM --> SWAP
    SWAP --> NEXT

    NEXT --> LOOP
    NEXT --> END
```

### Pseudocode

```text
FOR i from last element to first

    choose random index

    swap elements

END
```

---

## Runtime Dependency Diagram

```mermaid
flowchart TD

    INDEX[index.html]

    APP[app.js]

    LLM[llms.js]
    SHUFFLE[shuffle.js]
    RENDER[render.js]

    CSS[styles.css]

    INDEX --> APP
    INDEX --> CSS

    APP --> LLM
    APP --> SHUFFLE
    APP --> RENDER
```

---

## Future Enhancements

```mermaid
mindmap
  root((LLM Chooser))
    Analytics
      Usage Tracking
      Click History
      Model Statistics
    Personalization
      Favorites
      Categories
      Themes
    Productivity
      Keyboard Shortcuts
      Search
      Quick Launch
    Storage
      LocalStorage
      User Preferences
```

### Planned Features

- Usage analytics
- Keyboard shortcuts
- Categories
- Search
- Favorite models
- Dark/light themes
- LocalStorage statistics