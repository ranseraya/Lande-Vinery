import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.meta}>{product.varietas} • {product.size}</Text>
      <Text style={styles.price}>Rp {Number(product.price).toLocaleString('id-ID')}</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.heading}>Deskripsi</Text>
        <Text style={styles.text}>{product.description}</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.heading}>Panduan Singkat</Text>
        <Text style={styles.text}>
          1. Tanam di pot dengan drainase baik. {'\n'}
          2. Siram rutin tetapi jangan tergenang. {'\n'}
          3. Beri pupuk organik tiap 2 minggu. {'\n'}
          4. Pangkas tumbuhan untuk merangsang buah.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 220, borderRadius: 8, backgroundColor:'#eee' },
  name: { fontSize: 22, fontWeight: '700', marginTop: 12 },
  meta: { color: '#666', marginTop: 4 },
  price: { marginTop: 6, fontWeight: '700' },
  heading: { fontWeight: '700', marginBottom: 6 },
  text: { lineHeight: 20, color: '#333' }
});
