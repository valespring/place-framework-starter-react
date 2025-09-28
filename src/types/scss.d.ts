declare module '*.scss' {
  const content: { [className: string]: string | number };
  export = content;
}

declare module '@scss/*' {
  const content: { [className: string]: string | number };
  export = content;
}