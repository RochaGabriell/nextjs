'use client'
import React, { useEffect, useState } from 'react'
import Home from '../page'

import { Container } from './styles'

const Nomes = () => {
  const [dadosAPI, setDadosAPI] = useState({ localidade: '', nomes: [] })
  const [decadaSelecionada, setDecadaSelecionada] = useState('2010')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decadaSelecionada}`
        )
        if (!response.ok) {
          throw new Error('Erro ao buscar dados')
        }
        const data = await response.json()
        setDadosAPI({
          localidade: data[0].localidade,
          nomes: data[0].res
        })
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    fetchData()
  }, [decadaSelecionada])

  const handleDecadaChange = event => {
    setDecadaSelecionada(event.target.value)
  }

  return (
    <Home>
      <Container>
        <div>
          <label htmlFor="decada">Décadas disponíveis:</label>

          <select
            id="decada"
            value={decadaSelecionada}
            onChange={handleDecadaChange}
          >
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index} value={1930 + index * 10}>
                {1930 + index * 10}
              </option>
            ))}
          </select>
        </div>
        <div>Localidade: {dadosAPI.localidade}</div>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Nome</th>
              <th>Frequência</th>
            </tr>
          </thead>
          <tbody>
            {dadosAPI.nomes.map((item, index) => (
              <tr key={index}>
                <td>Ranking: {item.ranking}</td>
                <td>Nome: {item.nome}</td>
                <td>Frequência: {item.frequencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Home>
  )
}

export default Nomes
