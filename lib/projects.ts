export interface Framework {
  name: string;
  samples: string[];
  pending?: boolean;
}

export interface Project {
  name: string;
  tagline: string;
  stage?: "live" | "concept" | "seed";
  heroImage?: string;
  opportunity: string;
  approach: string;
  frameworks: Framework[];
  whatsNext: string;
  biggerVision?: string;
}

export const projects: Record<string, Project> = {
  homeground: {
    name: "Home Ground: Home Purchase",
    tagline: "Personal decision toolkit for home buyers",
    heroImage: "/images/hero-homeground.png",
    opportunity:
      "Three questions nobody else separates: what can I afford, what can I sustain, and what supports the life I want? Home buying tools treat the transaction as the problem. The real problem is the decision.",
    approach:
      "We traced the live experience of how people actually navigate affordability, sustainability, and livability. The real constraints surfaced: financial capacity, ongoing cost burden, and life fit are three different questions with three different data shapes. The tool holds all three without collapsing them.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Buyer: \"Help me see whether this place supports the life I actually want, not just whether I can sign the papers.\"",
          "Household: \"Help us make this decision together without one person holding all the information.\"",
          "First-time buyer: \"Show me what I am actually committing to, not just what the monthly payment looks like.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce confusion between affordability, sustainability, and livability when comparing homes",
          "Increase confidence in purchase decisions by surfacing life-fit data alongside financial data",
          "Minimize time spent reconciling information across separate budgeting, listing, and lifestyle tools",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: buyers collapse three distinct questions (afford, sustain, want) into one",
          "Existing solutions fail: affordability calculators ignore sustainability, listing tools ignore life fit, no tool holds all three",
          "Solution path: separate assessments for each question, then a synthesis view that holds all three without forcing a single score",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Home, Neighborhood, Budget, Lifestyle Profile, Decision Snapshot as distinct objects with their own data shapes",
          "Each object has its own attributes, relationships, and calls to action rather than living as tabs in a listing tool",
          "Decision Snapshot captures the state of all three assessments at a point in time for household coordination",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When affordability and livability conflict, show both clearly rather than blending them into a single recommendation",
          "The person makes the tradeoff, not the tool",
          "Financial projections always show sustained cost, not just purchase price",
        ],
      },
    ],
    whatsNext:
      "Integrating local data sources for livability scoring and building shareable decision snapshots so households can coordinate on the purchase decision together.",
  },
  smallbiz: {
    name: "Small Biz Operator: Workflow Bottleneck Tools",
    tagline:
      "Identifying where small business workflows break down and applying service design fixes in the operator's own language",
    heroImage: "/images/hero-smallbiz.png",
    opportunity:
      "Small business operators hit the same bottlenecks repeatedly: handoffs that drop information, steps that depend on one person's memory, decisions that stall because the right data is in the wrong place. These are service design problems, but no one has translated service design into language a small business operator would recognize or tools they would actually use.",
    approach:
      "We mapped how operators actually move through their days to find where work stalls, backs up, or falls through. The patterns are consistent: bottlenecks cluster around handoffs, information gaps, and decisions that require context the operator has to reconstruct from memory. The tools apply service design concepts (journey mapping, touchpoint analysis, bottleneck identification) but use the operator's own vocabulary instead of consulting language.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Operator: \"Show me where my day keeps getting stuck so I can fix the process, not just push harder.\"",
          "Team lead: \"Help us see which handoffs are dropping information before it becomes a customer problem.\"",
          "Owner: \"Tell me which part of my workflow is costing me the most time and money without me realizing it.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce time lost to recurring workflow bottlenecks by making them visible before they cause failures",
          "Increase handoff reliability between team members by surfacing where information gets lost",
          "Minimize the gap between identifying a process problem and implementing a fix the team can sustain",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: operators experience the same bottlenecks daily but lack the framing to diagnose them as process problems",
          "Existing solutions fail: service design consultants speak a language operators do not use, project management tools track tasks but not flow, accounting tools see money but not workflow",
          "Solution path: lightweight bottleneck mapping in the operator's vocabulary, handoff tracking that flags drops before they reach the customer, fix templates that match how small teams actually change their processes",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Workflow, Step, Handoff, Bottleneck, Fix as core objects organized around how work actually flows",
          "Bottleneck captures where work stalls, who it affects, and what information is missing or stuck",
          "Fix is a lightweight change proposal tied to a specific Bottleneck, with before/after states the team can evaluate",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "Use the operator's language for everything; translate service design concepts behind the scenes",
          "Make bottlenecks visible before they cause failures, not after",
          "Every fix must be something a small team can implement this week, not a six-month transformation",
        ],
      },
    ],
    whatsNext:
      "Building the bottleneck mapping tool and testing it with local businesses to see which workflow patterns surface most consistently and which fix templates operators actually adopt.",
  },
  commons: {
    name: "Common Ground: The Commons (Community Board)",
    heroImage: "/images/hero-commons.png",
    tagline:
      "Hyperlocal community information discovered, curated, and governed fairly",
    opportunity:
      "Community information is scattered, broadcast-oriented, and governed by platforms that do not live in the community. The people who know what is happening locally have no native surface to share it.",
    approach:
      "We built a photo-native community board where local information is discovered, not broadcast. The design grows from what happens when multiple people in a community each hold partial knowledge and need a shared surface to make the whole visible.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Resident: \"Help me find out what is happening on my block this week.\"",
          "Contributor: \"Give me a way to share what I know without broadcasting to the whole internet.\"",
          "Neighborhood organizer: \"Show me what my community already knows so I can build on it, not duplicate it.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Increase visibility of hyperlocal information for residents within their immediate geography",
          "Reduce barriers to contributing community knowledge without requiring audience building",
          "Improve fairness of content moderation through structural governance rather than gatekeeping",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: community knowledge is fragmented across platforms that optimize for reach, not relevance",
          "Existing solutions fail: Facebook groups bury local posts in algorithmic feeds, Nextdoor treats neighborhoods as ad markets, bulletin boards do not scale",
          "Solution path: photo-native posts tied to geography, moderation through structure, discovery based on proximity",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Post, Place, Contributor, Community, Moderation Event as core objects tied to geography and people",
          "Information is tied to a Place rather than a feed, so discovery is spatial rather than algorithmic",
          "Moderation Event is a first-class object with its own lifecycle, not a hidden admin action",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When reach and relevance conflict, choose relevance",
          "Information that matters to 50 neighbors is more valuable here than information that reaches 5,000 strangers",
          "Moderation scales through structure, not through requiring people to prove who they are",
        ],
      },
    ],
    whatsNext:
      "Expanding community governance tools and building federation so multiple neighborhoods can run independent boards that connect when relevant.",
  },
  tyfbaf: {
    name: "tyfbaf: Friend-to-Friend Home Swaps",
    tagline: "Trust-based home swaps between friends",
    heroImage: "/images/hero-tyfbaf.png",
    opportunity:
      "Home swaps exist, but they are built on stranger-trust models with insurance, deposits, and platform guarantees. Between friends, the trust already exists. The tool should honor that trust, not replace it.",
    approach:
      "Designing for the relational fabric that already exists between friends. The product does not create trust. It provides a surface for trust that is already there to operate through.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Friend: \"I want to travel and my friend wants to travel. We trust each other. Just help us coordinate the logistics.\"",
          "Host: \"Let me share the things my guest needs to know without it feeling like a rental agreement.\"",
          "Pair: \"Help us find dates that work without a dozen back-and-forth messages.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce logistical friction in home swaps between people who already trust each other",
          "Eliminate stranger-trust patterns (reviews, deposits, insurance) from friend-to-friend exchanges",
          "Increase swap completion rate by simplifying calendar matching and lightweight agreements",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: friends who want to swap homes have no tool that starts from trust",
          "Existing solutions fail: Airbnb assumes strangers, home swap platforms add insurance, group chats lose logistics in conversation",
          "Solution path: calendar matching without deposit flows, agreements that feel like a handshake, coordination that stays out of the relationship",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Swap, Home, Friend, Calendar, Agreement as core objects that assume trust is already present",
          "No Review, Deposit, or Insurance objects exist in the system by design",
          "Agreement is lightweight and informational, not contractual",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When the platform could add a trust mechanism (reviews, deposits, verification), do not add it",
          "The relationship carries the trust; the tool carries the coordination",
          "Every interaction should feel lighter than a text thread, never heavier than a contract",
        ],
      },
    ],
    whatsNext:
      "Building the core swap coordination interface with calendar matching and a lightweight agreement structure that friends can use without feeling like they are signing a contract.",
    biggerVision:
      "Home swaps are the starting point, but the larger vision is a coordination layer for any resource sharing that runs on existing trust. Cars, tools, studio space, vacation gear. Anywhere that friends already lend to each other informally, the friction is not trust but logistics. The same design principles apply: do not add platform trust mechanisms to relationships that already carry trust. Build coordination tools that make the logistics invisible so the relationship stays in the foreground.",
  },
  satbuttons: {
    name: "SatButtons: Physical Feedback Buttons",
    tagline:
      "Physical buttons placed in real locations to capture in-context feedback at the moment it happens",
    stage: "seed",
    heroImage: "/images/hero-satbuttons.webp",
    opportunity:
      "Most feedback collection happens after the experience: surveys, follow-up emails, review prompts. By that point, recall bias has already distorted the response. The most honest feedback comes at the moment of the experience, in the environment where it happened, with the lowest possible friction. Physical buttons in physical spaces solve this. The respondent presses a button. That is the entire interaction.",
    approach:
      "Building on the principles of Experience Sampling Method (ESM): capture responses in context, at the moment they occur, rather than asking people to reconstruct their experience later. SatButtons makes ESM physical. Custom-labeled buttons are placed in real environments. Each press is timestamped, counted, and available in real time. No app download. No login. No survey fatigue.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Business owner: \"Tell me how my customers feel about the experience right now, not two weeks later in a review.\"",
          "Field researcher: \"Give me a way to collect in-context responses without interrupting the experience.\"",
          "Product team: \"Help me run real-time satisfaction sampling in a live environment so I can see patterns as they form.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce respondent effort to a single physical press at the moment of experience",
          "Increase feedback volume by eliminating app downloads, logins, and survey fatigue",
          "Improve signal accuracy by capturing responses in context rather than through post-hoc recall",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: feedback happens after the experience, distorted by recall bias and low response rates",
          "Existing solutions fail: surveys require effort, review platforms collect feedback days later, NPS asks the wrong question at the wrong time",
          "Solution path: physical one-press buttons at the point of experience, timestamped streams in real time, custom label sets per context",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Button, Label Set, Location, Session, Response Stream as core objects",
          "A Session is a time-bounded collection period; a Response Stream is the real-time count across all buttons at a location",
          "Label Set is configurable per deployment, allowing custom satisfaction scales beyond the standard happy/sad",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "The respondent's effort must be one press. Nothing more. No screen, no prompt, no follow-up",
          "The button is the entire interface; complexity lives in the dashboard",
          "Every deployment must work without requiring the respondent to install, register, or identify themselves",
        ],
      },
    ],
    whatsNext:
      "Prototyping the physical button hardware and the real-time counting dashboard. First deployment target: a local business willing to run a two-week satisfaction pilot at the point of service.",
    biggerVision:
      "SatButtons starts with physical feedback buttons, but the larger vision is a general-purpose in-context response capture system. Any environment where people have an experience and you want to know how they felt about it in real time. Retail, healthcare waiting rooms, event venues, public transit, co-working spaces. The physical button is the first surface. Digital surfaces (QR-triggered single-tap responses, NFC tap points) follow. The underlying system is the same: capture the response at the moment of the experience, with the lowest possible friction, and make the data available immediately. This connects directly to Organic Design: every SatButtons deployment generates structured behavioral data that feeds back into product and service decisions.",
  },
  "color-coordinator": {
    name: "Fashion Color Coordinator",
    tagline:
      "A tool for building and exploring personal color palettes grounded in what you actually wear",
    stage: "seed",
    heroImage: "/images/hero-color-coordinator.png",
    opportunity:
      "Color coordination tools exist for digital design but not for personal style. People who care about how colors work together in their wardrobe have no tool that starts from what they already own rather than abstract color theory.",
    approach:
      "Starting from how people actually think about color in their closets. Not color wheels and complementary pairs. Real decisions: does this jacket work with these pants? Can I build a week of outfits from these six pieces?",
    frameworks: [
      {
        name: "Jobs to Be Done",
        pending: true,
        samples: [
          "Not yet traced",
          "Early signal: people want confidence that what they are wearing coordinates",
          "They want a tool that starts from what they own, not a lesson in color theory",
        ],
      },
      {
        name: "Desired Outcomes",
        pending: true,
        samples: [
          "Increase confidence in daily outfit color coordination without requiring theory knowledge",
          "Reduce decision time when getting dressed by surfacing combinations from existing wardrobe",
          "Minimize wardrobe purchases that do not coordinate with what is already owned",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        pending: true,
        samples: [
          "Not yet traced",
          "Needs research into how people currently make color coordination decisions when getting dressed",
          "Needs mapping of where those decisions break down and what tools people improvise",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Garment, Color Profile, Outfit, Palette, Wardrobe as core objects",
          "The garment is the atomic unit, not the color swatch; colors live on real objects in your closet",
          "Palette emerges from what you own rather than being imposed from abstract color theory",
        ],
      },
      {
        name: "Design Principles",
        pending: true,
        samples: [
          "Not yet traced",
          "Early instinct: the tool should feel like a mirror, not a teacher",
          "Show what works rather than explain why",
        ],
      },
    ],
    whatsNext:
      "Conducting initial research interviews with people who actively think about color coordination in their personal style to trace how they currently make these decisions.",
    biggerVision:
      "The Fashion Color Coordinator starts with clothing, but the larger vision is a personal color intelligence tool. Understanding how colors interact on real objects you own, in real lighting conditions, across different contexts. The same principles extend to interior design, event planning, and personal branding. The core insight is the same: color decisions happen on real objects in real spaces, not on color wheels or in abstract theory. The tool should meet people where those decisions actually occur.",
  },
  "one-second-local": {
    name: "One Second Local: Temporal Reflection Tool",
    tagline:
      "A self-reflection app that helps people discover meaning in their own lives by compressing photos and video into one-second moments and compiling them into a continuous film over time",
    stage: "concept",
    opportunity:
      "People capture thousands of photos and videos throughout their lives but never process them into meaning. The photos accumulate. Reflection does not. Every existing tool treats this as an organization problem (sort, tag, archive) or a sharing problem (post, like, comment). The actual problem is that meaning lives in sequences, not in individual photos, and no tool helps people see the sequence.",
    approach:
      "We traced how people actually relate to their own past experiences and found the core transformation: Photo to Moment to Clip to Film to Reflection. The app does not store media. It references what you already have, compresses each day to one representative second, and compiles those seconds into a traversable film. The value is not the clip. The value is the sequence. Watching your own choices accumulate over weeks and months is where reflection happens.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Person: \"Help me understand myself over time by reflecting on meaningful moments, not by organizing photos.\"",
          "Parent: \"I take hundreds of photos of my kids but I cannot see what this time actually meant. Show me the pattern, not the archive.\"",
          "Reflective individual: \"I want to look back at a month or a year and see what I chose to remember, without editing a video or scrolling a photo library.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce time from experiencing a meaningful day to capturing its representative moment to under two hours",
          "Increase the proportion of accumulated photos that participate in active reflection rather than sitting untouched in a library",
          "Enable sustained capture practice (3+ moments per week over 8+ consecutive weeks) without external reminders or gamification",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: people capture moments but never process them into meaning because no tool supports compression and sequence",
          "Existing solutions fail: photo apps organize but do not reflect, video editors require skill and time, social platforms turn private meaning into public performance",
          "Solution path: one moment per day, one second per moment, auto-compiled film for traversal, local-first with no cloud dependency",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Path, Moment, Clip, Film as four locked objects where user language equals system language",
          "One Moment per Day is a hard constraint: compression is the job, multiple moments revert to the photo library problem",
          "Film is generated, not authored: it is a mirror of what was chosen over time, not a project to be refined",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When compression and completeness conflict, choose compression: one second is enough if it is the right second",
          "When reflection and engagement conflict, choose reflection: the app succeeds when you pause the film to think, not when you open it more often",
          "When privacy and sharing conflict, choose privacy: there is no social layer, no observer, no audience. The only viewer is your future self",
        ],
      },
    ],
    whatsNext:
      "This is the first product in the portfolio built entirely from meaning-first signal using the full framework stack. Nine frameworks have been traced. Three remain before code handoff: Service Blueprint per flow, IA mapping, and final Design Principles synthesis. The case study documents the entire process from thesis to executable mesh.",
    biggerVision:
      "One Second Local is a self-reflection tool, but the deeper thesis is about how meaning forms from compression and sequence. The same principle applies anywhere people accumulate raw experience without processing it: journals that pile up unread, voice memos that sit untranscribed, notes that never become insight. The traversal cycle (capture, compress, continue, reflect) is a general pattern for turning lived experience into understanding. This product is where that pattern becomes concrete and testable.",
  },
  "story-lab": {
    name: "Story Lab: Storytelling Workshops and Gatherings",
    tagline:
      "A 90-minute workshop that teaches people to write a 5-minute story from their own lived experience, paired with gatherings where those stories are told and witnessed. Grew from Pride Tales, a queer storytelling event series.",
    stage: "live",
    opportunity:
      "People carry stories that matter to them but have no method to shape them for telling and no space where they will be genuinely heard. Performance venues reward polish. Social media rewards brevity. Neither creates the conditions for someone to stand up, tell something true, and be witnessed by people who are actually listening. The gap is both craft (how do I make my experience into a tellable story?) and space (where can I tell it safely?).",
    approach:
      "We built two connected surfaces. The workshop teaches a method called Task x Zoom: Task is what you were doing when it happened, Zoom is what you were feeling in that moment. That combination helps people find the real story inside their experience. The gathering (Pride Tales) creates the coordination field where those stories are told and witnessed. Improv hangouts in shared home space extend the practice into ongoing community. The teller and the witness are both active roles. The gathering is not a performance venue. It is a coordination field where people recognize themselves in each other.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Teller: \"I have a story that matters to me. I want to tell it in a space where I am heard and held, so I can transform my own understanding by speaking it aloud to people who listen.\"",
          "Witness: \"Someone is sharing something true. I want to hold space for that truth and signal back what I received, so the teller knows they were heard and I can feel my own connection to their experience.\"",
          "Workshop participant: \"I know I have a story but I do not know how to shape it. Teach me the craft so I can stand up and tell it without freezing or rambling.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "The teller tells their story fully, stays present through the vulnerable moment, and hears themselves say something they understand differently now",
          "At least one witness reflects back what they received, not judgment or advice, just what landed",
          "40%+ of participants return for a second gathering, signaling that something real happened",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: people want to tell stories that matter but have no method to shape them and no space that holds them safely",
          "Existing solutions fail: open mics reward performance, therapy is private, social media collapses stories into content. None create the conditions for genuine witnessing",
          "Solution path: Task x Zoom method for story craft, small group practice before the gathering, ritual opening and closing to set the container, facilitator training for quality",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Story, Gathering, Theme, Witness, Coordination Field as core objects. Each is a container for what is real, not what is performed",
          "A Story has a lifecycle: Lived, Discovered, Crafted, Practiced, Told, Witnessed, Integrated. The workshop moves people from Lived to Practiced. The gathering moves them from Told to Integrated",
          "The Coordination Field is not a feature. It emerges when tellers and witnesses are both fully present. It cannot be designed directly, only supported through structure and safety",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When polish and presence conflict, choose presence: a story told with vulnerability, even imperfectly, changes people. A smooth story told without presence does not",
          "Witnessing is reflection, not correction: the witness says what they received, never what the teller should do or what the teller meant",
          "The workshop is the bridge: always offer Story Craft before the gathering. Preparation is the difference between performance and truth",
        ],
      },
    ],
    whatsNext:
      "Expanding the three-tier structure: community events (Pride Tales gatherings), EDU partnerships (Story Craft in schools and universities), and geographic expansion (Pride Tales chapters in multiple cities with trained local facilitators). Improv hangouts in shared home space continue building the community layer between formal events.",
    biggerVision:
      "Story Lab starts with queer storytelling but the method is universal. Task x Zoom, the vulnerability gate, and genuine witnessing apply anywhere people carry stories that matter and lack a space to tell them. The larger vision is a practice that spreads through trained facilitators running their own gatherings in their own communities, each one a coordination field where people recognize themselves in each other. The platform becomes a practitioner network, not a content platform.",
  },
  "linkedin-research-surface": {
    name: "LinkedIn Research Surface",
    tagline:
      "A layer that turns LinkedIn activity into structured research signal rather than broadcast content",
    stage: "seed",
    heroImage: "/images/hero-linkedin-research.png",
    opportunity:
      "LinkedIn activity generates constant signal about how professionals think, what they struggle with, and how industries are shifting. But the platform treats everything as broadcast content. There is no way to use your own LinkedIn presence as a research instrument.",
    approach:
      "Exploring how LinkedIn activity (posts, comments, reactions, connection patterns) can be structured as research data rather than social content. The signal is already there. The surface to read it is missing.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Researcher: \"Help me see what my LinkedIn network is actually telling me about how this industry thinks.\"",
          "Strategist: \"Surface the patterns in my connections' activity without manually reading every post.\"",
          "Product lead: \"Show me what professionals in this space are struggling with, structured as research data.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        pending: true,
        samples: [
          "Reduce time spent manually extracting research signal from LinkedIn activity",
          "Increase the proportion of professional network data structured as usable research input",
          "Improve topic-level trend detection across connection clusters without algorithmic manipulation",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        pending: true,
        samples: [
          "Not yet traced",
          "Needs research into how researchers and strategists currently extract signal from LinkedIn activity",
          "Needs mapping of where manual methods break down and what signal types carry genuine research value",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Post, Reaction, Comment Thread, Connection Signal, Research Pattern as core objects",
          "Each LinkedIn interaction becomes a data point in a research stream, not just social engagement",
          "Research Pattern aggregates signals across interactions to surface trends that individual posts cannot show",
        ],
      },
      {
        name: "Design Principles",
        pending: true,
        samples: [
          "The tool reads the platform, never posts to it; observation surface only",
          "No automation of social behavior; research extraction must not alter the data source",
          "Signal quality over volume; one traced pattern is worth more than a thousand scraped data points",
        ],
      },
    ],
    whatsNext:
      "Mapping the data structures available through LinkedIn activity and identifying which signal types carry genuine research value versus social noise.",
    biggerVision:
      "LinkedIn is the first surface, but the larger vision is a general-purpose research input layer that works across any platform where professional behavior generates signal. The same structural approach applies to industry forums, open source communities, conference activity, and publication patterns. Each surface produces a different kind of research data, but the method is the same: treat activity as structured input rather than social content, and feed it into product and strategy decisions through the Organic Design cycle. The end state is a tool that turns any public professional surface into a research instrument.",
  },
};
