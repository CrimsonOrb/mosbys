import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Introduction() {
  return (
    <Card className="text-center flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle>Introduction</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Mosby&#39;s Land Management Service is a professional land management
          company that has been around since the year 2000. We provide services
          for both residential and commercial properties. Our services include
          lawn care, tree trimming, and more. We are dedicated to providing the
          best service possible to our customers.
        </p>
      </CardContent>
    </Card>
  );
}
