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
    query MyQuery($namaSearch: String = "") {
        siswa(where: {_or: {nama: {_ilike: $namaSearch}}}) {
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