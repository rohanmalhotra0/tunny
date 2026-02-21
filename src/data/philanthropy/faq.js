const faq = [
  {
    question: 'Where does my donation go?',
    answer: [
      'You’ll always see where your donation is headed before you submit it.',
      '',
      'If you donate **directly to SeriousFun**, the payment goes straight to the nonprofit and you should receive a tax receipt from them (subject to their policies).',
      '',
      'If you donate **through our chapter fundraising checkout**, the payment is collected by our chapter first, and we donate the semester total to SeriousFun at the end of the campaign. (In many cases, donations made to a chapter are *not* tax-deductible—see below.)',
    ].join('\n'),
  },
  {
    question: 'Are donations tax-deductible?',
    answer: [
      'Generally:',
      '',
      '- **Direct to SeriousFun**: Yes — donors typically receive a tax receipt from SeriousFun.',
      '- **Through our chapter**: Often **no**, unless the receiving entity is itself an eligible charitable organization for tax purposes.',
      '',
      'If you need a receipt for taxes, we recommend donating directly to SeriousFun.',
    ].join('\n'),
  },
  {
    question: 'Why would we use Stripe?',
    answer: [
      'Stripe can power a fast, mobile-friendly checkout experience for chapter-led fundraising (Apple Pay / Google Pay / cards) and makes it easy to reconcile donations.',
      '',
      'If your Stripe account is for an eligible nonprofit and most payments will be tax-deductible donations, you can request nonprofit pricing by emailing `nonprofit@stripe.com` with:',
      '',
      '- Proof of nonprofit status',
      '- The email on the Stripe account',
      '- Confirmation that most payments will be tax-deductible donations',
      '',
      'If donations are being collected by a chapter that is not an eligible charitable organization, Stripe may not consider those payments “tax-deductible donations.” In that case, we recommend linking donors directly to SeriousFun’s donation flow.',
    ].join('\n'),
  },
];

export default faq;
