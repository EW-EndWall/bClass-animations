# bClass Animations

**bClass Animations** هي مكتبة CSS و JavaScript توفر رسومًا متحركة (animations) جاهزة للاستخدام في مشاريع الويب. تهدف المكتبة إلى تحسين تجربة المستخدم من خلال تقديم انتقالات سلسة، وتأثيرات عند تمرير الماوس (hover)، وأنواع مختلفة من التحريكات.

## المميزات

- رسوم متحركة CSS سلسة
- تأثيرات عند تمرير الماوس
- تأثيرات الانتقال
- رسوم متحركة عند التمرير
- رسوم متحركة للشفافية
- رسوم متحركة للدوران
- رسوم متحركة لتفاعل العناصر

## الاستخدام

### فئات CSS

#### أنواع الرسوم المتحركة

- `.animate-up` - تحريك العناصر للأعلى
- `.animate-left` - تحريك العناصر لليسار
- `.animate-down` - تحريك العناصر للأسفل
- `.animate-right` - تحريك العناصر لليمين
- `.animate-slide-right` - تحريك العناصر من اليمين إلى اليسار (انزلاق)
- `.animate-slide-left` - تحريك العناصر من اليسار إلى اليمين (انزلاق)
- `.animate-slide-up` - تحريك العناصر من الأسفل إلى الأعلى (انزلاق)
- `.animate-slide-down` - تحريك العناصر من الأعلى إلى الأسفل (انزلاق)
- `.animate-opacity-sharp-full` - تحريك الشفافية بشكل حاد (من 0 إلى 1)
- `.animate-opacity-sharp-half` - تحريك الشفافية بشكل حاد (من 0.5 إلى 1)
- `.animate-opacity-soft-full` - تحريك الشفافية بشكل ناعم (0 ← 1 ← 0)
- `.animate-opacity-soft-half` - تحريك الشفافية بشكل ناعم (0.5 ← 1 ← 0.5)
- `.animate-rotate-l` - دوران نحو اليسار
- `.animate-rotate-r` - دوران نحو اليمين
- `.animate-hover-up` - تحريك العناصر للأعلى عند تمرير الماوس فوقها
- `.animate-hover-left` - تحريك العناصر لليسار عند تمرير الماوس فوقها
- `.animate-hover-down` - تحريك العناصر للأسفل عند تمرير الماوس فوقها
- `.animate-hover-right` - تحريك العناصر لليمين عند تمرير الماوس فوقها
- `.animate-items-m-1`, `.animate-items-hovered-m-1` - نمط للعناصر التي يتم تفعيل تأثير الـ hover عليها
- `.animate-items-m-1`, `.animate-items-not-hovered-m-1` - نمط للعناصر التي لا يتم تفعيل تأثير الـ hover عليها
- `.animate-down-hover` - تحريك العناصر للأسفل عند تمرير الماوس فوقها
- `.animate-right infinite hover:animate-none` - تحريك العناصر لليمين في حلقة لا نهائية، ويتوقف التحريك عند تمرير الماوس فوقها

#### تأثيرات الانتقال

- `transition-none` - بدون انتقال
- `transition-all` - جميع الانتقالات
- `transition-color` - انتقالات الألوان
- `transition-opacity` - انتقالات الشفافية
- `transition-shadow` - انتقالات الظل
- `transition-transform` - انتقالات التحويل (Transform)
- `transition-margin` - انتقالات الهوامش (Margin)

#### وظائف توقيت الرسوم المتحركة

- `.linear` - توقيت خطي
- `.ease` - توقيت سلس (Ease)
- `.ease-in` - توقيت دخول تدريجي (Ease-in)
- `.ease-out` - توقيت خروج تدريجي (Ease-out)
- `.ease-in-out` - توقيت دخول وخروج تدريجي (Ease-in-out)
- `.steps-6-end` - توقيت بنظام الخطوات (6 خطوات)
- `.cubic-bezier` - منحنى بيزييه التكعيبي (Cubic bezier)

#### مدة الرسوم المتحركة

- `.animate-duration-0.1`
- `.animate-duration-0.2`
- `.animate-duration-0.3`
- `.animate-duration-0.4`
- `.animate-duration-0.5`
- `.animate-duration-0.6`
- `.animate-duration-0.7`
- `.animate-duration-0.8`
- `.animate-duration-0.9`
- `.animate-duration-1`
- `.animate-duration-2`
- `.animate-duration-3`
- `.animate-duration-4`
- `.animate-duration-5`
- `.animate-duration-6`
- `.animate-duration-7`
- `.animate-duration-8`
- `.animate-duration-9`
- `.animate-duration-10`
- `.animate-duration-15`
- `.animate-duration-20`
- `.animate-duration-25`
- `.animate-duration-30`
- `.animate-duration-35`
- `.animate-duration-40`
- `.animate-duration-45`
- `.animate-duration-50`
- `.animate-duration-55`
- `.animate-duration-60`

#### تأخير الرسوم المتحركة

- `.animate-delay-1`
- `.animate-delay-2`
- `.animate-delay-3`
- `.animate-delay-4`
- `.animate-delay-5`

#### مدة الانتقال

- `.transition-duration-0.5`
- `.transition-duration-1`
- `.transition-duration-1.5`
- `.transition-duration-2`
- `.transition-duration-3`
- `.transition-duration-4`
- `.transition-duration-5`

#### تأخير الانتقال

- `.transition-delay-0`
- `.animate-delay-10`
- `.transition-delay-25`
- `.transition-delay-50`
- `.transition-delay-75`
- `.transition-delay-100`

#### مثال

[codepen](https://codepen.io/Endwall/pen/vYQJrqr)

## التثبيت

أضف ملفات CSS و JavaScript إلى مشروعك:

```html
<link rel="stylesheet" href="./bClass-animations.css" />
<script src="./bClass-animations.js"></script>
```

## الترخيص (License)

هذا المشروع مرخص تحت رخصة **Bik Public License 2.0**.
