// M.O.R.T.E.X backend
// Node.js 18+
// Kurulum: npm install express cors openai
// API anahtarını terminalde ayarla: OPENAI_API_KEY=...
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/ask", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    if (!message) return res.status(400).json({error:"message gerekli"});

    const response = await client.responses.create({
      model: "gpt-5.6",
      instructions: "Sen M.O.R.T.E.X adında Türkçe konuşan kişisel bir yapay zekâ asistanısın. Kısa, doğal ve yardımcı cevaplar ver.",
      input: message
    });

    res.json({ reply: response.output_text });
  } catch (e) {
    console.error(e);
    res.status(500).json({error:"AI bağlantı hatası"});
  }
});

app.listen(8787, ()=>console.log("M.O.R.T.E.X backend: http://localhost:8787"));
