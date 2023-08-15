import { gql } from "@apollo/client";

export const addSiswa = gql`
    mutation MyMutation($object: siswa_insert_input = {}) {
        insert_siswa_one(object: $object) {
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

  export const addPakar = gql`
    mutation MyMutation($object: pakar_insert_input = {}) {
        insert_pakar_one(object: $object) {
        id
        jenKel
        nama
        telp
        }
    }
  `