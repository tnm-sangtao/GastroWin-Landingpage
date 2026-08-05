# Design System

> Tài liệu tham chiếu các thông số thiết kế, tokens, và patterns đang được sử dụng trong toàn bộ site.

---

## 1. Color Tokens

Tất cả màu sắc được định nghĩa dưới dạng CSS custom properties trong `src/styles/theme.css`.

### Brand Colors

| Token | Giá trị | Mô tả |
|---|---|---|
| `--primary` | `#7553FF` | Màu chính – tím violet |
| `--primary-light` | `#9F85FF` | Tím nhạt hơn – dùng cho gradient cuối |
| `--primary-dark` | `#5631E0` | Tím đậm – hover states |
| `--primary-xlight` | `rgba(117,83,255,0.12)` | Nền nhẹ – background hover/chip |
| `--primary-glow` | `rgba(117,83,255,0.35)` | Box shadow cho CTA buttons |

### Neutral Palette

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--neutral-900` | `#1a1830` | Heading text |
| `--neutral-700` | `#3d3a6b` | Body text, nav links |
| `--neutral-500` | `#6b6890` | Mô tả, placeholder, meta |
| `--neutral-300` | `#b8b5d8` | Border nhẹ, divider |
| `--neutral-100` | `#eceaf9` | Background accent, separator |

### Background

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--bg` | `#ffffff` | Background mặc định |
| `--bg2` | `#f8f7ff` | Background sections xen kẽ (Features, Pricing) |
| `--bg3` | `#f2f1fc` | Background accent |

### Glassmorphism

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--glass-bg` | `rgba(255,255,255,0.65)` | Card nền kính |
| `--glass-border` | `rgba(117,83,255,0.18)` | Border card kính |
| `--glass-shadow` | `0 8px 40px rgba(117,83,255,0.12)` | Shadow card kính |

---

## 2. Typography

Nguồn font: Google Fonts — `src/styles/fonts.css`

```
Poppins: 300, 400, 500, 600 (+ italic 400)
```

### Biến font

| Token | Giá trị |
|---|---|
| `--font-head` | `'Poppins', sans-serif` |
| `--font-body` | `'Poppins', sans-serif` |

> Cả hai token đều trỏ về Poppins. `--font-head` dùng weight lên tới Semibold (600); `--font-body` dùng weight lên tới Medium (500).

### Nguyên tắc cốt lõi về Font Weight & Font Size

1. **Font Weight Constraints:**
   - **Font weight lớn nhất là Semibold (600)**: Chỉ áp dụng giới hạn này cho các Heading lớn (ví dụ: H1, H2, H3 lớn).
   - **Các thành phần còn lại chỉ áp dụng font weight lớn nhất là Medium (500)**: Áp dụng cho body text, card content, form controls, buttons, list items, badges, tags, v.v.

2. **Font Size Constraints:**
   - **Font chữ nhỏ nhất là 14px**: Áp dụng nghiêm ngặt cho các mô tả nhỏ (small details), labels phụ, tags, badges, hoặc siêu dữ liệu hỗ trợ. Tuyệt đối không sử dụng bất kỳ cỡ chữ nào dưới 14px (ví dụ không dùng 10px, 12px).
   - **Content có font chữ nhỏ nhất là 16px**: Tất cả nội dung chính, văn bản mô tả chính (main content/body text) và các thành phần đọc chính phải có cỡ chữ tối thiểu là 16px.

### Scale & Weight

| Ngữ cảnh | Size | Weight | Letter Spacing |
|---|---|---|---|
| Hero H1 (Heading tại mỗi Hero section trên tất cả page) | `36px → 56px` (responsive `lg:text-[56px]`) | 600 (Semibold) | `-0.02em` |
| Section H2 (Heading tại mỗi Section ngoại trừ Hero section trên tất cả page) | `28px → 52px` (responsive `lg:text-[52px]`) | 600 (Semibold) | `-0.02em` |
| Card H3 / Subheading | `18px → 20px` | 500 (Medium) | — |
| Content / Body text | `16px → 18px` | 400 (Regular) | — |
| Small / meta / Label / Tag | `14px` | 500 (Medium) | — |
| Badge / label | `14px` | 500 (Medium) | `0.12em` |
| Stat number | `20px → 30px` | 600 (Semibold) | — |
| Price | `36px → 48px` | 600 (Semibold) | — |

### Line Height

| Ngữ cảnh | Line Height |
|---|---|
| Headings | `1.05 – 1.1` |
| Body | `1.7` |
| List items | `1.5` |

---

## 3. Spacing & Layout

### Container

```
max-width: 1280px (max-w-7xl)
padding: 0 16px (mobile) → 0 24px (sm) → 0 48px (md) → 0 64px (lg)
Tailwind CSS Mapping: px-4 sm:px-6 md:px-12 lg:px-16 (Bắt buộc dùng cho mọi container chính trên toàn site)
```

### Section Padding

```
py: 48px (mobile) → 64px (sm) → 80px (md) → 96px (lg)
Tailwind CSS Mapping: py-12 sm:py-16 md:py-20 lg:py-24 (Bắt buộc dùng cho mọi section xen kẽ trên trang chủ và trang phụ)
```

### Grid Systems

| Section | Columns | Gap |
|---|---|---|
| Hero | 1 col (mobile) / 2 col (lg) | `40px → 80px` |
| Features | 1 → 2 (sm) → 3 (lg) | `16px → 24px` |
| Pricing | 1 → 2 (md) | `24px → 32px` |
| Hero stats | 3 col fixed | `16px → 36px` |
| Hero mini stats | 3 col fixed | `8px → 12px` |

---

## 4. Border Radius

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--radius-sm` | `12px` | Float cards, mini stats, icon containers |
| `--radius-md` | `20px` | Loyalty card bên trong, medium cards |
| `--radius-lg` | `32px` | Main glass card, pricing cards |
| `rounded-full` | `999px` / `9999px` | Buttons (bắt buộc toàn bộ button trên site dùng 999px), badges, pills |
| `rounded-2xl` (24px) | — | Feature cards, dropdowns |
| `rounded-xl` (16px) | — | Mobile menu, dropdown panels |

> **Quy tắc bắt buộc về Button Radius:** Tất cả các nút (buttons), các thành phần có thuộc tính `role="button"`, hoặc bất kỳ CTA dạng nút bấm nào trên toàn bộ trang web đều bắt buộc phải có border-radius là `999px` (hoặc lớp `rounded-full` của Tailwind). Quy định này được áp dụng đồng bộ qua tệp CSS toàn cục nhằm đảm bảo tính đồng nhất tối đa về mặt trải nghiệm và nhận diện giao diện.

---

## 5. Shadows & Elevation

| Tên | Giá trị | Dùng cho |
|---|---|---|
| Glass card | `0 8px 40px rgba(117,83,255,0.12)` | Glassmorphism cards |
| Feature card | `0 8px 32px rgba(117,83,255,0.08)` | Feature grid cards |
| CTA button | `0 6px 28px rgba(117,83,255,0.35)` | Primary button |
| CTA button sm | `0 4px 16px rgba(117,83,255,0.35)` | Navbar CTA |
| Pricing CTA | `0 6px 24px rgba(117,83,255,0.35)` | Pricing button |
| Navbar default | `0 4px 16px rgba(0,0,0,0.04)` | Navbar không scroll |
| Navbar scrolled | `0 8px 32px rgba(0,0,0,0.06)` | Navbar sau khi scroll |
| Dropdown | `0 16px 48px rgba(0,0,0,0.12)` | Language picker, mobile menu |
| CTA white button | `0 8px 32px rgba(0,0,0,0.2)` | CTA Band button (hover: glow trắng) |

---

## 6. Gradients

| Tên | Giá trị | Dùng cho |
|---|---|---|
| Primary gradient | `linear-gradient(135deg, #7553FF, #9F85FF)` | CTA buttons chính |
| Full brand gradient | `linear-gradient(135deg, #7553FF, #8E70FF, #A78EFF)` | Enterprise pricing card, CTA Band section |
| Loyalty card | `linear-gradient(135deg, #7553FF, #A78EFF, #C0AEFF)` | Hero loyalty card mock |
| Icon bg | `linear-gradient(135deg, rgba(117,83,255,0.12), rgba(117,83,255,0.06))` | Feature card icon container |
| Feature card glow | `radial-gradient` via `--primary` | Hover state background orb |
| Navbar | `linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.55))` | Navbar background |

---

## 7. Glassmorphism

Pattern chuẩn cho glass cards:

```css
background: var(--glass-bg);      /* rgba(255,255,255,0.65) */
border: 1px solid var(--glass-border); /* rgba(117,83,255,0.18) */
box-shadow: var(--glass-shadow);  /* 0 8px 40px rgba(117,83,255,0.12) */
backdrop-filter: blur(24px);
border-radius: var(--radius-lg);          /* 32px */
```

Biến thể lighter (Feature cards):

```css
background: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(117, 83, 255, 0.12);
box-shadow: 0 8px 32px rgba(117, 83, 255, 0.08);
backdrop-filter: blur(24px);
border-radius: 24px;
```

---

## 8. Components

### Button – Primary

```
background: linear-gradient(135deg, --primary, --primary-light)
box-shadow: 0 6px 28px --primary-glow
color: #ffffff
font-weight: 600
border-radius: 9999px (rounded-full)
padding: px-7–px-9 / py-3.5–py-4
hover: translateY(-3px)
```

### Button – Outline

```
background: transparent
border: 1.5px solid --neutral-300
color: --neutral-700
border-radius: 9999px
padding: px-6–px-7 / py-3–py-4
hover: background --primary-xlight
```

### Button – Outline Primary (Navbar Login)

```
border: 1.5px solid --primary
color: --primary
background: transparent
border-radius: 9999px
hover: background --primary-xlight
```

### Badge / Chip (Section label)

```
background: --primary-xlight
border: 1px solid rgba(117,83,255,0.2)
color: --primary
font-size: 12px
font-weight: 600
letter-spacing: 0.12em
text-transform: uppercase
border-radius: 9999px
padding: px-3.5 / py-1.5
```

### Feature Card

```
background: rgba(255,255,255,0.8)
border: 1px solid rgba(117,83,255,0.12)
box-shadow: 0 8px 32px rgba(117,83,255,0.08)
border-radius: 24px (rounded-3xl)
padding: 32px (p-8)
hover: translateY(-4px) + background orb opacity 0→0.2
```

### Icon Container (Feature cards)

```
size: 46px–52px (responsive)
background: gradient icon bg
border: 1px solid rgba(117,83,255,0.2)
border-radius: 12px–14px
icon color: --primary
icon size: 20px–24px
```

### Float Card (Hero)

```
background: --glass-bg
border: 1px solid --glass-border
box-shadow: --glass-shadow
backdrop-filter: blur(20px)
border-radius: --radius-sm (12px)
padding: px-4–px-[18px] / py-3–py-3.5
animation: floatCard 6s ease-in-out infinite (alternating delays)
```

### Pricing Card – Standard

```
background: --glass-bg
border: 1px solid --glass-border
border-radius: --radius-lg (32px)
padding: 44px (p-11)
hover: translateY(-6px)
backdrop-filter: blur(24px)
```

### Pricing Card – Enterprise (Featured)

```
background: linear-gradient(135deg, #7553FF, #8E70FF, #A78EFF)
text: white
border: transparent
border-radius: --radius-lg (32px)
padding: 44px
hover: translateY(-6px)
Badge "Most Popular": bg white/20, border white/30
```

### Divider (Pricing)

```
height: 1px
background: --neutral-100 (standard) / white/20 (enterprise)
margin: 24px–28px vertical
```

### Bullet List Item (Pricing)

```
icon: 18px square, border-radius 5px
icon background: gradient primary
icon content: "›" white bold
text: 14px, --neutral-700
line-height: 1.5
gap: 10px
```

### Info Box (Pricing note)

```
background: rgba(117,83,255,0.07)
border: 1px solid rgba(117,83,255,0.15)
border-radius: --radius-sm (12px)
padding: px-4 / py-3.5
font-size: 13px
line-height: 1.6
```

### Navbar

```
position: fixed, z-index: 100
height: py-3 (mobile) / py-4 (desktop)
background: glassmorphism gradient white/55–75 (scroll-aware)
backdrop-filter: blur(40px)
border-bottom: scroll-aware opacity
transition: all 500ms
```

### Language Dropdown

```
background: linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.95))
border: 1px solid rgba(0,0,0,0.08)
box-shadow: 0 16px 48px rgba(0,0,0,0.12)
backdrop-filter: blur(40px)
border-radius: 12px (rounded-xl)
min-width: 160px
item padding: px-4 / py-2.5
active item: --primary-xlight background
```

---

## 9. Animations

### Định nghĩa trong `src/styles/theme.css`

| Class / Keyframe | Mô tả | Duration |
|---|---|---|
| `.reveal` | Scroll-triggered fade + slide up (`translateY(32px) → 0`) | `0.7s cubic-bezier(0.16,1,0.3,1)` |
| `.reveal-delay-1` – `.reveal-delay-5` | Delay 0.1s – 0.5s | — |
| `orbFloat` | Background orbs float lên xuống | `12–18s ease-in-out infinite` |
| `floatCard` | Hero float cards lên xuống `-10px` | `6s ease-in-out infinite` |
| `.float-card.fc1` | Delay 0s | — |
| `.float-card.fc2` | Delay 2s | — |
| `pulse` (`.pulse-dot`) | Scale 1→0.85 + opacity 1→0.6 | `2s ease-in-out infinite` |
| `scroll` (`.partners-track`) | Horizontal auto-scroll `-50%` | `22s linear infinite` |
| `ctaShimmer` | Shimmer sweep qua CTA Band | `3s ease-in-out infinite` |

### Hover Transitions

| Element | Effect |
|---|---|
| Primary button | `translateY(-3px)` |
| Navbar CTA | `translateY(-2px)` |
| Feature card | `translateY(-4px)` + glow orb fade in |
| Pricing card | `translateY(-6px)` |
| CTA Band button | `scale(1.05)` + `brightness(1.1)` + white glow shadow |
| Nav link | Color → `--primary` + bg `--primary-xlight` |
| Partners track | `animation-play-state: paused` |

---

## 10. Responsive Breakpoints

Tailwind standard breakpoints:

| Token | Width |
|---|---|
| `sm` | `≥ 640px` |
| `md` | `≥ 768px` |
| `lg` | `≥ 1024px` |
| `xl` | `≥ 1280px` |

Navbar switches từ mobile → desktop tại `lg` (1024px).  
Grids collapse về 1 column dưới `sm`.

---

## 11. Background Decorations

### Grid Pattern (global)

```css
body::before {
  background-image:
    linear-gradient(rgba(117,83,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(117,83,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px; /* mobile: 40px */
  position: fixed; inset: 0; z-index: 0;
}
```

### Orbs (ambient lighting)

3 orbs cố định, blur 90px, opacity 0.22:

| Orb | Size | Color | Position |
|---|---|---|---|
| `.orb1` | 600px | `#7553FF → #C0AEFF` | top-left |
| `.orb2` | 500px | `#C0AEFF → #7553FF` | mid-right |
| `.orb3` | 350px | `#9F85FF → #D9CFFF` | bottom-center |

---

## i18n

Hỗ trợ 3 ngôn ngữ:

| Code | Tên | Flag |
|---|---|---|
| `en` | English | 🇬🇧 |
| `de` | Deutsch | 🇩🇪 |
| `vi` | Tiếng Việt | 🇻🇳 |

### Quy tắc quốc tế hóa (i18n Rule)
> **Với mỗi cập nhật mới thì phải cập nhật đủ 3 ngôn ngữ chỉ định Tiếng Việt, English, Deutsch.**

---
