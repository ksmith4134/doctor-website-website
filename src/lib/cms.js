export const services = [
    {
        id: 0,
        title: "Design",
        bullets: [
            {
                id: 0,
                body: "Modern software tools allow us to create beautifully crafted designs.",
                icon: "pen",
            },
            {
                id: 1,
                body: "Leave feedback and comments on new designs in real-time.",
                icon: "discuss",
            },
        ],
    },
    {
        id: 1,
        title: "Development",
        bullets: [
            {
                id: 0,
                body: "Each site is coded using popular programming languages & tools.",
                icon: "code",
            },
            {
                id: 1,
                body: "No vendor lock-in. You own everything.",
                icon: "unlock",
            },
            {
                id: 2,
                body: "Accessibility to meet the needs of every demographic.",
                icon: "access",
            },
        ],
    },
    {
        id: 2,
        title: "Content Creation",
        bullets: [
            {
                id: 0,
                body: "Storyboard, capture, and edit photography and video.",
                icon: "image",
            },
            {
                id: 1,
                body: "Document creation for protocols, treatments, & educational content.",
                icon: "document",
            },
        ],
    },
    {
        id: 3,
        title: "Content Management",
        bullets: [
            {
                id: 0,
                body: "Easily add new resources and information to your site.",
                icon: "folder",
            },
        ],
    },
    {
        id: 4,
        title: "Patient Discovery",
        bullets: [
            {
                id: 0,
                body: "Amplify new patient discovery using search engine optimization.",
                icon: "search",
            },
        ],
    },
];

export const portfolio = [
    {
        id: 0,
        title: "Condition Navigation",
        description: "Intuitive condition navigation using an interactive skeleton.",
        imageUrl: "/portfolio/arnot/skeleton-7.png",
        anchorLink: "https://www.arnotortho.com/#body-diagram",
        imageText: "An interactive skeleton diagram helps direct patients to their condition resource page",
    },
    {
        id: 1,
        title: "Patient Education",
        description: "Simple, yet full customizable condition pages in a wiki-style.",
        imageUrl: "/portfolio/arnot/condition-8.png",
        anchorLink: "https://www.arnotortho.com/knee/acl-tear?index=Background",
        imageText: "Custom condition pages containing photographs, videos, and downloads",
    },
    {
        id: 2,
        title: "Doctor profiles",
        description: "Not your typical doctor profiles. Beautiful and professional.",
        imageUrl: "/portfolio/arnot/profile-8.png",
        anchorLink: "https://www.arnotortho.com/team/bryan-jarvis",
        imageText: "Doctor profile pages showcase education, published articles, reviews, and more",
    },
];

/* OLD */

export const servicesOld = [
    {
        id: 0,
        kicker: "Design",
        title: "Beautiful & accessible",
        body: "We build accessible sites for every demographic. But, no one knows your patients as well as you. Leave feedback on new designs in real-time.",
        image: {
            url: "/patterns/stars.png",
            width: 308,
            height: 169,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 1,
        kicker: "Development",
        title: "Eliminate vendor lock-in",
        body: "We use common tools so you’ll never have trouble finding someone to take over your site should you move to another agency in the future.",
        image: {
            url: "/patterns/flannel.png",
            width: 405,
            height: 272,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 2,
        kicker: "Content Creation",
        title: "Capture once, use forever",
        body: "We can help with photography, video, and document creation. We also help providers use AI to speed up development of patient documentation.",
        image: {
            url: "/patterns/dots.png",
            width: 578,
            height: 326,
        },
        backgroundGradient: "top-left",
    },
    {
        id: 3,
        kicker: "Content Management",
        title: "Simple & fast updates",
        body: "Our content management system helps doctors and advanced practice providers easily add new information and resources to their website.",
        image: {
            url: "/patterns/blocks.png",
            width: 437,
            height: 255,
        },
        backgroundGradient: "top-left",
    },
    // {
    //     id: 3,
    //     kicker: "SEO",
    //     title: "New patient<br />discovery",
    //     body: "We use search engine optimization techniques to make sure your site is easily found, especially by patients in your local region.",
    //     image: {
    //         url: "/patterns/blocks.png",
    //         width: 437,
    //         height: 255,
    //     },
    //     backgroundGradient: "top-left",
    // },
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
        skeletonLocation: "top-[31%] left-[62%]",
    },
    {
        id: 1,
        slug: "hip",
        label: "Hip",
        conditions: [
            { id: 0, label: "Osteoarthritis", arthritis: true },
            { id: 1, label: "Full Replacement", arthritis: true },
        ],
        skeletonLocation: "top-[45%] left-[52%]",
    },
    {
        id: 2,
        slug: "knee",
        label: "Knee",
        conditions: [
            { id: 0, label: "ACL Tear", arthritis: false },
            { id: 1, label: "Full Replacement", arthritis: true },
        ],
        skeletonLocation: "top-[65%] left-[37%]",
    },
    {
        id: 3,
        slug: "shoulder",
        label: "Shoulder",
        conditions: [
            { id: 0, label: "Rotator Cuff Tear", arthritis: false },
            { id: 2, label: "Arthritis", arthritis: true },
        ],
        skeletonLocation: "top-[14%] left-[31%]",
    },
];

export const portfolioCondition = {
    title: "Knee Arthritis",
    description:
        "Knee arthritis is a common condition that occurs when the cartilage in the knee joint breaks down, causing pain, stiffness, and swelling.",
    icon: "/portfolio/arnot/icon-knee.svg",
    paragraph:
        "Knee arthritis is a common condition that occurs when the cartilage in the knee joint breaks down, causing pain, stiffness, and swelling. Cartilage is a smooth, flexible tissue that covers the ends of bones and helps to cushion and protect the joint. When it wears away, the bones can rub against each other, leading to pain, inflammation, and reduced mobility.",
    videoThumbUrl: "/portfolio/arnot/knee.png",
    videoThumbWidth: 796,
    videoThumbHeight: 448,
};

export const portfolioConditionIndex = [
    { id: 0, label: "Background" },
    { id: 1, label: "Conservative Care" },
    { id: 2, label: "Surgery" },
    { id: 3, label: "Pre-Op Care" },
    { id: 4, label: "Post-Op Care" },
    { id: 5, label: "All Resources" },
];

export const portfolioProfileCredentials = [
    {
        id: 0,
        label: "Boards",
        list: [{ id: 0, label: "American Board of Orthopedic Surgery" }],
    },
    { id: 1, label: "Licensed", list: [{ id: 0, label: "New York" }] },
    {
        id: 2,
        label: "Professional Organizations",
        list: [
            { id: 0, label: "American Academy of Orthopedic Surgeons" },
            { id: 1, label: "Arthroscopy Association of North America" },
        ],
    },
    {
        id: 3,
        label: "Awards & Recognitions",
        list: [
            { id: 0, label: "Alpha Omega Alpha Honor Medical Society" },
            { id: 1, label: "Gold Humanism Honor Society" },
        ],
    },
];

export const portfolioProfileEducation = [
    { id: 0, label: "BS, Biology", link: "Syracuse University" },
    { id: 1, label: "MD", link: "Syracuse University" },
    {
        id: 2,
        label: "Residency, Orthopedic Surgery",
        link: "SUNY Upstate Medical University",
    },
    {
        id: 3,
        label: "Fellowship, Sports Medicine",
        link: "Orthopaedic Research Institute",
    },
    { id: 4, label: "Attending Physician", link: "Arnot Ogden Medical Center" },
];

export const portfolioReviews = [
    {
        id: 0,
        name: "Dr. Jaewon Chang",
        condition: "ACL Tear",
        imageUrl: "/portfolio/arnot/dr-chang.png",
        review: {
            title: "Dr. Chang is an amazing doctor!",
            body: "He made me and my wife feel comfortable with the whole surgery that my son had to have. He went above and beyond and fully explained the complete procedure and if I called with questions I had the answer in no time. I would highly recommend him to anyone that needs any orthopedic surgery and if he was a family doctor I would be changing doctors immediately.",
            initials: "TD",
            location: "Corning, NY",
            icon: "/portfolio/arnot/icon-knee.svg",
        },
    },
    {
        id: 1,
        name: "Dr. Jared Smith",
        condition: "Torn Meniscus",
        imageUrl: "/portfolio/arnot/dr-smith.png",
        review: {
            title: "Dr. Smith is an excellent provider.",
            body: "I NEVER leave an office visit with doubts, concerns, or unanswered questions. The staff is thorough and respectful…Dr. Smith is an extremely talented surgeon, and I am 100% happy with the effort he put forth to repair my leg. The man is a damn good surgeon and person too. I cannot begin to thank him enough for his efforts.",
            initials: "JD",
            location: "Elmira, NY",
            icon: "/portfolio/arnot/icon-knee.svg",
        },
    },
    {
        id: 2,
        name: "Dr. Bryan Jarvis",
        condition: "Knee Replacement",
        imageUrl: "/portfolio/arnot/dr-jarvis.png",
        review: {
            title: "A great surgeon!",
            body: "Dr. Jarvis got me up and moving again very quickly after my surgery. I always feel comfortable in his care and know that he'll answer all of my questions. He's a great surgeon and even more, a great person.",
            initials: "SS",
            location: "Horseheads, NY",
            icon: "/portfolio/arnot/icon-knee.svg",
        },
    },
];

export const portfolioPhotography = [
    { id: 0, imageUrl: "/portfolio/arnot/photography/photo-0.png", style: "" },
    { id: 1, imageUrl: "/portfolio/arnot/photography/photo-1.png", style: "" },
    { id: 2, imageUrl: "/portfolio/arnot/photography/photo-2.png", style: "" },
    { id: 3, imageUrl: "/portfolio/arnot/photography/photo-3.png", style: "" },
    { id: 4, imageUrl: "/portfolio/arnot/photography/photo-4.png", style: "" },
    {
        id: 5,
        imageUrl: "/portfolio/arnot/photography/photo-5.png",
        style: "col-span-2",
    },
    { id: 6, imageUrl: "/portfolio/arnot/photography/photo-6.png", style: "" },
    { id: 7, imageUrl: "/portfolio/arnot/photography/photo-7.png", style: "" },
    { id: 8, imageUrl: "/portfolio/arnot/photography/photo-8.png", style: "" },
    { id: 9, imageUrl: "/portfolio/arnot/photography/photo-9.png", style: "" },
    {
        id: 10,
        imageUrl: "/portfolio/arnot/photography/photo-10.png",
        style: "",
    },
];
