import { QuestComponentType } from 'components/Quest/QuestComponent'

export type SlideType = 'LEARN' | 'QUIZ' | 'QUEST' | 'POAP'

export interface LessonType {
  name: string
  slug: string
  notionId: string
  poapEventId: number
  description: string
  marketingDescription: string
  duration: number
  difficulty: 'Easy' | 'Advanced' | 'Expert'
  poapImageLink: string
  lessonImageLink: string
  socialImageLink: string
  learnings: string
  learningActions: string
  knowledgeRequirements: string
  quest: QuestComponentType
  imageLinks: string[]
  slides: {
    type: SlideType
    title: string
    notionId?: string
    content?: string
    quiz?: {
      id: string
      question: string
      answers: string[]
      rightAnswerNumber: number
    }
    component?: QuestComponentType
  }[]
}
