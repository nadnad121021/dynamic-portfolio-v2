import { MessageSquareQuote, Quote } from "lucide-react";
import { reviews, type Review } from "../../data/portfolio.data";
import { FaLinkedin } from "react-icons/fa6";

type ReviewerAvatarProps = {
  review: Review;
};

function ReviewerAvatar({ review }: ReviewerAvatarProps) {
  const initials = review.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-cyan-400/10">
      {review.image ? (
        <img
          src={review.image}
          alt={`${review.name} profile`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-black text-cyan-300">{initials}</span>
      )}
    </div>
  );
}

type ReviewCardProps = {
  review: Review;
  index: number;
  isLastItem: boolean;
};

function ReviewCard({ review, index, isLastItem }: ReviewCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-2xl hover:shadow-cyan-950/20 sm:p-8 ${
        isLastItem ? "md:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl transition group-hover:bg-cyan-400/[0.08]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <Quote className="h-9 w-9 shrink-0 text-cyan-400/60" />

        <span className="font-mono text-xs font-bold text-slate-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <blockquote className="relative mt-7 flex-1 text-base leading-8 text-slate-300">
        “{review.review}”
      </blockquote>

      <div className="relative mt-8 border-t border-white/5 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <ReviewerAvatar review={review} />

            <div className="min-w-0">
              <p className="truncate font-bold text-white">{review.name}</p>

              <p className="mt-1 text-sm text-slate-400">{review.role}</p>

              <p className="mt-1 text-xs font-semibold text-cyan-400">
                {review.company}
              </p>
            </div>
          </div>

          {review.linkedin && (
            <a
              href={review.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${review.name} LinkedIn`}
              className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 border-y border-white/5 bg-slate-900/25 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300">
            <MessageSquareQuote className="h-4 w-4" />
            Recommendations
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            What people say about working with me.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Feedback from former teammates and collaborators across backend,
            mobile, and full-stack software projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.company}`}
              review={review}
              index={index}
              isLastItem={
                reviews.length % 2 !== 0 && index === reviews.length - 1
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
