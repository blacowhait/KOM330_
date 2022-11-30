import API from '@services/api'

export const getRecordData = async (): Promise<any> => await API.get('/api/home/record/show')
export const getPlusRecord = async (): Promise<any> => await API.get('/api/home/record/showplus')
export const getMinusRecord = async (): Promise<any> => await API.get('/api/home/record/showminus')