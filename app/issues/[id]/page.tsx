import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import classnames from 'classnames';
import { getServerSession } from "next-auth";
import authOptions from "../../auth/authOptions";
import AssigneSelect from "./AssigneeSelect";
import { title } from "process";
import { Description } from "@radix-ui/themes/dist/esm/components/alert-dialog.js";


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
        <AssigneSelect issue={issue} />
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </Flex>
     </Box>}
    </Grid>
  );
};


export async function generateMetadata({ params }: Props) {
 const issue = await prisma.issue.findUnique({ where: { id: parseInt(params.id) } })

 return {
  title: issue?.title,
  description: 'Details of issue' + issue?.id
  
 }
}

export default IssueDetailPage;
