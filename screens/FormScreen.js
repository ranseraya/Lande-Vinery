import { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ProductsContext } from '../App';

export default function FormScreen({ route, navigation }) {
  const { mode, product } = route.params || {};
  const { addProduct, updateProduct } = useContext(ProductsContext);

  const [name, setName] = useState('');
  const [varietas, setVarietas] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (mode === 'edit' && product) {
      setName(product.name || '');
      setVarietas(product.varietas || '');
      setSize(product.size || '');
      setPrice(product.price || '');
      setImage(product.image || '');
      setDescription(product.description || '');
    }
  }, [mode, product]);

const onSave = () => {
  if (!name || !price) {
    Alert.alert('Validasi', 'Nama dan harga wajib diisi');
    return;
  }

  const payload = {
    name,
    varietas,
    size,
    price,
    image: image,
    description,
  };

  if (mode === 'edit') {
    updateProduct(product.id, payload);
    Alert.alert('Berhasil', 'Produk berhasil diupdate', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  } else {
    addProduct(payload);

    Alert.alert('Berhasil', 'Produk berhasil ditambahkan', [
      {
        text: 'OK',
        onPress: () => {
          setName('');
          setVarietas('');
          setSize('');
          setPrice('');
          setImage('');
          setDescription('');
          navigation.goBack();
        },
      },
    ]);
  }
};


  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.label}>Nama Produk</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Bibit Anggur ..." />

      <Text style={styles.label}>Varietas</Text>
      <TextInput value={varietas} onChangeText={setVarietas} style={styles.input} placeholder="Red Globe / Lokal Bali" />

      <Text style={styles.label}>Ukuran / Tipe</Text>
      <TextInput value={size} onChangeText={setSize} style={styles.input} placeholder="Pot Kecil / Pot Sedang / Pot Besar" />

      <Text style={styles.label}>Harga (Rp)</Text>
      <TextInput value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} placeholder="150000" />

      <Text style={styles.label}>URL Gambar (opsional)</Text>
      <TextInput value={image} onChangeText={setImage} style={styles.input} placeholder="https://..." />

      <Text style={styles.label}>Deskripsi (opsional)</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, {height:100}]}
        placeholder="Deskripsi singkat..."
        multiline
      />

      <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
        <Text style={{color:'#fff', fontWeight:'700'}}>{mode === 'edit' ? 'Update Produk' : 'Simpan Produk'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { marginTop: 12, marginBottom: 6, fontWeight:'600' },
  input: { borderWidth:1, borderColor:'#ddd', borderRadius:8, padding:10, backgroundColor:'#fff' },
  saveBtn: {
    marginTop: 18,
    backgroundColor: '#2d7a3e',
    paddingVertical: 12,
    alignItems:'center',
    borderRadius: 8
  }
});
