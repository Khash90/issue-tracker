
import {Skeleton} from '@/app/components'
import {  Flex, Card, Box } from '@radix-ui/themes'


const LoadingIssueDetailPage =async () => {

  return (
    <Box className='max-w-xl'>
    <Skeleton />
    <Flex gap="3" className='items-center my-2'>
    <Skeleton width="5rem" />
    <Skeleton width="8rem" />
    </Flex>
    <Card className='prose mt-6'>
    <Skeleton count={3} />
    </Card>
</Box>
  )
}

export default LoadingIssueDetailPage