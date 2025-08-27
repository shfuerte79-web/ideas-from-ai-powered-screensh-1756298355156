import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Contextual Screenshot Assistant",
    "one_liner": "Transform screenshots into actionable insights based on contextual analysis.",
    "why_now": "The rise in remote work and communication channels has led to an increase in the need for quick information extraction from visual content.",
    "novel_mechanism": "Utilizes context-aware AI to identify key themes and actions from screenshots beyond mere transcription.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Business meeting highlights from screenshots",
      "Automating action items from chat screenshots",
      "Extracting and categorizing information from technical documentation screenshots"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR extraction",
        "Contextual theme identification",
        "Action item generation"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "curated screenshot dataset with annotations",
        "synthetic via LLM"
      ],
      "risk": [
        "context misinterpretation",
        "data privacy concerns"
      ],
      "mitigation": [
        "user feedback loops",
        "end-to-end encryption"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Dramatic before/after demo of action retrieval",
        "Show surprising insights uncovered from mundane screenshots"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Limited action extraction per month",
        "pro": "$9.99/month for unlimited extractions",
        "business": "$49.99/month with team collaboration features"
      }
    },
    "moat": [
      "data accumulation from usage",
      "rapid iteration and user-driven improvements",
      "integratable into existing workflow tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This product leverages the existing technology of OCR to extend its utility into actionable insights, making it more valuable than simple OCR tools which only convert text."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}