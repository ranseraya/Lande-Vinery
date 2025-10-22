import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Lande Vinery</Text>
      <Text style={styles.text}>
        Lande Vinery — aplikasi katalog bibit anggur.
        Menampilkan daftar produk bibit anggur, detail, serta fungsi tambah/edit/hapus produk (CRUD) berbasis state.
      </Text>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.heading}>Data Mahasiswa</Text>
        <Text>Nama: Ayala Septama Rahanda</Text>
        <Text>NPM : 23081010071</Text>
        <Text>Kelas: Aplikasi Mobile (A081)</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.heading}>Tentang Venture</Text>
        <Text>
          Lande Vinery adalah venture agritech yang fokus pada penyediaan bibit anggur unggul, edukasi menanam, dan distribusi digital.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: '700' },
  text: { marginTop: 8, color: '#333' },
  heading: { fontWeight: '700', marginBottom: 6 }
});
