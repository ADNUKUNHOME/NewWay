export const ROADMAP_GENERATION_PROMPT = ({
    name,
    education,
    interests,
    timePerWeek,
    goals,
    additionalInfo }:
    {
        name: string;
        education: string;
        interests: string;
        timePerWeek: string;
        goals: string;
        additionalInfo: string;
    }
) => {
    return `
You are an expert career advisor.

Create a highly personalized, step-by-step learning and career roadmap for a user.

- Name: ${name}
- Education level: ${education}
- Time available per week: ${timePerWeek}
- Career goals: ${goals}
- Interests: ${interests}
- Additional context: ${additionalInfo}

Roadmap requirements:
1. Use a friendly but professional tone.
2. Divide the roadmap into logical weekly or monthly phases (e.g., Phase 1: Foundation).
3. For each phase, include:
   - Learning goals
   - Specific tools or platforms to use
   - Time estimates per task
   - Mini projects or checkpoints
4. Tailor everything to the user’s education level and interests.
5. Be realistic based on their weekly time.
6. End with a motivating summary that encourages the user.
`;

}