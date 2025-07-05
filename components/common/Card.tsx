import React from 'react'
import { CardProps } from '../../interfaces'

export default function Card({ title, description }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
