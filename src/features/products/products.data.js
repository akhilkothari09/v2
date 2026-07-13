import {
  Cpu,
  Gauge,
  LockKeyhole,
  Map,
  RadioTower,
  ShieldCheck,
} from 'lucide-react';
import featuredRcxImage from '@/assets/images/featured-rcx.jpg';

export const carouselImages = [
  {
    label: 'Engineering view',
    src: featuredRcxImage,
    alt: 'RCX bicycle engineering feature view.',
  },
];

export const featureItems = [
  { label: 'Integrated GPS computer', icon: Map },
  { label: 'AI theft prevention', icon: ShieldCheck },
  { label: 'Geo-fencing and odometer', icon: LockKeyhole },
  { label: 'Turn by turn navigation', icon: Gauge },
  { label: 'Smart sensor integration', icon: Cpu },
  { label: '4G, Bluetooth, ANT+ and WiFi', icon: RadioTower },
];

export const specificationGroups = [
  {
    title: 'Frame Set',
    items: [
      ['Frame', 'Carbon Fibre T800 road frame, flat mounted disc brakes, 142 x 12 mm thru axle'],
      ['Fork', 'Carbon fork with 100 x 12 mm axle, max tire size 700C, max 32C width'],
      ['Headset', '1-1/2 (52 mm) top and 1-1/2 (52 mm) bottom'],
    ],
  },
  {
    title: 'Drive Train',
    items: [
      ['Shifter', 'LTWOO / Shimano, all variants including Di2'],
      ['Front Derailleur', 'LTWOO / Shimano, all variants including Di2, 2 speed'],
      ['Rear Derailleur', 'LTWOO / Shimano, all variants including Di2, 11/12 speed'],
      ['Cassette', 'Shimano CS-R7000 11-32T / 11-34T'],
      ['Crankset', 'Shimano 105 R7100 Hollowtech I 50-34 / 52-36, 165/170 mm crank'],
      ['Chain', 'Shimano HG601'],
    ],
  },
  {
    title: 'Wheels',
    items: [
      ['Front Wheel', 'Carbon ceramic rim H 50, W 21/22, straight pull 24 spokes, sealed ceramic bearing hub'],
      ['Rear Wheel', 'Carbon ceramic rim H 50, W 21/22, straight pull 24 spokes, sealed ceramic bearing hub'],
      ['Tires', 'Schwalbe Pro One / One Plus, tubeless ready, 700C - 28/32'],
    ],
  },
  {
    title: 'Brakes',
    items: [
      ['System', 'Hydraulic disc brakes, 160 mm front / 160 mm rear rotors'],
      ['Rotor', 'Centre locking disc rotor'],
    ],
  },
  {
    title: 'Components',
    items: [
      ['Seat Post', 'Carbon seat post with Di2 provision'],
      ['Handle Bar', 'Carbon drop type 420 mm / 450 mm with integrated stem'],
      ['Saddle', 'Selle Royal superlight saddle with carbon rails'],
    ],
  },
  {
    title: 'Weight',
    items: [
      ['Frame Module', '2070 g, frame + seat post + fork + handle bar'],
      ['Wheelset', '1780 g / wheel set'],
    ],
  },
];
