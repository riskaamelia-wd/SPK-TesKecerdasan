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

export const deleteSiswa = gql`
    mutation MyMutation($id: Int) {
        delete_siswa(where: {id: {_eq: $id}}) {
        returning {
            id
            nama
        }
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

export const deletePakar = gql`
    mutation MyMutation($id: Int) {
        delete_pakar(where: {id: {_eq: $id}}) {
        returning {
            id
            jenKel
            nama
            telp
        }
        }
    }
`

export const editPakar = gql`
    mutation MyMutation($id: Int = 1, $jenKel: String = "", $nama: String = "", $telp: String = "") {
        update_pakar_by_pk(pk_columns: {id: $id}, _set: {jenKel: $jenKel, nama: $nama, telp: $telp}) {
        jenKel
        id
        nama
        telp
        }
    }
`

export const addSoal = gql`
    mutation MyMutation($object: soal_insert_input = {}) {
        insert_soal_one(object: $object) {
        id
        soal
        tipeKecerdasan
        }
    }
`

export const deleteSoal = gql`
    mutation MyMutation($id: Int) {
        delete_soal(where: {id: {_eq: $id}}) {
          returning {
            id
            soal
            tipeKecerdasan
          }
        }
      }
      
`

export const addTes = gql`
   mutation MyMutation($object: tes_insert_input = {}) {
        insert_tes_one(object: $object) {
          id
          nama
          nis
          tglTes
          tipeKecerdasan
          prodi
        }
      }
`

export const deleteTes = gql`
    mutation MyMutation($id: Int = 0) {
        delete_tes(where: {id: {_eq: $id}}) {
        returning {
            id
            nama
            nis
            prodi
            tglTes
            tipeKecerdasan
        }
        }
    }
`