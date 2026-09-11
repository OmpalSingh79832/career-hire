export const workWithRegions = [
    {
        slug: "europe",
        name: "Europe",
        eyebrow: "Work With Career Hire",
        title: "Find Jobs - in Europe.",
        description:
            "We help European professionals find meaningful opportunities abroad and connect Canadian employers with capable, culturally adaptable talent.",
        image: "https://loremflickr.com/1600/900/europe,professional,city?lock=71",
        accent: "violet",
        introTitle: "A thoughtful route from Europe to your next opportunity.",
        intro:
            "From first conversation to arrival and onboarding, our team brings structure to international recruitment. We take time to understand the person behind the CV and the business behind the vacancy.",
        sectors: ["Healthcare", "Hospitality", "Skilled trades", "Retail operations"],
        signals: ["Strong professional training", "Multilingual communication", "Adaptable across cultures", "Ready for long-term growth"],
        steps: ["Share your goals", "Meet a focused shortlist", "Prepare the paperwork", "Start with confidence"],
        quote: "Good international hiring starts with understanding, not just matching.",
        faqs: [
            ["Can European candidates apply for Canadian roles?", "Yes. We connect qualified candidates with suitable Canadian opportunities and explain the next steps clearly."],
            ["Which European profiles are most in demand?", "Healthcare, hospitality, skilled trades, and operational roles are common areas where employers look for dependable international talent."],
            ["Do you support relocation planning?", "Our team helps coordinate documentation and onboarding so candidates and employers know what to expect."],
        ],
    },
    {
        slug: "canada",
        name: "Canada",
        eyebrow: "Work With Career Hire",
        title: "Find Jobs - in Canada.",
        description:
            "Whether you are ready for a fresh start or looking for a team member who already understands the Canadian workplace, we make the next move feel clear.",
        image: "https://careercanadaimmigration.com/wp-content/uploads/2023/05/34.webp",
        accent: "red",
        introTitle: "Local insight. Human conversations. Better matches.",
        intro:
            "Career Hire works with candidates and employers across Canada, bringing practical market knowledge and a process designed around real people, not just job descriptions.",
        sectors: ["Healthcare", "Retail", "Hospitality", "Administration"],
        signals: ["Canada-ready experience", "Practical role matching", "Transparent communication", "Support beyond placement"],
        steps: ["Tell us where you want to go", "Get matched to the right role", "Prepare for the conversation", "Grow into your next chapter"],
        quote: "The right role can change a week. The right team can change a career.",
        faqs: [
            ["Who can work with Career Hire in Canada?", "We support job seekers, newcomers, and experienced professionals looking for their next role across our core industries."],
            ["Can employers hire local candidates through you?", "Absolutely. We source and screen candidates in Canada as well as internationally, depending on your hiring needs."],
            ["What kinds of roles do you recruit for?", "Our strongest networks are in healthcare, retail, hospitality, and related operational roles."],
        ],
    },
    {
        slug: "australia",
        name: "Australia",
        eyebrow: "Work With Career Hire",
        title: "Find Jobs - in Australia.",
        description:
            "Bring your experience to a new market or find people who can raise the standard of your operation. We make international recruitment more considered and more human.",
        image: "https://loremflickr.com/1600/900/australia,professional,workplace?lock=73",
        accent: "violet",
        introTitle: "Experience travels well when the fit is right.",
        intro:
            "Australian professionals bring initiative, service mindset, and practical experience. We help translate those strengths into the right opportunity, with clear expectations on both sides.",
        sectors: ["Healthcare", "Hospitality", "Customer service", "Team leadership"],
        signals: ["Service-led experience", "Confident communication", "Hands-on problem solving", "A collaborative mindset"],
        steps: ["Start with a conversation", "Shape the right search", "Review a quality shortlist", "Make the move together"],
        quote: "Great teams are built across borders when the values line up.",
        faqs: [
            ["What makes Australian candidates a strong fit?", "Many bring a practical, service-led approach, strong communication, and experience working in fast-moving teams."],
            ["Do you work with Australian employers too?", "Yes. We can support employers seeking skilled candidates for Canadian opportunities and international workforce planning."],
            ["How do I begin?", "Send us your goals through the contact page. We will come back with a focused conversation about fit and next steps."],
        ],
    },
];

export function getWorkWithRegion(slug) {
    return workWithRegions.find((region) => region.slug === slug);
}