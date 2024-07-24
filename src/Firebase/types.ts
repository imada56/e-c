// src/Firebase/types.ts

export interface Product {
    id: string;
    arrayImg?:any[]
    imgs?: string;
    categorie: string;
    dscr?: string;
    prix: number;
    title:string;
    taille?: string;
    // Add other fields based on your Firestore collection
  }
  
  export interface Marque {
    id: string;
    arrayImg?:any[]
    imgs?: string;
    categorie: string;
    dscr?: string;
    prix: number;
    title:string
    // Add other fields based on your Firestore collection
  }
  
  