// src/Firebase/types.ts

export interface NewTypeProduct {
  id: string;
  arrayImg?:any[]
  imgs?: string;
  categorie: string;
  dscr?: string;
  prix: number;
  title:string;
  taille?: string;
  quantite: number;
  subTotal: number
}

export interface Product {
    id: string;
    arrayImg?:any[]
    imgs?: string;
    categorie: string;
    dscr?: string;
    prix: number;
    title:string;
    taille?: string;
    promontion?:number | undefined;
    bg?:string
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
  
  