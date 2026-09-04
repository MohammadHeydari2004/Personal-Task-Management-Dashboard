import type { Task } from "../types/task";

export const getTodayUTC = (): Date => {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
};

const SEVENDAY = 7 * 24 * 60 * 60 * 1000;

const TODAY = getTodayUTC();
const PAST_DATE = new Date(TODAY.getTime() - SEVENDAY); // ۷ روز قبل
const FUTURE_DATE = new Date(TODAY.getTime() + SEVENDAY); // ۷ روز بعد

export const tasklist: Task[] = [
  {
    id: "t-001",
    title: "طراحی معماری پایگاه داده",
    description: "ترسیم نمودار ERD و تعیین روابط جداول اصلی پروژه",
    priority: "high",
    status: "planned",
    dueDate: FUTURE_DATE,
    creationDate: PAST_DATE,
  },
  {
    id: "t-002",
    title: "نگارش مستندات API",
    description: "تکمیل داکیومنت‌های Swagger برای اندپوینت‌های احراز هویت",
    priority: "medium",
    status: "planned",
    dueDate: TODAY,
    creationDate: PAST_DATE,
  },
  {
    id: "t-003",
    title: "بررسی کتابخانه‌های تست E2E",
    description: "مقایسه Cypress و Playwright برای انتخاب ابزار مناسب",
    priority: "low",
    status: "planned",
    dueDate: PAST_DATE,
    creationDate: PAST_DATE,
  },
  {
    id: "t-004",
    title: "پیاده‌سازی سیستم لاگینگ",
    description: "افزودن Winston و تنظیم خروجی‌های JSON برای محیط پروداکشن",
    priority: "high",
    status: "in-progress",
    dueDate: TODAY,
    creationDate: PAST_DATE,
  },
  {
    id: "t-005",
    title: "بهینه‌سازی کوئری‌های SQL",
    description: "اضافه کردن ایندکس‌ها و بررسی Execution Plan کوئری‌های کند",
    priority: "medium",
    status: "in-progress",
    dueDate: FUTURE_DATE,
    creationDate: TODAY,
  },
  {
    id: "t-006",
    title: "رفع باگ نمایش کاراکترهای فارسی",
    description: "اصلاح انکدینگ UTF-8 در هدر پاسخ‌های HTTP",
    priority: "low",
    status: "in-progress",
    dueDate: PAST_DATE,
    creationDate: PAST_DATE,
  },
  {
    id: "t-007",
    title: "راه‌اندازی CI/CD Pipeline",
    description: "تنظیم GitHub Actions برای بیلد و دیپلوی خودکار",
    priority: "high",
    status: "completed",
    dueDate: PAST_DATE,
    creationDate: PAST_DATE,
  },
  {
    id: "t-008",
    title: "پیاده‌سازی صفحه ورود",
    description: "طراحی فرم لاگین با اعتبارسنجی سمت کلاینت",
    priority: "medium",
    status: "completed",
    dueDate: TODAY,
    creationDate: TODAY,
  },
  {
    id: "t-009",
    title: "بروزرسانی وابستگی‌های npm",
    description: "آپدیت پکیج‌ها به آخرین نسخه پایدار و رفع هشدارهای امنیتی",
    priority: "low",
    status: "completed",
    dueDate: FUTURE_DATE,
    creationDate: PAST_DATE,
  },
];
