import WorkWithPageTemplate from "@/components/WorkWithPageTemplate";
import { getWorkWithRegion } from "@/lib/workWith";

export const metadata = { title: "Work With Canada | Career Hire", description: "Find your next opportunity or your next hire in Canada with Career Hire." };

export default function CanadaPage() {
    return <WorkWithPageTemplate region={getWorkWithRegion("canada")} />;
}