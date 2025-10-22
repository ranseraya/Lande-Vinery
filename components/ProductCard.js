import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export default function ProductCard({ item, onPressDetail, onPressEdit, onPressDelete }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => onPressDetail(item)}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Image source={item.image} style={styles.image} />
        <View style={{ flex: 1, paddingLeft: 12 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>
            {item.varietas} • {item.size}
          </Text>
          <Text style={styles.price}>
            Rp {Number(item.price).toLocaleString('id-ID')}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={() => onPressEdit(item)}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>

        <Pressable
          style={[styles.btn, { backgroundColor: '#ff4d4f' }]}
          onPress={() => onPressDelete(item.id)}
        >
          <Text style={[styles.btnText, { color: '#fff' }]}>Hapus</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: 80, height: 80, borderRadius: 8, backgroundColor: '#eee' },
  name: { fontSize: 16, fontWeight: '600' },
  meta: { fontSize: 12, color: '#666', marginTop: 4 },
  price: { marginTop: 6, fontWeight: '700' },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8 },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 8,
    backgroundColor: '#f0f0f0',
  },
  btnText: { fontSize: 14 },
});
