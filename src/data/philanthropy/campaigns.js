// Semester-based fundraising campaigns.
// Update these values each semester (raised/goal/donateUrls) without touching UI code.

const campaigns = [
  {
    id: '2026-spring',
    semesterLabel: 'Spring 2026',
    startDate: '2026-01-15',
    endDate: '2026-05-31',
    goalAmountUsd: 2500,
    raisedAmountUsd: 0,
    updatedAt: '2026-02-21',
    donateUrls: {
      // Recommended when you want donations to be tax-deductible.
      directToSeriousFun: 'https://seriousfun.org/',

      // Optional: a Stripe Payment Link / hosted checkout owned by your chapter.
      // If you use tsdsdshis, donations typically go to your chapter first.
      viaChapterStripe: '',
    },
  },
  {
    id: '2025-fall',
    semesterLabel: 'Fall 2025',
    startDate: '2025-08-20',
    endDate: '2025-12-20',
    goalAmountUsd: 2000,
    raisedAmountUsd: 0,
    updatedAt: '2025-12-20',
    donateUrls: {
      directToSeriousFun: 'https://seriousfun.org/',
      viaChapterStripe: '',
    },
  },
];

export default campaigns;
