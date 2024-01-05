export const services = [
    {
        id: 0,
        kicker: "Design",
        title: "Beautiful &<br />accessible to all",
        body: "We build accessible sites for every demographic. But, no one knows your patients as well as you. Leave feedback on new designs in real-time.",
        image: {
            url: "/patterns/stars.png",
            width: 308,
            height: 170,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 1,
        kicker: "Development",
        title: "Eliminate<br />vendor lock-in",
        body: "We use common tools so you’ll never have trouble finding someone to take over your site should you move to another agency in the future.",
        image: {
            url: "/patterns/dots.png",
            width: 578,
            height: 326,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 2,
        kicker: "Content Creation",
        title: "Capture once,<br />use forever",
        body: "We can help with photography, video, and document creation. We also help providers use AI to speed up development of patient documentation.",
        image: {
            url: "/patterns/flannel.png",
            width: 405,
            height: 272,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 3,
        kicker: "Content Management",
        title: "Simple &<br />fast updates",
        body: "Our content management system helps doctors and advanced practice providers easily add new information and resources to their website.",
        image: {
            url: "/patterns/blocks.png",
            width: 437,
            height: 255,
        },
        backgroundGradient: "top-left",
    },
];

export const portfolioCards = [
    { id: 0, slug: "navigation", title: "Navigation", icon: "compass" },
    { id: 1, slug: "conditions", title: "Conditions", icon: "plus" },
    { id: 2, slug: "profiles", title: "Profiles", icon: "user" },
    { id: 3, slug: "reviews", title: "Reviews", icon: "star" },
    { id: 4, slug: "photography", title: "Photography", icon: "camera" },
];

export const portfolioNavigation = [
    {
        id: 0,
        slug: "elbow",
        label: "Elbow",
        conditions: [
            { id: 0, label: "Tendonitis", arthritis: false },
            { id: 1, label: "Cubital Tunnel Syndrome", arthritis: false },
        ],
        skeletonLocation: "top-[0%] left-[0%]",
    },
    {
        id: 1,
        slug: "hip",
        label: "Hip",
        conditions: [
            { id: 0, label: "Osteoarthritis", arthritis: true },
            { id: 1, label: "Full Replacement", arthritis: true },
        ],
        skeletonLocation: "top-[0%] left-[0%]",
    },
    {
        id: 2,
        slug: "knee",
        label: "Knee",
        conditions: [
            { id: 0, label: "ACL Tear", arthritis: false },
            { id: 1, label: "Full Replacement", arthritis: true },
        ],
        skeletonLocation: "top-[0%] left-[0%]",
    },
    {
        id: 2,
        slug: "shoulder",
        label: "Shoulder",
        conditions: [
            { id: 0, label: "Rotator Cuff Tear", arthritis: false },
            { id: 2, label: "Arthritis", arthritis: true },
        ],
        skeletonLocation: "top-[0%] left-[0%]",
    },
];
