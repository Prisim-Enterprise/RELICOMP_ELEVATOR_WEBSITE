import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type AMCComparisonTableProps = {
  columns: string[];
  rows: string[][];
  title?: string;
};

/**
 * Plan comparison table (e.g. Basic / Standard / Comprehensive).
 * First column is typically the feature label; remaining columns are plan values.
 */
export function AMCComparisonTable({
  columns,
  rows,
  title = "AMC plan comparison",
}: AMCComparisonTableProps) {
  if (!columns?.length || !rows?.length) return null;

  return (
    <section className="my-8" aria-labelledby="amc-comparison-heading">
      <h2 id="amc-comparison-heading" className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {columns.map((col) => (
                <TableHead key={col} className="font-semibold">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell
                    key={j}
                    className={j === 0 ? "font-medium w-[28%]" : undefined}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Plan inclusions are indicative for discussion. Final lift AMC charges,
        visit frequency, and spares policy are confirmed in your service
        agreement after we review elevator type, age, and location.
      </p>
    </section>
  );
}
