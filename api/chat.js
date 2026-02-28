import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  const { character, persona, messages } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are ${character.name}.

Character description:
${character.desc}

User persona:
${persona?.desc || ""}

CRITICAL:
Always reply in the same language the user used in their last message.
`
      },
      ...messages.map(m => ({
        role: m.role === "You" ? "user" : "assistant",
        content: m.content
      }))
    ]
  });

  res.status(200).json({
    reply: completion.choices[0].message.content
  });
}
