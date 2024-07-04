import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function TechStack() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-center">Services</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground">
        <p className="mb-2 text-center">
          We offer a variety of services including:
        </p>
        <div className="flex justify-center items-center gap-16 text-xs md:text-lg text-muted-foreground">
          <ul className="list-disc">
            <li className="mb-2">Stump Grinding</li>
            <li className="mb-2">Brush Management</li>
            <li className="mb-2">Land Cleaning and Clearing</li>
            <li>Tree Trimming and Removal</li>
          </ul>
          <ul className="list-disc">
            <li className="mb-2">Mulching</li>
            <li className="mb-2">Dirt Work</li>
            <li className="mb-2">Driveways and Roads</li>
            <li className="mb-2">Demolition and Haul Off</li>
          </ul>
        </div>
        <Link
          href="/contact"
          className="text-center flex justify-center items-center mt-4 text-red-400 hover:underline text-sm md:text-lg"
        >
          Contact us today for a free estimate ➜
        </Link>
      </CardContent>
    </Card>
  );
}
