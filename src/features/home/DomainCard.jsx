import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DomainCard({ domain }) {
  const Icon = domain.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0B0B0B] h-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8 }}
          src={domain.image}
          alt={domain.title}
          className="h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_left,rgba(183,24,43,.28),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-6">

        {/* Number */}
        <div className="flex items-center gap-4">

          <span className="text-5xl font-extrabold leading-none text-[#b7182b]">
            {domain.number}
          </span>

          <div className="h-px w-12 bg-white/20" />

          <Icon
            size={20}
            className="text-[#b7182b]"
          />

        </div>

        {/* Bottom */}
        <div className="max-w-[280px]">

          <h3 className="text-xl font-bold leading-[1.2] tracking-tight text-white lg:text-2xl">
            {domain.title}
          </h3>

          <p className="mt-2 text-xs font-normal leading-[1.6] text-white/65 lg:text-sm">
            {domain.subtitle}
          </p>

          <Link
            to={domain.href}
            className="mt-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white transition duration-300 hover:text-[#b7182b] leading-[1.2]"
          >
            Explore Domain

            <ArrowUpRight
              size={16}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/5 transition duration-500 group-hover:ring-[#b7182b]/40" />
    </motion.article>
  );
}