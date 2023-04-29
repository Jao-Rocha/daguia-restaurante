import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const CurriculoForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [curriculum, setCurriculum] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    // Aqui você pode adicionar a lógica para enviar o currículo por e-mail
    const templateParams = {
      from_name: nome,
      from_email: email,
      message_html: 'Currículo enviado'
    }

    // Verifica se o currículo foi selecionado
    if (curriculum) {
      templateParams.curriculum = curriculum
    }

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.USER_ID
      )
      .then(response => {
        console.log(
          'Currículo enviado com sucesso!',
          response.status,
          response.text
        )
        alert('Currículo enviado com sucesso!')
      })
      .catch(error => {
        console.error('Erro ao enviar o currículo:', error)
        alert('Erro ao enviar o currículo!')
      })

    // Resetar os campos do formulário
    setName('')
    setEmail('')
    setDescription('')
    setCurriculum('')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Envie seu currículo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Descrição:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="curriculum" className="block mb-1">
            Curriculo:
          </label>
          <input
            type="file"
            id="curriculum"
            value={curriculum}
            onChange={e => setCurriculum(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default CurriculoForm
