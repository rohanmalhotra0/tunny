/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company or entry
 * @property {string} position - Position title or description
 * @property {string} url - Company website or link to resource
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - HTML/Markdown summary of the position
 * @property {string[]} highlights - Plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'Accounting Students Association - University of Delaware',
    position: 'Member',
    url: 'https://www.udel.edu',
    startDate: '2025-09-01',
    summary: 'Active member participating in professional development and networking events.',
    highlights: [],
  },
  {
    name: 'Memorial Pool',
    position: 'Lifeguard',
    url: '',
    startDate: '2024-06-01',
    summary:
      'Ensured swimmer safety and fostered a positive, community-focused environment.',
    highlights: [
      'Cultivated positive relationships with members and promoted safety awareness.',
      'Executed regular safety drills and maintained vigilant surveillance.',
      'Applied first aid and CPR to enable swift, effective responses during emergencies.',
    ],
  },
  {
    name: 'UDairy Creamery',
    position: 'Research Analyst',
    url: 'https://www.udel.edu/udairy-creamery/',
    startDate: '2024-10-01',
    endDate: '2024-11-30',
    summary:
      'Analyzed profitability and market viability for potential UDairy cheese offerings.',
    highlights: [
      'Evaluated production costs, pricing, and demand to inform profitability recommendations.',
      'Conducted consumer polling on price sensitivity and purchasing habits to guide strategy.',
    ],
  },
  {
    name: 'Erickson Senior Living',
    position: 'Server (Part-time)',
    url: 'https://www.ericksonseniorliving.com/',
    startDate: '2023-06-01',
    endDate: '2023-09-30',
    summary:
      'Supported front-of-house operations in a fast-paced environment.',
    highlights: [
      'Demonstrated versatility across hosting, bussing, and expediting.',
      'Delivered consistent, friendly customer service under time pressure.',
    ],
  },
];

export default work;
