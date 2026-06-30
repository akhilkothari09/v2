import advancedMobilityImage from '@/assets/images/domain-advanced-mobility.webp';
import sportsEngineeringImage from '@/assets/images/domain-sports-engineering.webp';
import featuredRcxImage from '@/assets/images/featured-rcx.webp';
import heroEngineeringImage from '@/assets/images/hero-engineering.webp';
import whoWeAreImage from '@/assets/images/who-we-are-engineering.webp';

const remoteImage = (id, width = 1200, height = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;

export const roadStories = [
  {
    id: 1,
    name: 'Shikher Gupta',
    designation: 'Buyer',
    city: 'Gurgaon',
    profileImage: remoteImage('photo-1500648767791-00dcc994a43e', 320, 320),
    rating: 5,
    review:
      'The RCX changed my Tried a ride on this beautiful cycle. Almost feel weightless. Infact, it is a little too good, now my expensive gear cycle looks like a elephant in horse race 😀😬',
    rideDistanceKm: 86,
    bicycleImages: [
      {
        src: featuredRcxImage,
        alt: 'RCX smart bicycle shown in a dark studio profile.',
      },
      {
        src: remoteImage('photo-1485965120184-e220f721d03e', 1000, 1200),
        alt: 'Road bicycle detail photographed during an early morning ride.',
      },
      {
        src: sportsEngineeringImage,
        alt: 'Performance cycling engineering visual with a dark editorial finish.',
      },
    ],
  },
  {
    id: 2,
    name: 'Meera Iyer',
    designation: 'Urban Mobility Researcher',
    city: 'Chennai',
    profileImage: remoteImage('photo-1494790108377-be9c29b29330', 320, 320),
    rating: 5,
    review:
      'I use the RCX for commutes and long coastal rides, and it has become the one product I trust across both. It is calm at speed, confident in traffic and surprisingly elegant when the route gets messy. The ride data helped me understand my effort without turning the experience into a dashboard.',
    rideDate: 'April 2026',
    rideSortDate: '2026-04-27',
    rideDistanceKm: 112,
    bicycleImages: [
      {
        src: remoteImage('photo-1507035895480-2b3156c31fc8', 1200, 900),
        alt: 'Cyclist riding a performance bicycle on an open road.',
      },
      {
        src: advancedMobilityImage,
        alt: 'Advanced mobility concept image used as an editorial RCX ride visual.',
      },
    ],
  },
  {
    id: 3,
    name: 'Arjun Menon',
    designation: 'Endurance Cyclist',
    city: 'Kochi',
    profileImage: remoteImage('photo-1507003211169-0a1dd7228f2d', 320, 320),
    rating: 4,
    review:
      'On a humid century ride, I noticed how stable the bike felt after the first climb. The assistance is subtle and the geometry makes long hours feel less punishing. What stayed with me was the confidence: every part of the bike feels intentional, from the cockpit to the way information appears during the ride.',
    rideDate: 'March 2026',
    rideSortDate: '2026-03-21',
    rideDistanceKm: 148,
    bicycleImages: [
      {
        src: remoteImage('photo-1529422643029-d4585747aaf2', 1200, 1200),
        alt: 'A road bicycle photographed against a dramatic outdoor route.',
      },
      {
        src: featuredRcxImage,
        alt: 'RCX smart bicycle studio profile with controlled lighting.',
      },
      {
        src: remoteImage('photo-1541625602330-2277a4c46182', 1000, 1200),
        alt: 'Cycling route photograph from a long endurance ride.',
      },
    ],
  },
  {
    id: 4,
    name: 'Nisha Rao',
    designation: 'Founder, Pedal Studio',
    city: 'Hyderabad',
    profileImage: remoteImage('photo-1438761681033-6461ffad8d80', 320, 320),
    rating: 5,
    review:
      'RCX feels premium without becoming precious. I have taken it through city flyovers, broken lanes and weekend training routes, and it never loses its composed character. The product has the kind of restraint I look for in good design: enough intelligence to be useful, enough silence to let the ride remain personal.',
    rideDate: 'February 2026',
    rideSortDate: '2026-02-14',
    rideDistanceKm: 74,
    bicycleImages: [
      {
        src: remoteImage('photo-1511994298241-608e28f14fde', 1200, 900),
        alt: 'Bicycle parked near an urban ride route.',
      },
    ],
  },
  {
    id: 5,
    name: 'Kabir Sethi',
    designation: 'Systems Engineer',
    city: 'Pune',
    profileImage: remoteImage('photo-1506794778202-cad84cf45f1d', 320, 320),
    rating: 4,
    review:
      'I came to RCX for the engineering and stayed for the ride feel. The connected features are polished, but they never dominate the product. During climbs, the feedback is useful; during descents, the bike simply disappears beneath you. It has the confidence of a well-tested machine.',
    rideDate: 'January 2026',
    rideSortDate: '2026-01-30',
    rideDistanceKm: 126,
    bicycleImages: [
      {
        src: whoWeAreImage,
        alt: 'Engineering studio image connected to the RCX product development story.',
      },
      {
        src: remoteImage('photo-1517649763962-0c623066013b', 1200, 900),
        alt: 'Cyclist riding through an open training road.',
      },
    ],
  },
  {
    id: 6,
    name: 'Aditi Varma',
    designation: 'Architect',
    city: 'Delhi',
    profileImage: remoteImage('photo-1544005313-94ddf0286df2', 320, 320),
    rating: 5,
    review:
      'My favorite thing about RCX is how little it asks of me. I can start a route, ride across mixed surfaces and trust that the bike is reading the ride context without turning it into noise. It feels crafted, restrained and genuinely modern. That balance is rare.',
    rideDate: 'December 2025',
    rideSortDate: '2025-12-22',
    rideDistanceKm: 92,
    bicycleImages: [
      {
        src: heroEngineeringImage,
        alt: 'Dark engineering hero image used as an atmospheric RCX road story visual.',
      },
      {
        src: remoteImage('photo-1485965120184-e220f721d03e', 1200, 900),
        alt: 'Minimal bicycle detail captured on a quiet ride.',
      },
      {
        src: featuredRcxImage,
        alt: 'RCX smart bicycle in a controlled editorial studio scene.',
      },
    ],
  },
];
