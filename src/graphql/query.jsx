import { gql } from "@apollo/client";

export const getSiswa = gql`
    query MyQuery {
        siswa {
        nama
        id
        jenKel
        jurusan
        kelas
        nis
        noHp
        tglLahir
        }
    }
`

export const searchSiswa = gql`
    query MyQuery($nis: String = "%%") {
        siswa(where: {_or: {nis: {_ilike: $nis}}}) {
        id
        jenKel
        jurusan
        kelas
        nis
        noHp
        tglLahir
        nama
        }
    }
`

export const getTes = gql`
    query MyQuery($nama: String = "%%") {
        tes(where: {nama: {_ilike: $nama}}) {
          siswa {
            jurusan
          }
          nis
          nama
          id
          tglTes
          tipeKecerdasan
        }
      }
`

export const getSoal = gql`
query MyQuery2 {
    soal {
      id
      soal
      tipeKecerdasan
    }
  }
`

export const getPakar = gql`
    query MyQuery3 ($nama: String = "%%") {
        pakar(where: {_or: {nama: {_ilike: $nama}}}) {
        telp
        nama
        jenKel
        id
        }
    }
`