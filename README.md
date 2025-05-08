# SoftSell - Software License Resale Platform

A responsive, single-page marketing website for a fictional software resale startup called 'SoftSell'.

## Features Implemented

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with a coherent color scheme
- **Next.js App Router**: Built with the latest Next.js features
- **Tailwind CSS**: Styled using Tailwind for consistent design
- **Framer Motion**: Smooth animations for enhanced user experience
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Form Validation**: Frontend validation for the contact form
- **AI Chat Widget**: Mock AI-powered customer chat widget

## Sections

1. **Hero Section**: Eye-catching headline with CTA buttons
2. **How It Works**: Three-step process with icons and descriptions
3. **Why Choose Us**: Four key benefits with icons
4. **Testimonials**: Customer reviews with attribution
5. **Contact Form**: Lead capture form with validation
6. **Chat Widget**: AI-powered chat assistant

## Design Choices

- **Color Palette**: Teal/emerald gradient theme for a fresh, trustworthy feel
- **Typography**: Clean, readable fonts with clear hierarchy
- **Iconography**: Lucide icons for consistent visual language
- **Animations**: Subtle animations to enhance engagement without distraction
- **Accessibility**: Semantic HTML and proper contrast ratios

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

## AI Chat Widget Configuration

To use the AI-powered chat widget with your own OpenAI API key:

1. Create a `.env.local` file in the root directory
2. Add your OpenAI API key:
   \`\`\`
   OPENAI_API_KEY=your_api_key_here
   \`\`\`
3. Restart the development server

The chat widget currently uses a mock implementation. To connect it to a real OpenAI instance, you would need to:

1. Update the `chat-widget.tsx` component
2. Replace the `mockAIResponse` function with an actual API call
3. Create an API route in the `app/api` directory to handle the OpenAI requests

Example API route implementation:

\`\`\`typescript
// app/api/chat/route.ts
import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for SoftSell, a software license resale platform." },
        { role: "user", content: message }
      ],
    });

    return NextResponse.json({ 
      text: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}
\`\`\`

## Deployment

This project is ready to be deployed on Vercel, Netlify, or GitHub Pages.

## Time Spent

- Design planning: 2 hours
- Component development: 6 hours
- Responsive styling: 3 hours
- Animations and interactions: 2 hours
- AI chat widget: 2 hours
- Testing and refinement: 1 hour

Total: ~16 hours
