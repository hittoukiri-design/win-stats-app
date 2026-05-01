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
  '2026-01-08',
  '2026-01-19',
  '2026-02-04',
  '2026-02-22',
  '2026-03-07',
  '2026-03-26',
  '2026-04-09',
  '2026-04-21',
  '2026-05-02',
];

const TOPICS = [
  {
    match: /football|sports|cricket|match|betting/i,
    title: 'Sports Betting Guide for India: Safe Picks, Mobile Play and Payout Tips',
    description: 'Learn how Indian players can approach sports betting with safer habits, mobile-first checks, payment awareness, and useful support links.',
    focus: 'sports betting',
  },
  {
    match: /bonus|promotion|gift|reward|cashback/i,
    title: 'Online Gaming Bonus Guide: Welcome Rewards, Referrals and Safer Claims',
    description: 'A practical guide to bonus offers, referral rewards, gift codes, and responsible claiming habits for Indian gaming users.',
    focus: 'bonus and referral rewards',
  },
  {
    match: /recharge|deposit|upi|payment/i,
    title: 'Recharge and UPI Payment Guide for Online Gaming Players in India',
    description: 'Review recharge steps, UPI payment checks, screenshots, transaction IDs, and support tips for smoother online gaming payments.',
    focus: 'recharge and UPI payments',
  },
  {
    match: /withdraw|payout|cashout|cash out/i,
    title: 'Withdrawal Support Guide: Order Numbers, Payout Checks and Player Safety',
    description: 'Understand withdrawal history screenshots, order number checks, payout timing, and support preparation for real-money gaming users.',
    focus: 'withdrawal support',
  },
  {
    match: /mobile|app|android|download|login/i,
    title: 'Mobile Gaming Access Guide: Login, App Setup and Smooth Play on Phone',
    description: 'A mobile-first guide covering app access, login safety, fast loading, and support links for players using Android or web browsers.',
    focus: 'mobile gaming access',
  },
  {
    match: /.*/i,
    title: 'Online Gaming Support Guide for India: Login, Payments and Safer Play',
    description: 'A clean support guide for Indian players covering login access, payments, withdrawals, support checks, and responsible gaming habits.',
    focus: 'online gaming support',
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
  const haystack = `${article.title || ''} ${article.slug || ''} ${article.shortDescription || ''}`;
  return TOPICS.find((topic) => topic.match.test(haystack)) || TOPICS[TOPICS.length - 1];
};

export const enhanceBlogArticleForSeoSupport = <T extends BlogArticleLike>(article: T): T & { isSeoSupportRewrite?: boolean; seoFocus?: string } => {
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
  };
};
