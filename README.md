# 📋 داشبورد مدیریت وظایف شخصی

> یک اپلیکیشن تک‌صفحه‌ای (SPA) پیشرفته، تایپ‌سیف و کاملاً دسترس‌پذیر برای مدیریت وظایف روزانه  
> توسعه‌داده‌شده با **React 19**، **TypeScript 6** و **Vite 8** با بهینه‌سازی خودکار توسط **React Compiler**

[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646cff.svg)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🎯 معرفی پروژه

این پروژه یک داشبورد مدیریت وظایف شخصی است که با تمرکز بر اصول **مهندسی نرم‌افزار مدرن**، **تایپ‌سیفتی سخت‌گیرانه**، **دسترس‌پذیری (a11y)** و **طراحی واکنش‌گرا** پیاده‌سازی شده است. معماری پروژه بر پایهٔ **کامپوننت‌محوری**، **جداسازی دغدغه‌ها (Separation of Concerns)** و **الگوهای طراحی اثبات‌شده** استوار است.

### ✨ ویژگی‌های برجسته

#### 🗂 مدیریت کامل وظایف (CRUD)

- **ایجاد وظیفه:** فرم تعاملی با اعتبارسنجی لحظه‌ای (Real-time Validation)
- **مشاهده جزئیات:** صفحه اختصاصی برای هر وظیفه با نمایش تاریخ‌های شمسی
- **ویرایش سریع:** امکان ویرایش از طریق مودال در صفحه جزئیات
- **حذف ایمن:** تأییدیه قبل از حذف با پیام‌های کاربرپسند
- **تغییر وضعیت Inline:** تغییر وضعیت بدون نیاز به باز کردن مودال

#### 🔍 جست‌وجو و فیلتر پیشرفته

- جست‌وجوی ترکیبی در عنوان و توضیحات
- فیلتر چندگانه بر اساس وضعیت و اولویت
- مرتب‌سازی پویا (صعودی/نزولی) بر اساس تاریخ سررسید یا اولویت
- بازنشانی سریع فیلترها

#### 📊 داشبورد آماری لحظه‌ای

- نمایش کل وظایف، در حال انجام، تکمیل‌شده و عقب‌افتاده
- کارت‌های بصری با کدگذاری رنگی و آیکون‌های متنی
- محاسبات مشتق‌شده (Derived State) با `useMemo`

#### 🎨 رابط کاربری و تجربه کاربری

- طراحی کاملاً واکنش‌گرا (Mobile-First)
- پشتیبانی بومی از RTL و زبان فارسی
- کتابخانه کامپوننت‌های قابل استفاده مجدد (Reusable UI Kit)
- استایل‌دهی سفارشی برای `select` با استفاده از `::picker` pseudo-elements
- حالت‌های خالی (Empty States) با پیام‌های راهنما

#### ♿ دسترس‌پذیری (Accessibility)

- مدیریت فوکوس کامل در مودال‌ها (Focus Trap)
- پشتیبانی از میانبرهای صفحه‌کلید (Escape برای بستن)
- استفاده جامع از ARIA attributes
- ساختار معناگرای HTML (Semantic HTML)
- سلسله‌مراتب صحیح heading ها

---

## 🛠 پشتهٔ فناوری

| دسته           | فناوری           | نسخه            | کاربرد                  |
| -------------- | ---------------- | --------------- | ----------------------- |
| **هسته**       | React            | 19.2.8          | فریم‌ورک رابط کاربری    |
| **زبان**       | TypeScript       | 6.0.2           | تایپ‌سیفتی و ایمنی کد   |
| **ابزار ساخت** | Vite             | 8.2.2           | بیلد و HMR فوق‌سریع     |
| **استایل**     | Tailwind CSS     | 4.3.3           | Utility-First CSS       |
| **مسیریابی**   | React Router DOM | 7.18.3          | ناوبری SPA              |
| **بهینه‌سازی** | React Compiler   | 1.0.0           | حذف re-renders غیرضروری |
| **کیفیت کد**   | ESLint + OxLint  | 10.9.0 / 1.80.0 | Linting دوگانه          |
| **فرمت‌دهی**   | Prettier         | -               | یکدست‌سازی کد           |

---

## 📦 ساختار پروژه

```
personal-task-management-dashboard/
├── public/web/              # دارایی‌های استاتیک (آیکون‌ها)
├── src/
│   ├── components/          # کامپوننت‌های React
│   │   ├── layout/          # چیدمان (AppLayout, Header, PageContainer)
│   │   ├── tasks/           # کامپوننت‌های تجاری وظایف
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskFilters.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskList.tsx
│   │   │   ├── TaskModal.tsx
│   │   │   ├── TaskSearchBar.tsx
│   │   │   ├── TaskSortControl.tsx
│   │   │   ├── TaskStats.tsx
│   │   │   └── TaskStatusActions.tsx
│   │   └── ui/              # کامپوننت‌های پایه (Design System)
│   │       ├── BackButton.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── EmptyState.tsx
│   │       ├── Field.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Select.tsx
│   │       └── TextArea.tsx
│   ├── constants/           # ثابت‌ها و برچسب‌های فارسی
│   ├── contexts/            # Context API (مدیریت State سراسری)
│   ├── data/                # داده‌های اولیه (Seed Data)
│   ├── hooks/               # هوک‌های سفارشی
│   │   ├── useModalFocus.ts
│   │   ├── useTaskFilters.ts
│   │   ├── useTaskManager.ts
│   │   └── useTaskStats.ts
│   ├── pages/               # صفحات اپلیکیشن
│   │   ├── NotFoundPage.tsx
│   │   ├── TaskDetailsPage.tsx  # ✨ جدید: صفحه جزئیات کامل
│   │   └── TasksListPage.tsx
│   ├── routes/              # پیکربندی React Router
│   ├── styles/              # استایل‌های سراسری
│   ├── types/               # تعاریف TypeScript
│   ├── utils/               # توابع کمکی خالص (Pure Functions)
│   ├── App.tsx              # کامپوننت ریشه
│   └── main.tsx             # نقطه ورود
├── .oxlintrc.json           # پیکربندی OxLint
├── eslint.config.js         # پیکربندی ESLint
├── LICENSE                  # لایسنس MIT
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🏗 معماری و الگوهای طراحی

### الگوهای پیاده‌سازی‌شده

| الگو                    | محل استفاده                      | مزیت                                   |
| ----------------------- | -------------------------------- | -------------------------------------- |
| **Discriminated Union** | `ModalState`                     | Type Narrowing خودکار                  |
| **Literal Unions**      | `Priority`, `TaskStatus`         | جلوگیری از مقادیر نامعتبر              |
| **Utility Types**       | `TaskFormData = Omit<Task, ...>` | جداسازی تایپ فرم از مدل دامنه          |
| **Type Guards**         | `taskGuard()`                    | اعتبارسنجی Runtime                     |
| **Custom Hooks**        | `useTaskFilters`, `useTaskStats` | جداسازی منطق از UI                     |
| **Context API**         | `TaskContext`                    | مدیریت State سراسری بدون Prop Drilling |
| **Compound Components** | `Field` + `Input`/`Select`       | ترکیب‌پذیری بالا                       |

### نمودار جریان داده

```
User Interaction
       ↓
   UI Components (TaskCard, TaskForm, ...)
       ↓
   Custom Hooks (useTaskFilters, useTaskManager)
       ↓
   Context API (TaskContext)
       ↓
   State (tasks[])
       ↓
   Re-render (با بهینه‌سازی React Compiler)
```

---

## 🚀 راهنمای شروع سریع

### پیش‌نیازها

- **Node.js** ≥ 20.0.0
- **npm** ≥ 10.0.0

### نصب و راه‌اندازی

```bash
# ۱. کلون کردن مخزن
git clone <repository-url>
cd personal-task-management-dashboard

# ۲. نصب وابستگی‌ها
npm install

# ۳. اجرای محیط توسعه
npm run dev

# ۴. ساخت نسخه پروداکشن
npm run build

# ۵. پیش‌نمایش نسخه پروداکشن
npm run preview
```

---

## 📋 اسکریپت‌های موجود

| دستور                | توضیحات                    |
| -------------------- | -------------------------- |
| `npm run dev`        | اجرای سرور توسعه با HMR    |
| `npm run build`      | بررسی تایپ + بیلد پروداکشن |
| `npm run preview`    | پیش‌نمایش بیلد پروداکشن    |
| `npm run type-check` | بررسی تایپ‌ها بدون خروجی   |
| `npm run lint`       | بررسی با ESLint            |
| `npm run lint:ox`    | بررسی با OxLint (سریع‌تر)  |
| `npm run check`      | اجرای تمام بررسی‌ها        |

---

## 🎨 قابلیت‌های ویژه

### 📅 پشتیبانی بومی از تاریخ شمسی

```typescript
// فرمت کامل: «یکشنبه ۱۵ تیر ۱۴۰۴»
formatDate(new Date());

// فرمت کوتاه: «۱۴۰۴/۰۴/۱۵»
shortFormatDate(new Date());
```

استفاده از `Intl.DateTimeFormat` با `calendar: "persian"` برای دقت کامل.

### 🎯 استایل‌دهی سفارشی Select

پروژه از قابلیت‌های مدرن CSS برای استایل‌دهی به `select` و `::picker` استفاده می‌کند:

```css
@layer components {
  select,
  ::picker(select) {
    appearance: base-select;
    cursor: pointer;
    transition: all 0.2s;
  }

  ::picker(select) {
    border: 2px solid rgb(0, 60, 255);
    border-radius: 0.75rem;
    box-shadow: 0 6px 15px oklch(0% 0 0 / 0.2);
  }
}
```

### ⚡ بهینه‌سازی با React Compiler

فعال‌سازی خودکار بهینه‌سازی‌ها از طریق `babel-plugin-react-compiler`:

```typescript
// vite.config.ts
plugins: [react(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })];
```

---

## 🔐 ملاحظات امنیتی

- ✅ داده‌ها فقط در حافظه RAM نگهداری می‌شوند
- ✅ هیچ ارتباطی با سرور خارجی برقرار نمی‌شود
- ✅ فایل‌های `.env` در `.gitignore` قرار دارند
- ✅ هیچ اطلاعات حساسی در کد hardcoded نشده است
- ✅ استفاده از `crypto.randomUUID()` برای تولید شناسه‌های امن

---

## 🗺 نقشه راه (Roadmap)

### فازهای آتی

- [ ] ذخیره‌سازی در `localStorage` / `IndexedDB`
- [ ] افزودن Backend و REST API
- [ ] سیستم احراز هویت کاربران
- [ ] دسته‌بندی با تگ‌ها و برچسب‌ها
- [ ] سیستم یادآوری و نوتیفیکیشن
- [ ] خروجی CSV/JSON
- [ ] حالت تاریک (Dark Mode)
- [ ] پشتیبانی از چند زبان (i18n)
- [ ] Drag & Drop برای مرتب‌سازی
- [ ] اشتراک‌گذاری وظایف

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.  
برای جزئیات کامل، فایل [LICENSE](./LICENSE) را مطالعه فرمایید.

```
MIT License
Copyright (c) 2026 Mohammad Heydari
```

---

## 🤝 مشارکت

از مشارکت شما استقبال می‌شود! لطفاً قبل از ارسال Pull Request:

1. یک Issue برای بحث در مورد تغییرات ایجاد کنید
2. Branch جدید از `main` ایجاد کنید
3. تغییرات خود را با Commit Message های واضح ثبت کنید
4. مطمئن شوید `npm run check` با موفقیت اجرا می‌شود
5. Pull Request ارسال کنید

---

## 📞 ارتباط

**توسعه‌دهنده:** محمد حیدری  
**نسخه:** 1.2.0  
**آخرین به‌روزرسانی:** سپتامبر ۲۰۲۶

---

<div align="center">

**ساخته‌شده با ❤️ و ☕ توسط جامعه متن‌باز**

</div>
