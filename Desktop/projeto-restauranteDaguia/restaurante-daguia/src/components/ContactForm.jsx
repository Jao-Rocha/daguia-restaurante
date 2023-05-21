import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    // Configurar o serviço de email
    emailjs.init('yt40IMG_nifxO4bv_')

    // Configurar o template do email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: description,
      file: file
    }

    // Enviar o email
    if (name != '' && email != '' && description != '') {
      emailjs
        .send('gmailDaguia', 'template_ev9te19', templateParams)
        .then(response => {
          console.log(
            'Email enviado com sucesso!',
            response.status,
            response.text
          )
          alert('Enviado com sucesso!')
        })
        .catch(error => {
          console.error('Ocorreu um erro ao enviar o email:', error)
        })
    } else {
      alert('Erro ao enviar , tente novamente!')
    }
    //reset
    setName('')
    setEmail('')
    setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Envie seu currículo.</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Nome:
          </label>
          <input
            className="w-full border border-gray-300 rounded-xl p-2"
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            className="w-full border border-gray-300 rounded-xl p-2"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Descrição:
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-2"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file" className="block mb-1">
            Arquivo:
          </label>
          <input
            type="file"
            id="file"
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ease-in duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm
