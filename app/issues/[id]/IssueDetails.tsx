import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import { Props } from 'recharts/types/container/Surface'

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
    <Heading>{issue.title}</Heading>
      <Flex gap="3" className="items-center my-2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-6">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
      </>
  )
}



export default IssueDetails