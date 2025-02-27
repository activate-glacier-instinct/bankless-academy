import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import Lesson from 'components/Lesson'
import LESSONS from 'constants/lessons'
import { LessonType } from 'entities/lesson'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: `Lesson: ${currentLesson.name}`,
    description: currentLesson.description,
    image: currentLesson.socialImageLink,
    isLesson: true,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LESSONS.map((lesson) => ({ params: { slug: lesson.slug } })),
    fallback: true,
  }
}

const LessonPage = (): JSX.Element => {
  const { asPath } = useRouter()

  const currentLesson = LESSONS.find(
    (lesson: LessonType) => `/lessons/${lesson.slug}` === asPath
  )

  return (
    <Container maxW="container.xl">
      <Lesson lesson={currentLesson} />
    </Container>
  )
}

export default LessonPage
