type BlogArticleLike = {
  _id?: string;
  title?: string;
  shortDescription?: string;
  fullContent?: string;
  publishDate?: Date | string;
  slug?: string;
  thumbnailImage?: string;
  [key: string]: unknown;
};

const PROTECTED_SLUGS = new Set([
  'best-online-gambling-india',
  'Best-online-gambling-India',
  'fast-withdrawal-online-betting-india',
  'top-mobile-friendly-betting-sites-india',
  'unlock-your-potential-discover-yaarwinapp',
]);

const PROTECTED_TITLE_PATTERNS = [
  /beginner guide to online betting india/i,
  /fast withdrawal online betting india/i,
  /top mobile friendly betting sites india/i,
  /unlock your potential/i,
  /discover the power of yaarwinapp/i,
  /trusted.*safe.*platform/i,
  /safe.*trusted.*platform/i,
  /fast wd.*deposit/i,
];

const SUPPORT_DATES = [
  '2026-01-03',
  '2026-01-08',
  '2026-01-14',
  '2026-01-19',
  '2026-01-25',
  '2026-02-04',
  '2026-02-09',
  '2026-02-15',
  '2026-02-22',
  '2026-02-28',
  '2026-03-07',
  '2026-03-13',
  '2026-03-19',
  '2026-03-26',
  '2026-04-01',
  '2026-04-09',
  '2026-04-14',
  '2026-04-21',
  '2026-04-25',
  '2026-04-29',
  '2026-05-02',
];

const ORDERED_SUPPORT_DATES = [...SUPPORT_DATES].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

const ARTICLE_ANGLES = [
  {
    title: 'UPI Gaming Payments in India: Recharge Checks, Receipts and Safer Play',
    description: 'A practical payment guide for players who use UPI, recharge screenshots, transaction references, and safer support habits.',
    focus: 'UPI gaming payments',
    lead: 'UPI payments make mobile gaming easier, but players still need clean records when a recharge needs manual checking.',
    firstHeading: 'Keep recharge details easy to verify',
    firstBody: 'Before contacting support, prepare your UID, recharge amount, payment screenshot, transaction reference, and payment time. These details help support teams compare your request with payment records faster.',
  },
  {
    title: 'Withdrawal Order Number Guide: How to Prepare a Clean Payout Request',
    description: 'Learn why withdrawal order numbers matter, how to copy them from history, and what screenshots help support teams check faster.',
    focus: 'withdrawal order number checks',
    lead: 'Withdrawal checks move faster when the player sends the exact order number from account history instead of typing it from memory.',
    firstHeading: 'Copy the order number directly',
    firstBody: 'Open withdrawal history, copy the full order number, and keep the screenshot visible. A single missing character can cause a support agent to check the wrong record or ask for the same details again.',
  },
  {
    title: 'Mobile Casino Guide for India: Fast Access, Simple Menus and Safer Sessions',
    description: 'A mobile-first guide for players comparing casino-style games, app access, navigation quality, and safer play habits.',
    focus: 'mobile casino access',
    lead: 'Mobile casino pages should be easy to scan, quick to load, and clear enough for users to find login, wallet, game, and support options.',
    firstHeading: 'Look for simple mobile navigation',
    firstBody: 'A good mobile layout reduces mistakes. Clear buttons, readable text, and obvious wallet history pages make it easier for players to manage account actions without confusion.',
  },
  {
    title: 'Lottery and WinGo Player Guide: Quick Rounds, Limits and Account Safety',
    description: 'A responsible guide for quick-result games, daily limits, wallet checks, and support preparation for Indian players.',
    focus: 'lottery and WinGo play',
    lead: 'Quick-round games are easy to start, so players should set limits before playing and keep wallet records clear.',
    firstHeading: 'Treat quick rounds with discipline',
    firstBody: 'Fast games can create fast decisions. Set a fixed budget, avoid chasing losses, and check your wallet history before assuming a deposit or withdrawal has failed.',
  },
  {
    title: 'Online Gaming Support Checklist: UID, Screenshots and Human Help',
    description: 'Use this support checklist to prepare UID details, screenshots, order numbers, and safe account information before asking for help.',
    focus: 'player support preparation',
    lead: 'Support works best when the player sends the right evidence first: UID, screenshot, order number, amount, and timing details.',
    firstHeading: 'Prepare the support basics',
    firstBody: 'Do not send random screenshots without context. Label your issue clearly, include the relevant history page, and never share passwords or OTP codes.',
  },
  {
    title: 'Beginner Safety Guide for Real Money Gaming Apps in India',
    description: 'A beginner-friendly article about safer account access, payment records, responsible play, and trusted support links.',
    focus: 'beginner gaming safety',
    lead: 'New players should learn account safety and payment basics before focusing on bonuses, game lists, or payout speed.',
    firstHeading: 'Start with account safety',
    firstBody: 'Use private login details, keep payment screenshots, and understand where support links are located. Good habits make later recharge and withdrawal checks much easier.',
  },
  {
    title: 'Fast Login Guide: Account Access Tips for Mobile Gaming Users',
    description: 'A clean guide to login preparation, password safety, mobile browser access, and support links for gaming users.',
    focus: 'login access',
    lead: 'Fast login is useful only when it stays safe. Players should know where to access their account and what details should remain private.',
    firstHeading: 'Keep login details private',
    firstBody: 'Never share passwords or OTP codes. If login fails, use official recovery steps and support pages instead of sending private credentials to strangers.',
  },
  {
    title: 'Referral and Bonus Guide: How to Read Offers Before You Claim',
    description: 'Understand welcome bonuses, referral rewards, gift-code style offers, and safer claiming habits before using any promotion.',
    focus: 'bonus and referral offers',
    lead: 'Bonus pages can be useful, but players should read the conditions before claiming any reward.',
    firstHeading: 'Check bonus terms first',
    firstBody: 'Look for eligibility rules, minimum activity requirements, valid time windows, and withdrawal conditions. This keeps expectations realistic and avoids support confusion later.',
  },
  {
    title: 'Aviator and Crash Game Guide: Timing, Risk Control and Wallet Habits',
    description: 'A safer play guide for multiplier-style games, wallet checks, session limits, and player support preparation.',
    focus: 'Aviator and crash games',
    lead: 'Multiplier-style games are simple to understand but still require strict session limits and wallet awareness.',
    firstHeading: 'Set session rules before playing',
    firstBody: 'Decide your budget and stop point before the first round. Do not use support channels for strategy claims; use them only for account, payment, and technical issues.',
  },
  {
    title: 'Gaming App Download Guide: Android Setup, Browser Access and Support Links',
    description: 'A mobile setup guide for users comparing app downloads, browser access, safe installation habits, and player support resources.',
    focus: 'app download and setup',
    lead: 'A good download guide should help users understand setup steps without pushing them into unsafe files or unclear pages.',
    firstHeading: 'Use trusted access routes',
    firstBody: 'Avoid unknown download mirrors. Check that the page is relevant, mobile-friendly, and connected to clear support information before entering account details.',
  },
  {
    title: 'Recharge Pending Guide: What Indian Players Should Check First',
    description: 'A focused guide for recharge pending cases, payment proof, wallet timing, and support details that reduce back-and-forth.',
    focus: 'recharge pending support',
    lead: 'A pending recharge does not always mean a failed payment. Sometimes the wallet needs a short processing window or clearer support evidence.',
    firstHeading: 'Check the wallet and payment record',
    firstBody: 'Compare the payment amount, transaction time, and account UID before opening a support request. If the balance is still missing, prepare the screenshot and reference number in one message.',
  },
  {
    title: 'Fast Payout Preparation Guide: Withdrawal History and Bank Checks',
    description: 'How players can prepare withdrawal history screenshots, bank details, and order references before asking support for payout help.',
    focus: 'fast payout preparation',
    lead: 'Fast payout support depends on clean information. The more complete the withdrawal record is, the easier it is to trace the status.',
    firstHeading: 'Use withdrawal history as the main proof',
    firstBody: 'A clear withdrawal history screenshot should show amount, status, time, and order number. Keep bank or UPI details private unless an official support process asks for a safe verification step.',
  },
  {
    title: 'Dostwin and YaarWinApp Guide: Finding Games, Payments and Support',
    description: 'A network guide connecting Dostwin game information with YaarWinApp access, support routes, payment guidance, and safer play resources.',
    focus: 'Dostwin and YaarWinApp navigation',
    lead: 'Players often need more than one page: game information, payment guidance, app access, and support links should connect naturally.',
    firstHeading: 'Move between guides with purpose',
    firstBody: 'Use Dostwin for broad game and guide discovery, then use YaarWinApp resources when you need account access, recharge guidance, withdrawal information, or player support.',
  },
  {
    title: 'Game Account Safety Guide: Login Privacy, Screenshots and Responsible Play',
    description: 'Practical account safety habits for players using real-money gaming pages, support forms, and mobile-first game platforms.',
    focus: 'game account safety',
    lead: 'Account safety is not complicated, but it needs consistency every time a player logs in, pays, withdraws, or contacts support.',
    firstHeading: 'Separate public proof from private data',
    firstBody: 'Screenshots can help support teams, but passwords, OTP codes, and full banking details should stay private. Share only the details required to verify the specific issue.',
  },
  {
    title: 'Online Betting Mobile Guide: Fast Pages, Clear Wallets and Support Access',
    description: 'A mobile performance and usability guide for players who care about fast pages, readable wallet records, and support access.',
    focus: 'mobile betting usability',
    lead: 'Mobile betting pages should load quickly and keep important account actions easy to find.',
    firstHeading: 'Prioritize readable wallet pages',
    firstBody: 'Before choosing where to play, check whether recharge history, withdrawal history, and support links are easy to access on a phone screen. Clear records make every later issue easier to solve.',
  },
  {
    title: 'Gaming Bonus Terms Guide: Read Conditions Before Playing',
    description: 'A plain-English guide to bonus terms, wagering expectations, referral conditions, and safer decision making before claiming offers.',
    focus: 'bonus terms',
    lead: 'A bonus is useful only when the player understands the condition attached to it.',
    firstHeading: 'Read before you claim',
    firstBody: 'Check whether a bonus has activity requirements, expiry time, withdrawal limits, or eligible-game rules. Clear expectations reduce frustration and unnecessary support tickets.',
  },
  {
    title: 'New Player Support Guide: From First Login to First Withdrawal',
    description: 'A start-to-finish support guide for new players covering login, UID records, recharge proof, withdrawal history, and help links.',
    focus: 'new player support',
    lead: 'New players should learn the support path before the first problem appears.',
    firstHeading: 'Save the details that matter',
    firstBody: 'Keep your UID, transaction screenshots, and withdrawal order numbers organized. These details help support verify account activity without asking repeated questions.',
  },
  {
    title: 'App Access Troubleshooting Guide: Login, Loading and Payment Support',
    description: 'Troubleshooting steps for mobile users facing login issues, page loading delays, recharge confusion, or withdrawal status questions.',
    focus: 'app access troubleshooting',
    lead: 'Most app access problems can be narrowed down by checking login status, browser conditions, and wallet history first.',
    firstHeading: 'Start with the simple checks',
    firstBody: 'Refresh the page, confirm the account, check wallet history, and compare timestamps before contacting support. If the issue remains, send one complete support message with proof.',
  },
  {
    title: 'Real Money Gaming Checklist: Before You Register, Recharge or Withdraw',
    description: 'A responsible checklist for registration, payment preparation, wallet review, support evidence, and controlled play.',
    focus: 'real money gaming checklist',
    lead: 'A simple checklist can prevent many account, payment, and support problems before they happen.',
    firstHeading: 'Check the basics before playing',
    firstBody: 'Confirm you are eligible to play, set a budget, understand payment methods, and know where support is located. Responsible preparation matters more than chasing every promotion.',
  },
  {
    title: 'Withdrawal Status Guide: Pending, Processing and Completed Explained',
    description: 'Understand common withdrawal status labels, what order numbers are used for, and when to contact support for help.',
    focus: 'withdrawal status labels',
    lead: 'Withdrawal status labels can confuse new users, especially when pending and processing look similar.',
    firstHeading: 'Read the status before sending a ticket',
    firstBody: 'Pending usually means the request is waiting for review, processing means it is being checked or transferred, and completed means the payout was marked finished. Always confirm with the order number.',
  },
  {
    title: 'Support Evidence Guide: Screenshots That Actually Help Agents',
    description: 'A guide to sending cleaner screenshots for UID checks, recharge issues, withdrawal order numbers, and account support.',
    focus: 'support screenshots',
    lead: 'A screenshot only helps when it shows the right part of the account page clearly.',
    firstHeading: 'Send one clear screenshot',
    firstBody: 'Crop out unrelated content, keep the amount and order number visible, and describe the problem in one short sentence. This makes support work faster and keeps private details safer.',
  },
  {
    title: 'YaarWinApp Player Route: Login, Wallet, Withdrawal and Human Support',
    description: 'A player route guide connecting YaarWinApp login, wallet checks, withdrawal preparation, and human support access from Dostwin.',
    focus: 'YaarWinApp player route',
    lead: 'YaarWinApp users need a clear route from login to wallet checks and support when something needs attention.',
    firstHeading: 'Use the correct route for each task',
    firstBody: 'For general information, start with Dostwin guides. For account-specific actions such as login, recharge, withdrawal, or support, use YaarWinApp resources and official support paths.',
  },
  {
    title: 'Safer Play Routine: Budget Limits, Wallet Reviews and Cooldown Habits',
    description: 'A responsible gaming routine for users who want entertainment, payment control, and healthier session habits.',
    focus: 'safer play routine',
    lead: 'A safer play routine keeps gaming closer to entertainment and further from emotional decisions.',
    firstHeading: 'Set limits before the session',
    firstBody: 'Choose a budget, define a stop point, and review wallet history after playing. If a session feels stressful, take a break before making another payment or bet.',
  },
  {
    title: 'Casino Wallet Guide: Deposits, Payout Records and Support Timing',
    description: 'A wallet-focused guide for casino players managing deposits, withdrawals, transaction references, and support follow-ups.',
    focus: 'casino wallet records',
    lead: 'Wallet records are the backbone of every payment support request.',
    firstHeading: 'Keep wallet history readable',
    firstBody: 'When payment questions appear, check whether the wallet record already shows pending, processing, or completed status. Then send support only the exact record that matches your issue.',
  },
  {
    title: 'Gaming Guide Hub: How Internal Links Help Players Find the Next Step',
    description: 'A guide to using Dostwin internal links, related articles, YaarWinApp references, and support pages without getting lost.',
    focus: 'guide navigation',
    lead: 'Good internal links help players move from general information to the exact support or game guide they need.',
    firstHeading: 'Follow the next useful link',
    firstBody: 'A strong guide should not leave readers stranded. Move from game education to payment help, from payment help to support, and from support to responsible play information when needed.',
  },
];

const normalizeSlug = (value?: string) => (value || '').trim();

const titleToSlug = (value?: string) =>
  (value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

export const isProtectedBlogArticle = (article: BlogArticleLike) => {
  const slug = normalizeSlug(article.slug);
  const generatedSlug = titleToSlug(article.title);
  const title = article.title || '';

  return (
    PROTECTED_SLUGS.has(slug) ||
    PROTECTED_SLUGS.has(generatedSlug) ||
    PROTECTED_TITLE_PATTERNS.some((pattern) => pattern.test(title))
  );
};

export const getSeoSupportTopic = (article: BlogArticleLike) => {
  const key = article.slug || article._id || article.title || 'support-guide';
  return ARTICLE_ANGLES[hashString(key) % ARTICLE_ANGLES.length];
};

const getArticleIdentity = (article: BlogArticleLike) =>
  String(article.slug || article._id || article.title || 'support-guide');

const getArticleDateValue = (article: BlogArticleLike) => {
  const time = new Date(article.publishDate || 0).getTime();
  return Number.isNaN(time) ? 0 : time;
};

const getGeneratedDate = (index: number) =>
  ORDERED_SUPPORT_DATES[index] || ORDERED_SUPPORT_DATES[ORDERED_SUPPORT_DATES.length - 1];

const makeUniqueTitle = (title: string, usedTitles: Set<string>, article: BlogArticleLike) => {
  if (!usedTitles.has(title)) {
    usedTitles.add(title);
    return title;
  }

  const identity = titleToSlug(getArticleIdentity(article))
    .split('-')
    .filter(Boolean)
    .slice(0, 4)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const fallbackTitle = identity ? `${title}: ${identity}` : `${title}: Player Guide`;

  usedTitles.add(fallbackTitle);
  return fallbackTitle;
};

export const enhanceBlogArticleForSeoSupport = <T extends BlogArticleLike>(article: T): T & {
  isSeoSupportRewrite?: boolean;
  seoFocus?: string;
  seoLead?: string;
  seoFirstHeading?: string;
  seoFirstBody?: string;
} => {
  if (isProtectedBlogArticle(article)) {
    return article;
  }

  const topic = getSeoSupportTopic(article);
  const key = article.slug || article._id || article.title || topic.title;
  const date = SUPPORT_DATES[hashString(key) % SUPPORT_DATES.length];

  return {
    ...article,
    title: topic.title,
    shortDescription: topic.description,
    publishDate: date,
    isSeoSupportRewrite: true,
    seoFocus: topic.focus,
    seoLead: topic.lead,
    seoFirstHeading: topic.firstHeading,
    seoFirstBody: topic.firstBody,
  };
};

export const enhanceBlogArticlesForSeoSupport = <T extends BlogArticleLike>(articles: T[]) => {
  const usedTitles = new Set<string>();
  const sortedSupportArticles = articles
    .filter((article) => !isProtectedBlogArticle(article))
    .sort((a, b) => {
      const dateDiff = getArticleDateValue(b) - getArticleDateValue(a);
      if (dateDiff !== 0) return dateDiff;
      return getArticleIdentity(a).localeCompare(getArticleIdentity(b));
    });
  const supportIndexByIdentity = new Map<string, number>();

  sortedSupportArticles.forEach((article, index) => {
    supportIndexByIdentity.set(getArticleIdentity(article), index);
  });

  return articles.map((article) => {
    if (isProtectedBlogArticle(article)) {
      if (article.title) {
        usedTitles.add(article.title);
      }
      return article;
    }

    const identity = getArticleIdentity(article);
    const index = supportIndexByIdentity.get(identity) ?? 0;
    const topic = ARTICLE_ANGLES[index % ARTICLE_ANGLES.length];

    return {
      ...article,
      title: makeUniqueTitle(topic.title, usedTitles, article),
      shortDescription: topic.description,
      publishDate: getGeneratedDate(index),
      isSeoSupportRewrite: true,
      seoFocus: topic.focus,
      seoLead: topic.lead,
      seoFirstHeading: topic.firstHeading,
      seoFirstBody: topic.firstBody,
    };
  });
};
