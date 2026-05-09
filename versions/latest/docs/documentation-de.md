# bClass Animations

`bClass animations` ist eine CSS- und JavaScript-Bibliothek, die vorgefertigte Animationen für Webprojekte bereitstellt. Sie bietet fließende Übergänge, Hover-Effekte und verschiedene Animationstypen zur Verbesserung der Benutzererfahrung.

## Funktionen

- Flüssige CSS-Animationen
- Hover-Effekte (Mauszeiger-Effekte)
- Übergangseffekte (Transitions)
- Scroll-Animationen
- Opazitäts-Animationen (Transparenz)
- Rotations-Animationen
- Interaktions-Animationen für Elemente

## Verwendung

### CSS-Klassen

#### Animationstypen

- `.animate-up` – Animation, die Elemente nach oben bewegt
- `.animate-left` – Animation, die Elemente nach links bewegt
- `.animate-down` – Animation, die Elemente nach unten bewegt
- `.animate-right` – Animation, die Elemente nach rechts bewegt
- `.animate-slide-right` – Animation, die Elemente von rechts nach links gleiten lässt
- `.animate-slide-left` – Animation, die Elemente von links nach rechts gleiten lässt
- `.animate-slide-up` – Animation, die Elemente von unten nach oben gleiten lässt
- `.animate-slide-down` – Animation, die Elemente von oben nach unten gleiten lässt
- `.animate-opacity-sharp-full` – Abrupte Opazitätsanimation (von 0 auf 1)
- `.animate-opacity-sharp-half` – Abrupte Opazitätsanimation (von 0.5 auf 1)
- `.animate-opacity-soft-full` – Sanfte Opazitätsanimation (0 → 1 → 0)
- `.animate-opacity-soft-half` – Sanfte Opazitätsanimation (0.5 → 1 → 0.5)
- `.animate-rotate-l` – Dreht nach links
- `.animate-rotate-r` – Dreht nach rechts
- `.animate-hover-up` – Animation, die Elemente beim Hovern nach oben bewegt
- `.animate-hover-left` – Animation, die Elemente beim Hovern nach links bewegt
- `.animate-hover-down` – Animation, die Elemente beim Hovern nach unten bewegt
- `.animate-hover-right` – Animation, die Elemente beim Hovern nach rechts bewegt
- `.animate-items-m-1`, `.animate-items-hovered-m-1` – Stil für Elemente mit Hover-Effekt
- `.animate-items-m-1`, `.animate-items-not-hovered-m-1` – Stil für Elemente ohne Hover-Effekt
- `.animate-right infinite hover:animate-none` – Animation, die Elemente nach rechts bewegt, unendlich läuft und beim Darüberfahren gestoppt wird

#### Übergangseffekte

- `transition-none` – Kein Übergang
- `transition-all` – Alle Übergänge
- `transiton-color` – Farbübergänge
- `transition-opacity` – Opazitätsübergänge
- `transition-shadow` – Schattenübergänge
- `transition-transform` – Transformationsübergänge
- `transition-margin` – Außenabstand-Übergänge (Margin)

#### Animations-Timing-Funktionen

- `.linear` – Lineare Zeitfunktion
- `.ease` – Ease-Funktion (sanfter Start/Ende)
- `.ease-in` – Einlaufende Zeitfunktion
- `.ease-out` – Auslaufende Zeitfunktion
- `.ease-in-out` – Ein- und auslaufende Zeitfunktion
- `.steps-6-end` – Zeitfunktion mit 6 Schritten
- `.cubic-bezier` – Kubische Bezier-Zeitfunktion

#### Animationsdauer

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

#### Animationsverzögerung

- `.animate-delay-1`
- `.animate-delay-2`
- `.animate-delay-3`
- `.animate-delay-4`
- `.animate-delay-5`

#### Übergangsdauer

- `.transition-duration-0.5`
- `.transition-duration-1`
- `.transition-duration-1.5`
- `.transition-duration-2`
- `.transition-duration-3`
- `.transition-duration-4`
- `.transition-duration-5`

#### Übergangsverzögerung

- `.transition-delay-0`
- `.transition-delay-10`
- `.transition-delay-25`
- `.transition-delay-50`
- `.transition-delay-75`
- `.transition-delay-100`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/vYQJrqr)

## Installation

Fügen Sie die CSS- und JavaScript-Dateien Ihrem Projekt hinzu:

```html
<link rel="stylesheet" href="./bClass-animations.css" />
<script src="./bClass-animations.js"></script>
```

## Lizenz

> Veröffentlicht unter der Bik Public License 2.0. Weitere Informationen finden Sie in der [LICENSE](./../../../LICENSE).
