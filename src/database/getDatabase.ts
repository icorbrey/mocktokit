import FDBFactory from 'fake-indexeddb'

export const getDatabase = () =>
	new FDBFactory() as typeof indexedDB
