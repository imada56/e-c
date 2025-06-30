// src/images.d.ts
declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }

  declare module '*.avif' {
  const content: string;
  export default content;
}
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  // Add more types here if you have other image formats
  