const QUERY_PARAM = "?DONOT=REMOVE"
export const llms = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: `https://chatgpt.com/${QUERY_PARAM}`,
    logo: "assets/logos/chatgpt.png",
    description: "General reasoning and coding"
  },
  {
    id: "claude",
    name: "Claude",
    url: `https://claude.ai/${QUERY_PARAM}`,
    logo: "assets/logos/claude.png",
    description: "Long-form writing and analysis"
  },
  {
    id: "gemini",
    name: "Gemini",
    url: `https://gemini.google.com/${QUERY_PARAM}`,
    logo: "assets/logos/gemini.png",
    description: "Free with Jio hehehehe"
  }
];