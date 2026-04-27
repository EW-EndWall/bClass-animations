# bClass Animations

bClass Animations — это библиотека CSS и JavaScript, предоставляющая готовые анимации для веб-проектов. Она предлагает плавные переходы, эффекты при наведении (hover) и различные типы анимаций для улучшения пользовательского опыта.

## Особенности

- Плавные CSS анимации
- Эффекtы при наведении (Hover)
- Эффекты переходов (Transitions)
- Анимации прокрутки
- Анимации прозрачности
- Анимации вращения
- Анимации взаимодействия с элементами

## Использование

### CSS Классы

#### Типы анимаций

- `.animate-up` — анимация, перемещающая элементы вверх
- `.animate-left` — анимация, перемещающая элементы влево
- `.animate-down` — анимация, перемещающая элементы вниз
- `.animate-right` — анимация, перемещающая элементы вправо
- `.animate-slide-right` — анимация скольжения элементов справа налево
- `.animate-slide-left` — анимация скольжения элементов слева направо
- `.animate-slide-up` — анимация скольжения элементов снизу вверх
- `.animate-slide-down` — анимация скольжения элементов сверху вниз
- `.animate-opacity-sharp-full` — резкая анимация прозрачности (от 0 до 1)
- `.animate-opacity-sharp-half` — резкая анимация прозрачности (от 0.5 до 1)
- `.animate-opacity-soft-full` — мягкая анимация прозрачности (0 → 1 → 0)
- `.animate-opacity-soft-half` — мягкая анимация прозрачности (0.5 → 1 → 0.5)
- `.animate-rotate-l` — вращение влево
- `.animate-rotate-r` — вращение вправо
- `.animate-hover-up` — анимация перемещения вверх при наведении курсора
- `.animate-hover-left` — анимация перемещения влево при наведении курсора
- `.animate-hover-down` — анимация перемещения вниз при наведении курсора
- `.animate-hover-right` — анимация перемещения вправо при наведении курсора
- `.animate-items-m-1`, `.animate-items-hovered-m-1` — стили для элементов с эффектом наведения
- `.animate-items-m-1`, `.animate-items-not-hovered-m-1` — стили для элементов без эффекта наведения
- `.animate-down-hover` — анимация перемещения вниз при наведении курсора
- `.append `.animate-right infinite hover:animate-none` — анимация перемещения вправо, зацикленная бесконечно и прекращающаяся при наведении

#### Эффекты переходов (Transitions)

- `transition-none` — без перехода
- `transition-all` — все свойства перехода
- `transition-color` — переход цвета
- `transition-opacity` — переход прозрачности
- `transition-shadow` — переход тени
- `transition-transform` — переход трансформации
- `transition-margin` — переход отступов (margin)

#### Функции времени анимации (Timing Functions)

- `.linear` — линейная функция времени
- `.ease` — функция плавного начала и завершения
- `.ease-in` — функция замедления (вход)
- `.ease-out` — функция ускорения (выход)
- `.ease-in-out` — функция плавного входа и выхода
- `.steps-6-end` — ступенчатая функция (6 шагов)
- `.cubic-bezier` — функция кубической кривой Безье

#### Длительность анимации

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

#### Задержка анимации

- `.animate-delay-1`
- `.animate-delay-2`
- `.animate-delay-3`
- `.animate-delay-4`
- `.animate-delay-5`

#### Длительность перехода

- `.transition-duration-0.5`
- `.transition-duration-1`
- `.transition-duration-1.5`
- `.transition-duration-2`
- `.transition-duration-3`
- `.transition-duration-4`
- `.transition-duration-5`

#### Задержка перехода

- `.transition-delay-0`
- `.transition-delay-10`
- `.transition-delay-25`
- `.transition-delay-50`
- `.transition-delay-75`
- `.transition-delay-100`

#### Пример

[codepen](https://codepen.io/Endwall/pen/vYQJrqr)

## Установка

Добавьте CSS и JavaScript файлы в ваш проект:

```html
<link rel="stylesheet" href="./bClass-animations.css" />
<script src="./bClass-animations.js"></script>
```

## Лицензия

Этот проект распространяется под лицензией Bik Public License 2.0.
