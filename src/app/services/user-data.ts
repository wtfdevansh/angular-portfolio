import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData {

  user = {name: "Devansh goyal" ,
          profession: "software engineer",
          email: "mrdivu7@gmail.com",
          phone: "8384820192",
          linkedin: "https://www.linkedin.com/in/devansh-goyal-3b558121b",
          github: "https://github.com/wtfdevansh",
          leetcode: "https://leetcode.com/u/devansh7/",
          photoUrl: "assets/hero-image.png"
  }

  techStack : string[] = ["Angular" , "Node.js" , "Express" , "MongoDb", "Gen AI" , "AWS"]

  experience =  [
    {companyName:"Apna College" , jobDescription: "During my internship at Apna College, I worked as a Teaching Assistant, where I had the opportunity to mentor and guide hundreds of students in Data Structures & Algorithms (DSA) and the MERN stack My role involved actively solving students’ doubts, breaking down complex coding problems, and helping them understand concepts in a simple, practical way. I conducted doubt-solving sessions, assisted with debugging code, and guided learners in building projects using React, Node.js, Express.js, and MongoDB. I also supported students in strengthening their problem-solving skills, writing optimized code, and following best practices with Git/GitHub. This experience not only deepened my own technical knowledge but also improved my ability to explain concepts clearly, mentor peers, and collaborate effectively." ,
     startDate:"May-2024" , endDate: "september-2024"},
    {companyName: "Biz2x" , jobDescription: "At Biz2X, I worked as an Associate Software Engineer, where I contributed to developing and maintaining scalable fintech applications. My role involved building and enhancing features, optimizing backend services, and collaborating closely with the team to deliver high-quality software solutions. I worked with technologies like Java, Spring Boot, REST APIs, Angular, and SQL, focusing on writing clean, efficient, and maintainable code. I also participated in code reviews, debugging, and performance optimization to ensure reliability and scalability of the applications. Beyond coding, I gained valuable experience in Agile workflows, working in sprints, and coordinating with cross-functional teams including QA and product management. This role strengthened my problem-solving skills and gave me exposure to building software products that directly impact clients in the fintech domain." , 
      startDate: "september-2025" , endDate:"present"}
  ]

  projects = [
    {projectName: "Credi Guide", description: "Engineered an AI-powered credit card recommendation system using Streamlit, OpenAI LLM, and LangChain.", github: "https://github.com/wtfdevansh"},
    {projectName: "Khata Book" , description: "• Architected a web-based digital ledger with Next.js, Prisma, and SQL for managing 1000+ customer account" , github: "https://github.com/wtfdevansh"},
    {projectName: "cryptocurrency exchange platform" , description: "Engineered a MERN-based cryptocurrency exchange platform supporting 10+ digital assets with real-time price tracking." , github: "https://github.com/wtfdevansh"}
  ]

 
  
}
