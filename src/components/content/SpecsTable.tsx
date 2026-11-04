import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { SpecRow } from "@/content/types";

type SpecsTableProps = {
  rows: SpecRow[];
  title?: string;
};

export function SpecsTable({ rows, title = "Specifications" }: SpecsTableProps) {
  if (!rows?.length) return null;

  return (
    <section className="my-8" aria-labelledby="specs-heading">
      <h2 id="specs-heading" className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Specification</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="font-medium w-1/3">{row.label}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
