import WorkWithPageTemplate from "@/components/WorkWithPageTemplate";
import { getWorkWithRegion } from "@/lib/workWith";

export const metadata = { title: "Work With Europe | Career Hire", description: "Connect with talent and opportunities across Europe through Career Hire." };

export default function EuropePage() {
    return <WorkWithPageTemplate region={getWorkWithRegion("europe")} />;
}