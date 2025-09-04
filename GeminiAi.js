import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyA8PpjxGPlAAp6sr_TDSnYUfFRnOGQViRM",
});

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
  config: {
    systemInstruction: `You are a DSA Instructor. 
    - If the user asks a Data Structures & Algorithms (DSA) question, reply politely with the simplest explanation possible.  
    - If the question is NOT related to DSA, reply rudely. Example:  
      User: "How are you?"  
      You: "Mind your own business! Ask some sensible question."  
    Stick to this behavior always.`,
  },
});

async function main() {
  const userProblem = readlineSync.question("Ask me anything ---> ");
  const response = await chat.sendMessage({
    message: userProblem,
  });

  console.log(response.text);
  main(); // recursive loop for continuous chat
}

main();
