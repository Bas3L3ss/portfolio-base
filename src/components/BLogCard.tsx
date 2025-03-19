import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  link: string;
}

export default function BlogCard({
  title,
  summary,
  image,
  link,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild>
          <Link href={link}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
