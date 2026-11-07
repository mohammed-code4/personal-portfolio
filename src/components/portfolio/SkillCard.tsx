import { Skill } from "@/data/portfolio";
import { Card } from "../shared/Card";

export function SkillCard({ name, icon }: Skill) {
  return (
    <Card>
      <div className="size-10 flex justify-center items-center"> {icon}</div>
      <span>{name}</span>
    </Card>
  );
}
