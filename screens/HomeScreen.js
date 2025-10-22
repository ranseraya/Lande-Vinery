import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ProductsContext } from '../App';
import ProductCard from '../components/ProductCard';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const { products, deleteProduct } = useContext(ProductsContext);

  const onPressDetail = (item) => {
    navigation.navigate('Detail', { product: item });
  };

  const onPressEdit = (item) => {
    navigation.navigate('Form', { mode: 'edit', product: item });
  };

  const onPressDelete = (id) => {
    console.log('Klik hapus:', id);
    Alert.alert(
      'Konfirmasi',
      'Apakah kamu yakin ingin menghapus produk ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            deleteProduct(id);
            console.log('Produk dihapus');
            setTimeout(() => {
              Alert.alert('Berhasil', 'Produk telah dihapus');
            }, 200);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPressDetail={onPressDetail}
            onPressEdit={onPressEdit}
            onPressDelete={onPressDelete}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text>Belum ada produk. Tekan tombol + untuk menambah.</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Form', { mode: 'add' })}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#2d7a3e',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  empty: { marginTop: 40, alignItems: 'center' },
});
