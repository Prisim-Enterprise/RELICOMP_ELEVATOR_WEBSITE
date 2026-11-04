import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import type { PriceRangeRow } from "@/content/types";
import { PriceDisclaimer } from "./PriceDisclaimer";

type PriceRangeTableProps = {
 rows: PriceRangeRow[];
 title?: string;
};

export function PriceRangeTable({
 rows,
 title = "Indicative price ranges",
}: PriceRangeTableProps) {
 if (!rows?.length) return null;

 return (
 <section className="my-8" aria-labelledby="price-range-heading">
 <h2 id="price-range-heading" className="text-2xl font-semibold mb-4">
 {title}
 </h2>
 <Table>
 <TableHeader>
 <TableRow>
 <TableHead>Configuration</TableHead>
 <TableHead>Indicative range (INR)</TableHead>
 <TableHead className="hidden sm:table-cell">Notes</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {rows.map((row) => (
 <TableRow key={row.config}>
 <TableCell className="font-medium">{row.config}</TableCell>
 <TableCell>{row.rangeInr}</TableCell>
 <TableCell className="hidden sm:table-cell text-muted-foreground">
 {row.notes ?? ", "}
 </TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 <PriceDisclaimer />
 </section>
 );
}
