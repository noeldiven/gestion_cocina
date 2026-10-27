
import api from '../api/axios'

export interface AuthResponse {
  access_token: string
  token_type: string
  usuario_id: number
  rol_id: number
  nombre_completo: string
  email: string
}

export interface RegisterData {
  nombre_completo: string
  email: string
  password: string
  telefono: string
}

export async function login(email: string, password: string) {
  const response = await api.post<AuthResponse>('/auth/login', {
    email,
    password,
  })

  return response.data
}

export async function register(data: RegisterData) {
  const response = await api.post<AuthResponse>('/auth/register', data)
  return response.data
}
