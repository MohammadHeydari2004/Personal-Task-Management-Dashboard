interface StatCard {
  label: string;
  value: number;
  icon: string;
  accentColor: string;
  textColor: string;
  bgColor: string;
}

interface TaskStatsProps {
  stats: {
    total: number;
    inProgress: number;
    completed: number;
    overdue: number;
  };
}

export function TaskStats({ stats }: TaskStatsProps) {
  const statCards: StatCard[] = [
    {
      label: "کل وظایف",
      value: stats.total,
      icon: "📋",
      accentColor: "border-blue-500",
      textColor: "text-blue-700 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      label: "در حال انجام",
      value: stats.inProgress,
      icon: "⏳",
      accentColor: "border-yellow-500",
      textColor: "text-yellow-700 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    },
    {
      label: "تکمیل‌شده",
      value: stats.completed,
      icon: "✅",
      accentColor: "border-green-500",
      textColor: "text-green-700 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      label: "عقب‌افتاده",
      value: stats.overdue,
      icon: "⚠️",
      accentColor: "border-red-500",
      textColor: "text-red-700 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/30",
    },
  ];

  return (
    <section
      aria-labelledby="task-stats-heading"
      aria-live="polite"
      className="mb-5 sm:mb-6 md:mb-8"
    >
      <h2
        id="task-stats-heading"
        className="mb-3 text-sm font-semibold text-gray-900 sm:mb-4 sm:text-base dark:text-gray-100"
      >
        آمار کلی
      </h2>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            role="region"
            aria-label={`${card.label}: ${card.value}`}
            className={`rounded-xl border-r-4 ${card.accentColor} ${card.bgColor} p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4`}
          >
            <div className="flex items-center justify-between gap-1">
              <div className="min-w-0">
                <p className="truncate text-[0.65rem] font-medium text-gray-500 sm:text-xs dark:text-gray-400">
                  {card.label}
                </p>
                <p
                  className={`mt-0.5 text-xl font-bold sm:mt-1 sm:text-2xl lg:text-3xl ${card.textColor}`}
                >
                  {card.value}
                </p>
              </div>
              <span className="shrink-0 text-lg sm:text-2xl" aria-hidden="true">
                {card.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
