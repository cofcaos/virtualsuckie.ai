let database = {
  characters: [],
  persona: {}
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(database);
  } else if (req.method === "POST") {
    database = req.body;
    res.status(200).json({ success:true });
  }
}
