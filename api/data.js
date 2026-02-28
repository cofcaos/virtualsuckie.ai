import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export default function handler(req, res) {

  if (!existsSync(filePath)) {
    writeFileSync(filePath, JSON.stringify({ characters: [], persona: {} }));
  }

  if (req.method === "GET") {
    const data = JSON.parse(readFileSync(filePath));
    res.status(200).json(data);
  }

  if (req.method === "POST") {
    writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.status(200).json({ success:true });
  }
}
