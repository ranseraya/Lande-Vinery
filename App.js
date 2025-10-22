// App.js
import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export const ProductsContext = createContext();

export default function App() {
  const [products, setProducts] = useState([
    {
      id: String(Date.now() - 2000),
      name: 'Bibit Anggur Ninel',
      price: '20000',
      size: 'Pot Kecil',
      varietas: 'Ninel',
      description: 'Bibit adaptif untuk iklim tropis, cocok ditanam di pot dan rambatan.',
      image: require('./assets/products/Ninel.jpeg'),
    },
    {
      id: String(Date.now() - 1000),
      name: 'Paket Keluarga',
      price: '200000',
      size: 'Pot Kecil',
      varietas: '5 jenis (Ninel, Heliodol, Urum, Gosvi, dan Jupiter)',
      description: 'Berisi 10 bibit anggur dengan 5 jenis yang berbeda. Cocok untuk ditanam bersama keluarga',
      image: require('./assets/products/FamilyPack.jpeg'),
    },
  ]);

  const addProduct = (product) => {
    const newProduct = { ...product, id: String(Date.now()) };
    console.log('Tambah produk:', newProduct);
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id, updated) => {
    console.log('Update produk:', id);
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProduct = (id) => {
    console.log('Hapus produk:', id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ProductsContext.Provider>
  );
}
