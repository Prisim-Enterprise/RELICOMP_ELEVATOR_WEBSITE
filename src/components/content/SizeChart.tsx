import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SizeChartProps = {
  headers: string[];
  rows: string[][];
  title?: string;
};

export function SizeChart({
  headers,
  rows,
  title = "Size chart",
}: SizeChartProps) {
  if (!headers?.length || !rows?.length) return null;

  return (
    <section className="my-8" aria-labelledby="size-chart-heading">
      <h2 id="size-chart-heading" className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((h) => (
              <TableHead key={h}>{h}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j} className={j === 0 ? "font-medium" : undefined}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
