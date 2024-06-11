import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'
import Link from 'next/link'
import NextLink from 'next/link'
import React from 'react'



interface Props {
    searchParams: {
      status: string;
      orderBy: keyof Issue;
      page: string;
    },
    issues: Issue[]
  }


const IssueTable = ({searchParams, issues}: Props) => {

    const columns: {
        label: string;
        value: keyof Issue;
        className?: string;
      }[] = [
        { label: "Issue", value: "title" },
        { label: "Status", value: "status", className: "hidden md:table-cell" },
        { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
      ];

      
  return (
    <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        {columns.map((column) => (
          <Table.ColumnHeaderCell
            key={column.value}
            className={column.className}
          >
            <NextLink
              href={{
                query: { ...searchParams, orderBy: column.value },
              }}
            >
              {column.label}
            </NextLink>
            {column.value === orderByField && (
              <ArrowUpIcon className="inline" />
            )}
          </Table.ColumnHeaderCell>
        ))}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {issues.map((issue) => (
        <Table.Row key={issue.id}>
          <Table.Cell>
            <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
            <div className="block md:hidden">
              <IssueStatusBadge status={issue.status} />
            </div>
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            <IssueStatusBadge status={issue.status} />
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            {issue.createdAt.toDateString()}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
  )
}

export default IssueTable