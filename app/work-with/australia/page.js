import WorkWithPageTemplate from "@/components/WorkWithPageTemplate";
import { getWorkWithRegion } from "@/lib/workWith";

export const metadata = { title: "Work With Australia | Career Hire", description: "Connect Australian talent with global opportunities through Career Hire." };

export default function AustraliaPage() {
    return <WorkWithPageTemplate region={getWorkWithRegion("australia")} />;
}