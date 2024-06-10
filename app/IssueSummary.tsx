import { Flex } from "@radix-ui/themes"


interface Props {

    open: number;
    inProgress: number;
    closed: number;
}

const IssueSummary = ({open, inProgress, closed}: Props) => {

    const statuses = [
        { label: 'Open Issues', value: open, status }
    ]

  return (
    <Flex>

    </Flex>
  )
}

export default IssueSummary