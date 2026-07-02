import advancedMobilityImage from '@/assets/images/domain-advanced-mobility.webp';
import roboticsImage from '@/assets/images/domain-automation-robotics.webp';
import sustainabilityImage from '@/assets/images/domain-environmental-sustainability.webp';
import sportsImage from '@/assets/images/domain-sports-engineering.webp';

export const DOMAIN_SECTION_ITEMS = Object.freeze([
  {
    id: 'sports-engineering',
    eyebrow: 'Sports Engineering',
    title: 'Engineering Human Performance.',
    description:
      'Develop intelligent products that enhance athletic performance using sensors, data intelligence, biomechanics and precision engineering.',
    meta: ['Smart Bicycle', 'Cycling Computer', 'Performance Sensors', 'Wearables', 'Smart Helmets'],
    image: sportsImage,
    imageAlt:
      'Cyclist undergoing motion analysis in a dark performance testing lab with precision sensors.',
  },
  {
    id: 'advanced-mobility',
    eyebrow: 'Advanced Mobility',
    title: 'Engineering Future Mobility.',
    description:
      'Design intelligent mobility platforms that connect hardware, software and artificial intelligence for safer and smarter transportation.',
    meta: ['RCX Smart Bicycle', 'Smart Navigation', 'Connected Vehicles', 'Mobility Platforms', 'Route Intelligence'],
    image: advancedMobilityImage,
    imageAlt:
      'Night urban mobility test environment with connected transportation traces and engineering hardware.',
  },
  {
    id: 'automation-robotics',
    eyebrow: 'Automation & Robotics',
    title: 'Engineering Autonomous Systems.',
    description:
      'Create robotic and automated systems capable of sensing, learning and making intelligent decisions.',
    meta: ['Industrial Robotics', 'AI Vision', 'Automation', 'Embedded Systems', 'Robotic Intelligence'],
    image: roboticsImage,
    imageAlt:
      'Industrial robotic arm and AI vision system operating inside a dark robotics lab.',
  },
  {
    id: 'environmental-sustainability',
    eyebrow: 'Environmental Sustainability',
    title: 'Engineering a Sustainable Future.',
    description:
      'Build intelligent technologies that help industries monitor, optimise and preserve environmental resources.',
    meta: ['Smart Monitoring', 'Renewable Energy', 'Environmental Intelligence', 'IoT', 'Sustainability Platforms'],
    image: sustainabilityImage,
    imageAlt:
      'Environmental sensor station in a dark renewable energy landscape with remote monitoring traces.',
  },
]);
