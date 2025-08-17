export const RESUME_ROADMAP_GENERATION_PROMPT = ({ resumeText }: { resumeText: string }) => `
You are an expert career advisor.

Analyze the following resume and create a highly personalized, step-by-step learning and career roadmap for the candidate.

Resume:
${resumeText}

Roadmap requirements:
1. Use a friendly but professional tone.
2. Identify the candidate’s strengths, weaknesses, and potential career directions from the resume.
3. Divide the roadmap into logical weekly or monthly phases (e.g., Phase 1: Foundation).
4. For each phase, include:
   - Learning goals
   - Specific tools, technologies, or platforms to focus on
   - Time estimates per task
   - Mini projects, practice tasks, or checkpoints
5. Tailor everything to the candidate’s background, skills, and experience from the resume.
6. Be realistic based on what someone with this profile can achieve step by step.
7. End with a motivating summary that encourages the candidate.
`;
