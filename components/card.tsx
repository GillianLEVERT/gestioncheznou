import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

interface ServiceCardProps {
  title: string;
  descriptionPoints: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  descriptionPoints,
}) => (
  <Card className="max-w-[300px] mx-auto p-4 shadow-2xl min-h-[300px] bg-gray-900 bg-opacity-15 rounded-lg backdrop-blur-lg text-black">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-lg font-medium">{title}</p>
      </div>
    </CardHeader>
    <Divider className="h-0.5 bg-[#345995]" />
    <CardBody>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardBody>
  </Card>
);
