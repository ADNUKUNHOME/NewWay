export function RESOURCE_GENERATION_PROMPT(titles: string[]) {
    return `
You are an expert learning assistant.

I have a career roadmap with the following phases:
${titles.map((t, i) => `Phase ${i + 1}: ${t}`).join("\n")}

For each phase, suggest the **best 2-3 learning resources**:
- At least one article or documentation.
- At least one video or interactive tutorial.
- Optionally, a tool or platform link.

Return results in **structured JSON** with this format:
[
  {
    "id": "uuid-or-random",
    "title": "Resource Title",
    "description": "Why this resource is useful",
    "url": "https://link",
    "type": "article" | "video" | "tool"
  }
]
`;
}