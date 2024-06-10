import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import classnames from 'classnames';
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/AuthOptions";


interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  
  const session = await getServerSession(authOptions)

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{
      initial: "1",
      md: "3"
    }} gap="6">
     <Box >
        <IssueDetails 
          issue={issue}
        />
     </Box>

     {session && <Box className="w-[20%]">
      <Flex  gap="5" >
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </Flex>
     </Box>}
    </Grid>
  );
};

export default IssueDetailPage;
