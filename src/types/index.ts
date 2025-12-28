// Tipos de usuário
export interface User {
  id: string
  login: string
  email: string
  createdAt: string
}

// Tipos de servidor
export type ServerType = 'PvE' | 'PvP' | 'Hard'
export type ServerStatus = 'online' | 'offline' | 'maintenance'

export interface Server {
  id: string
  name: string
  type: ServerType
  status: ServerStatus
  players: number
  maxPlayers: number
  description?: string
}

// Tipos de notícias/eventos
export interface News {
  id: string
  title: string
  content: string
  image?: string
  date: string
  category: 'news' | 'event' | 'update' | 'maintenance'
}

// Tipos de pacotes de doação
export interface DonationPackage {
  id: string
  name: string
  description: string
  price: number
  currency: string
  benefits: string[]
  popular?: boolean
}

// Tipos de formulário
export interface LoginFormData {
  loginOrEmail: string
  password: string
}

export interface RegisterFormData {
  login: string
  email: string
  password: string
  confirmPassword: string
}

// Tipos de componente
export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  disabled?: boolean
}

export interface CardProps {
  children: React.ReactNode
  onClick?: () => void
  hoverable?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}
