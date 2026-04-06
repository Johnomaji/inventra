export type Post = {
  slug: string;
  tag: string;
  tagColor: "cyan" | "amber" | "violet";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: { initials: string; name: string; role: string };
  featured?: boolean;
  body: Section[];
};

type Section = {
  heading?: string;
  text?: string;
  quote?: string;
  list?: string[];
};

export const posts: Post[] = [
  {
    slug: "why-african-smes-lose-money-inventory",
    tag: "AI & Commerce",
    tagColor: "cyan",
    date: "March 28, 2026",
    readTime: "8 min read",
    title: "Why 94% of African SMEs Are Losing Money to Invisible Inventory Problems",
    excerpt:
      "A deep dive into the data behind sub-Saharan Africa's ₦2.8 trillion annual inventory loss — and what the businesses that are winning are doing differently.",
    author: { initials: "TI", name: "Tunde Ifeanyi", role: "CEO, Inventra" },
    featured: true,
    body: [
      {
        heading: "The Invisible Tax on African Business",
        text: "Every business owner knows the feeling: a customer asks for a product you were certain you had, and you can't find it. Or worse — you ordered 500 units of a slow-moving item because your last count was wrong, and now capital is sitting in a warehouse doing nothing. These are not edge cases. Across sub-Saharan Africa, inventory mismanagement is one of the single largest destroyers of business value — and most businesses don't even know it's happening to them.",
      },
      {
        quote:
          "₦2.8 trillion. That is the estimated annual value lost to inventory errors, overstock, and stockouts across Nigerian SMEs alone.",
      },
      {
        heading: "What the Data Actually Shows",
        text: "We spent six months analyzing operational data from over 1,200 businesses across Nigeria, Ghana, and Kenya — spanning retail, pharma, agri, and logistics. The findings were stark. 94% of SMEs reported at least one critical inventory event in the prior quarter — a stockout that cost them a sale, or an overstock that forced a markdown. Of those, 78% said the event was preventable if they had better visibility.",
        list: [
          "67% of businesses still track inventory in spreadsheets or paper ledgers",
          "Average reconciliation cycle is 4.2 days — during which no one has accurate numbers",
          "Stockouts cost an average of 23% of monthly revenue per occurrence",
          "Overstock ties up 18% of working capital in most mid-size retail operations",
        ],
      },
      {
        heading: "Why Existing Tools Fail African Businesses",
        text: "The dominant inventory tools on the market were built for Western markets with stable supply chains, reliable internet connectivity, barcode scanners on every shelf, and predictable consumer demand curves. None of these assumptions hold in Lagos, Accra, or Nairobi. Power goes out. Networks drop. Suppliers change pricing daily. Markets operate in cash. Consumer demand spikes around Sallah, Christmas, and end-of-month salary cycles in ways that Western demand models simply do not account for.",
      },
      {
        heading: "What Winning Businesses Do Differently",
        text: "The 6% of businesses that consistently avoid inventory losses share three traits. First, they count more often — but smarter, using mobile-first tools that make physical audits fast enough to do weekly instead of monthly. Second, they forecast rather than react — using historical data to anticipate demand rather than just responding to stockouts. Third, they treat their supply chain as a system — understanding lead times, supplier reliability, and their own sales velocity as interconnected variables.",
      },
      {
        quote:
          "The businesses beating the market aren't smarter. They just have better data, faster.",
      },
      {
        heading: "What This Means for the Future",
        text: "Inventra was built to democratize the operational intelligence that was previously only available to large enterprises. With AI-driven demand forecasting trained specifically on African trade patterns, AR-assisted shelf audits that take seconds instead of hours, and real-time dashboards that work on 3G — we're building the infrastructure layer that African commerce has been missing. The ₦2.8 trillion problem is solvable. We're solving it.",
      },
    ],
  },
  {
    slug: "inventra-ar-2-audit-shelf-3-seconds",
    tag: "Product",
    tagColor: "cyan",
    date: "March 22, 2026",
    readTime: "5 min read",
    title: "Introducing Inventra AR 2.0: Audit a Shelf in Under 3 Seconds",
    excerpt:
      "Our biggest AR update yet — real-time multi-SKU recognition, offline sync improvements, and a redesigned scan interface.",
    author: { initials: "AF", name: "Amina Farouq", role: "Head of Product" },
    body: [
      {
        heading: "From 40 Minutes to Under 3 Seconds",
        text: "When we launched Inventra AR 1.0, the average shelf audit for a mid-size pharmacy took 40 minutes. With AR 2.0, we're bringing that to under 3 seconds per shelf — a 98% reduction. This is not an incremental improvement. It's a complete rethinking of how physical inventory auditing works.",
      },
      {
        heading: "What's New in AR 2.0",
        text: "The flagship feature of AR 2.0 is multi-SKU simultaneous recognition. Previous versions could identify one product at a time. AR 2.0 can recognize up to 48 SKUs in a single camera frame, matching them against your product catalog in real time. Point your phone at a shelf and within 3 seconds, Inventra tells you exactly what's there, what's missing, what's misplaced, and what needs reordering.",
        list: [
          "Multi-SKU simultaneous recognition: up to 48 products per frame",
          "Offline sync: full audit capability with zero connectivity, syncs when back online",
          "Redesigned scan interface with adaptive lighting compensation",
          "Expiry date detection for pharma and FMCG",
          "Planogram compliance checking — flag items that are in the wrong slot",
        ],
      },
      {
        quote:
          "Our testers at a 3-branch pharmacy network in Abuja completed a full stock audit across all locations in 22 minutes. Previously it took a full day.",
      },
      {
        heading: "Offline-First Architecture",
        text: "One of the most-requested features from our users has been offline capability. In many Nigerian warehouses and markets, internet access is intermittent. AR 2.0's offline sync engine caches your entire product catalog locally and queues all scan events, pushing them to the server the moment connectivity is restored. Everything stays in sync without any manual reconciliation.",
      },
      {
        heading: "How to Get AR 2.0",
        text: "AR 2.0 is rolling out to all Inventra Pro and Enterprise customers over the next two weeks. Growth plan users will get access in May. If you are on the early access waitlist, expect an invite in your inbox by end of April. As always, your feedback shapes the roadmap — reach out to product@inventra.ai with anything you want to see next.",
      },
    ],
  },
  {
    slug: "phygital-commerce-west-africa-inventory",
    tag: "Industry",
    tagColor: "amber",
    date: "March 15, 2026",
    readTime: "6 min read",
    title: "The Rise of Phygital Commerce in West Africa: What It Means for Inventory",
    excerpt:
      "How the blending of physical and digital channels is reshaping what businesses need from their operations platforms.",
    author: { initials: "CO", name: "Chisom Obi", role: "Head of Research" },
    body: [
      {
        heading: "Phygital Is Not a Buzzword Here",
        text: "In Western markets, 'phygital' — the blending of physical and digital commerce — is often discussed as a future trend. In West Africa, it is already the dominant reality. Nigerian consumers routinely browse Instagram to find products, WhatsApp sellers to negotiate price, and pick up in-store the same day. This is not a transition happening to the market. It is the market.",
      },
      {
        heading: "Three Channels, One Inventory Problem",
        text: "The challenge for businesses operating this way is that each channel creates its own inventory signal — and those signals are almost never synchronized. An item sold via Instagram DM may not be deducted from the store's physical count until end of day. A walk-in customer can buy something that was already reserved for a delivery. Overselling becomes structurally baked into the operation.",
        list: [
          "Average phygital SME in Lagos runs 3.4 active sales channels simultaneously",
          "Inventory sync lag between channels averages 6.2 hours",
          "43% report at least one overselling incident per week",
          "Resolution cost per oversell event: average ₦18,000 in refunds, goodwill, and lost customers",
        ],
      },
      {
        quote:
          "The businesses winning in phygital commerce are not the ones with the most channels. They're the ones whose inventory can see across all of them at once.",
      },
      {
        heading: "What the Platform Layer Needs to Do",
        text: "Solving phygital inventory requires a platform that treats physical and digital stock as one unified pool. Every sale, regardless of channel — whether it happens at the counter, via a WhatsApp order, or on an e-commerce checkout — needs to decrement from the same number in real time. Inventra's unified stock engine is built exactly for this. When a sale happens on any integrated channel, stock is updated instantly across every view.",
      },
      {
        heading: "The Road Ahead",
        text: "As mobile money maturity increases and social commerce platforms build more robust APIs, the lines between physical and digital commerce in West Africa will continue to dissolve. The businesses that invest in their inventory infrastructure now — the single source of truth across all channels — will have the operational foundation to scale without the chaos that typically comes with growth.",
      },
    ],
  },
  {
    slug: "pharmanet-stock-reconciliation",
    tag: "Case Study",
    tagColor: "violet",
    date: "March 10, 2026",
    readTime: "7 min read",
    title: "How PharmaNet Cut Stock Reconciliation from 2 Days to 10 Minutes",
    excerpt:
      "Ibrahim Balogun's team manages 4 pharmacies across Abuja. This is how Inventra AR transformed their operations.",
    author: { initials: "IB", name: "Ibrahim Balogun", role: "Operations Director, PharmaNet" },
    body: [
      {
        heading: "The Problem: 2 Days Every Month, Gone",
        text: "PharmaNet operates four community pharmacies across Abuja — in Garki, Wuse, Maitama, and Gwarinpa. Each branch carries around 2,400 active SKUs, including controlled substances, temperature-sensitive medicines, and fast-moving OTC products. Every month, Ibrahim's team would dedicate two full working days to stock reconciliation across all four branches. Staff would manually count, cross-reference with the system, investigate discrepancies, and update records. It was accurate — eventually — but by the time the report was complete, it was already three days out of date.",
      },
      {
        quote:
          "We were making restocking decisions based on data that was already wrong by the time we looked at it. Twice a year we'd end up with a drug shortage that should never have happened.",
      },
      {
        heading: "What Changed with Inventra AR",
        text: "PharmaNet joined Inventra's early access program in January 2026. The onboarding took three days — importing the product catalog, setting up the four branches, and training six staff members on the AR scan workflow. By week two, the results were visible.",
        list: [
          "Monthly reconciliation: from 2 days to 10 minutes",
          "Expiry date alerts: 340 near-expiry items flagged automatically in first scan",
          "Stockout prevention: 12 critical drug shortages prevented in first 60 days",
          "Staff time saved: 16 person-hours per month across the team",
        ],
      },
      {
        heading: "How the AR Workflow Changed Daily Operations",
        text: "Each morning, branch managers now do a 10-minute AR scan of their key shelves — the high-velocity items, controlled substances, and anything flagged by the AI the previous day. The scan updates the central system in real time. Ibrahim reviews a consolidated dashboard at 8am every day from his phone and can see the current stock position across all four branches simultaneously. If something is running low or an expiry alert is triggered, he acts on it before the first customer walks through the door.",
      },
      {
        heading: "What's Next for PharmaNet",
        text: "Having solved the reconciliation problem, PharmaNet is now using Inventra's demand forecasting to optimize their supplier orders. The AI analyzes sales velocity by branch, adjusts for seasonal patterns (malaria season, harmattan, festive periods), and generates recommended order quantities every Sunday for Monday supplier calls. Ibrahim's goal for 2026: reduce stockouts to zero while cutting total inventory value by 15% through better turnover.",
      },
    ],
  },
  {
    slug: "ai-african-trade-patterns",
    tag: "AI & Commerce",
    tagColor: "cyan",
    date: "March 5, 2026",
    readTime: "9 min read",
    title: "Building an AI That Actually Understands African Trade Patterns",
    excerpt:
      "Western AI models are trained on Western markets. Here's what we learned building demand forecasting from the ground up for Africa.",
    author: { initials: "TI", name: "Tunde Ifeanyi", role: "CEO, Inventra" },
    body: [
      {
        heading: "The Training Data Problem",
        text: "Every major demand forecasting model in the enterprise software market today was trained primarily on data from North American and European retail and distribution networks. These models know how to handle Black Friday, how Christmas affects consumer electronics demand in London, and how New Year's resolutions spike gym equipment sales. What they do not know is how the Eid-el-Kabir period affects meat and grain consumption in Kano, how the school resumption cycle drives stationery demand in Lagos, or how end-of-month salary payments create predictable weekly demand spikes in Nairobi's informal retail sector.",
      },
      {
        quote:
          "We plugged an off-the-shelf forecasting API into our first prototype. It was confidently wrong, in ways that kept surprising us.",
      },
      {
        heading: "What Makes African Demand Different",
        text: "After 18 months of working directly with businesses across West and East Africa, we identified six major variables that most Western models either miss or misrepresent:",
        list: [
          "Islamic calendar events (Ramadan, Eid) with floating Gregorian dates and regional variation",
          "End-of-month salary cycle demand spikes in salaried urban populations",
          "Seasonal weather patterns (harmattan, rainy season) with strong category-level effects",
          "Informal market dynamics: demand shifting to open-air markets during peak periods",
          "Currency volatility affecting purchasing power and consumer substitution behavior",
          "Multi-tier pricing structures: wholesale, retail, and hawker markets coexisting",
        ],
      },
      {
        heading: "How We Built the Inventra Intelligence Model",
        text: "Our approach was to build a forecasting model from the ground up using data contributed (with explicit consent) by Inventra's early business partners. We started with three categories — FMCG, pharmaceuticals, and agri-commodity trading — in Lagos and Accra. We trained on two years of sales data from 140 businesses, layering in external signals: public holiday calendars, weather data, commodity price indices, and mobile money transaction volumes as a proxy for local economic activity.",
      },
      {
        heading: "What Accuracy Looks Like in Practice",
        text: "After six months of production deployment, Inventra Intelligence achieves a mean absolute percentage error (MAPE) of 8.3% on 14-day demand forecasts across our user base — compared to 23.7% MAPE from the leading Western alternative we benchmarked against on the same dataset. For businesses, that difference translates directly into fewer emergency orders, less capital locked in slow-moving stock, and fewer stockouts on high-velocity items.",
      },
      {
        heading: "The Road Forward",
        text: "We are currently expanding the model to cover construction materials, fashion retail, and electronics — three categories with dramatically different demand dynamics that will require new training approaches. We're also building Pidgin and Hausa language support into the natural language query layer, so business owners can ask questions about their inventory in the language they actually think in. African commerce deserves AI that was built for it.",
      },
    ],
  },
  {
    slug: "agribusiness-africa-post-harvest-loss",
    tag: "Industry",
    tagColor: "amber",
    date: "February 28, 2026",
    readTime: "5 min read",
    title: "Agribusiness in Africa: Why Post-Harvest Loss is a Solvable Problem",
    excerpt:
      "Up to 40% of harvests are lost before they reach the consumer. Predictive inventory and supply chain AI are changing that math.",
    author: { initials: "CO", name: "Chisom Obi", role: "Head of Research" },
    body: [
      {
        heading: "A 40% Tax Nobody Talks About",
        text: "Sub-Saharan Africa loses between 30% and 40% of its agricultural output to post-harvest losses every year. That is not a rounding error — it represents hundreds of billions of dollars in food, income for farmers, and nutrition for consumers that simply evaporate between the farm gate and the market. The causes are well-documented: inadequate storage, poor transportation infrastructure, lack of cold chain, and — critically — no visibility into what is where and what is moving.",
      },
      {
        quote:
          "The farmer knows the harvest. The market knows the demand. Nobody in the middle knows both at the same time.",
      },
      {
        heading: "Where Inventory Intelligence Fits",
        text: "Traditional post-harvest loss interventions focus on physical infrastructure — better storage facilities, refrigerated trucks, improved roads. These matter enormously. But there is a parallel problem that infrastructure alone cannot solve: the information gap. When a grain aggregator does not know how quickly stock is moving through their network, they cannot route perishables efficiently. When a cooperative does not know which markets are at peak demand, they cannot time their sales to capture the best price before quality deteriorates.",
        list: [
          "Real-time stock movement tracking across multiple storage locations",
          "Quality-adjusted demand forecasting that accounts for perishability",
          "Supplier network visibility: know what is coming before it arrives",
          "Alert system: flag stock at risk of spoilage before it happens",
        ],
      },
      {
        heading: "What Inventra Is Building for Agribusiness",
        text: "We are extending Inventra's core platform with agri-specific features: perishability timers, quality grade tracking, and storage condition integration (temperature and humidity sensors feeding directly into the inventory record). Early pilot results from three grain aggregators in Kano and two tomato wholesalers in Ibadan are showing 22% reductions in spoilage loss within the first 60 days of deployment.",
      },
      {
        heading: "A Solvable Problem",
        text: "Post-harvest loss in Africa is often framed as an infrastructure problem requiring decade-long investments. And while that is true, the information layer can be improved dramatically right now, with the devices already in people's pockets. Better data — about what is stored where, how fast it is moving, and where demand is highest — can reduce losses meaningfully before the roads are fixed and the cold chains are built. That is the opportunity we are building toward.",
      },
    ],
  },
  {
    slug: "natural-language-queries-pidgin",
    tag: "Product",
    tagColor: "cyan",
    date: "February 20, 2026",
    readTime: "4 min read",
    title: "Natural Language Queries: Ask Inventra Anything in English or Pidgin",
    excerpt:
      "\"What's running low in Ikeja?\" — type it, say it, get an answer in seconds. Here's how we built Pidgin support into our NLP engine.",
    author: { initials: "AF", name: "Amina Farouq", role: "Head of Product" },
    body: [
      {
        heading: "The Interface Problem",
        text: "Most enterprise software assumes its users want to interact with tables, filters, and dropdowns. For a data analyst or accountant, that works. For the owner of a 12-branch distribution business who is on the road visiting clients and needs to know if their Ikeja warehouse is about to run out of a key SKU — it does not work. They need to just ask.",
      },
      {
        heading: "Natural Language, Built for Nigeria",
        text: "Inventra's NLP query engine — launched in February 2026 — allows any user to type or speak a question in plain English or Nigerian Pidgin and get an instant, accurate answer from their inventory data. The engine is trained to understand the way Nigerian business owners actually speak about their operations:",
        list: [
          '"Wetin dey remain for Apapa store?" → shows current stock levels at Apapa location',
          '"Which item dey run low?" → surfaces all items below reorder threshold',
          '"How much we sell last week for Abuja?" → returns revenue breakdown for Abuja branch',
          '"Which supplier give us wahala this month?" → flags suppliers with delayed deliveries',
        ],
      },
      {
        quote:
          "Language is the most natural interface. When business owners stop thinking about how to use the tool and start just talking to it, everything changes.",
      },
      {
        heading: "How We Built Pidgin Support",
        text: "Nigerian Pidgin is not a dialect of English — it has its own grammatical structures, vocabulary, and regional variations between Lagos, Port Harcourt, and Benin City. We partnered with a team of Nigerian linguists to build a Pidgin corpus specific to business and commerce contexts, then fine-tuned a base language model on this data alongside anonymized query patterns from our beta users. The result is a model that handles code-switching between Pidgin and English naturally, the way real users actually type.",
      },
      {
        heading: "What's Coming Next",
        text: "Hausa language support is in development for Q2 2026, targeting our expanding user base in Kano, Kaduna, and Abuja. We are also building voice query support for hands-free use during warehouse walks — say your question out loud while doing a shelf audit, get the answer through your earpiece. If there are other languages or query patterns you want to see supported, write to product@inventra.ai.",
      },
    ],
  },
];

export const featuredPost = posts[0];
export const regularPosts = posts.slice(1);

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
