import React from 'react'
import IssueForm from '../../_components/IssueForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'



interface Props {
  params: {id: string}
}

const EditIssuePage = async ({params}: Props) => {
  //using prisma to fetch the issue with the given id
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!issue) notFound()

  return (
    <IssueForm  issue={issue} />
  )
}

export default EditIssuePage