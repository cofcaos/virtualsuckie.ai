messages: [
  { role:"system", content: character.desc },
  ...messages.map(m => ({
     role: m.role === "You" ? "user" : "assistant",
     content: m.content
  }))
]
