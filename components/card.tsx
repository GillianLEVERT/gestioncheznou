import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  descriptionPoints: string[];
  icon: IconType;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  descriptionPoints,
  icon: Icon,
}) => (
  <Card className="2xl:min-w-[200px] p-4 shadow-2xl 2xl:min-h-[500px] min-h-[300px] bg-secondary-900 bg-opacity-15 rounded-lg backdrop-blur-lg text-black">
    <CardHeader className="flex gap-3">
      <Icon className="text-3xl text-secondary-700" />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </CardHeader>
    <Divider className="h-0.5 bg-secondary-700" />
    <CardBody>
      <ul className="list-disc pl-5 space-y-2 text-xl">
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardBody>
  </Card>
);
