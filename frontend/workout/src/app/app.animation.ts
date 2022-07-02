import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fade-in-out', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(500),
  ]),
  transition(':leave', [
    animate(500),
    style({
      opacity: 0,
    }),
  ]),
]);

export const fadeIn = trigger('fade-in', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(500),
  ]),
]);

export const fadeOut = trigger('fade-out', [
  transition(':leave', [
    animate(500),
    style({
      opacity: 0,
    }),
  ]),
]);

export const slideDown = trigger('slide-down', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const slideUp = trigger('slide-up', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const slideFromRight = trigger('slide-from-right', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateX(0)',
      })
    ),
  ]),
]);

export const slideFromLeft = trigger('slide-from-left', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateX(0)',
      })
    ),
  ]),
]);
