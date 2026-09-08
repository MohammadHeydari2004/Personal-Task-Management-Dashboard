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
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      label: "در حال انجام",
      value: stats.inProgress,
      icon: "⏳",
      accentColor: "border-yellow-500",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
    },
    {
      label: "تکمیل‌شده",
      value: stats.completed,
      icon: "✅",
      accentColor: "border-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      label: "عقب‌افتاده",
      value: stats.overdue,
      icon: "⚠️",
      accentColor: "border-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section aria-labelledby="task-stats-heading" className="mb-6">
      <h2
        id="task-stats-heading"
        className="mb-4 text-lg font-semibold text-gray-900"
      >
        آمار کلی
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            role="region"
            aria-label={`${card.label}: ${card.value}`}
            className={`rounded-lg border-r-4 ${card.accentColor} ${card.bgColor} p-4 shadow-sm transition-shadow hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {card.label}
                </p>
                <p className={`mt-1 text-3xl font-bold ${card.textColor}`}>
                  {card.value}
                </p>
              </div>
              <span className="text-3xl" aria-hidden="true">
                {card.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
