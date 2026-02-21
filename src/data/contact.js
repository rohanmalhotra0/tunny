import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import organization from './philanthropy/organization';

const data = [];

if (organization.instagramUrl) {
  data.push({
    link: organization.instagramUrl,
    label: 'Instagram',
    icon: faInstagram,
  });
}

if (organization.contactEmail) {
  data.push({
    link: `mailto:${organization.contactEmail}`,
    label: 'Email',
    icon: faEnvelope,
  });
}

export default data;
