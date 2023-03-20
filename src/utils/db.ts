import { CollectionReference, collection, DocumentData } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import { Teams, Encounters, Admin } from '../interfaces/types'

export const firestore = db

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export const teamsCollection = createCollection<Teams>('teams')
export const encountersCollection = createCollection<Encounters>('encounters')
export const adminsCollection = createCollection<Admin>('admins');