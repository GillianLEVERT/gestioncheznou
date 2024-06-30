import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
}) => (
  <Card className="max-w-[300px] mx-auto">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">{title}</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <p>{description}</p>
    </CardBody>
    <Divider />
  </Card>
);
