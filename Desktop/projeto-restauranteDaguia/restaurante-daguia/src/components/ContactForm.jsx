import { useState } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const userId = process.env.NEXT_PUBLIC_USER_ID
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [workExperience, setWorkExperience] = useState('')
  const [academicExperience, setAcademicExperience] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // Configurar o serviço de email
    emailjs.init(userId)

    // Configurar o template do email
    const templateParams = {
      from_name: name,
      from_email: email,
      phoneNumber: phoneNumber,
      description: description,
      workExperience: workExperience,
      academicExperience: academicExperience
    }

    // Enviar o email
    if (
      name != '' &&
      email != '' &&
      phoneNumber != '' &&
      description != '' &&
      workExperience != '' &&
      academicExperience != ''
    ) {
      emailjs
        .send(serviceId, templateId, templateParams)
        .then(response => {
          console.log(
            'Email enviado com sucesso!',
            response.status,
            response.text
          )
          toast.success('Enviado com sucesso!')
        })
        .catch(error => {
          console.error('Ocorreu um erro ao enviar o email:', error)
        })
    } else {
      toast.error('Erro ao enviar , tente novamente!')
    }
    //reset
    setName('')
    setEmail('')
    setDescription('')
    setPhoneNumber('')
    setWorkExperience('')
    setAcademicExperience('')
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
            placeholder="Digite seu nome."
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
            placeholder="seuemail@exemplo.com"
            className="w-full border border-gray-300 rounded-xl p-2"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1">
            Telefone:
          </label>
          <input
            placeholder="(xx) 91234-5678"
            className="w-full border border-gray-300 rounded-xl p-2"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Descrição:
          </label>
          <textarea
            placeholder="Conte um pouco sobre você."
            className="w-full border border-gray-300 rounded-xl p-2"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="workExperience" className="block mb-1">
            Descreva sua experiência profissional:
          </label>
          <textarea
            placeholder="Comente sobre os locais que já trabalhou."
            className="w-full border border-gray-300 rounded-xl p-2"
            id="workExperience"
            value={workExperience}
            onChange={e => setWorkExperience(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="academicExperience" className="block mb-1">
            Descreva sua experiência acadêmica:
          </label>
          <textarea
            placeholder="Comente sobre seus estudos."
            className="w-full border border-gray-300 rounded-xl p-2"
            id="academicExperience"
            value={academicExperience}
            onChange={e => setAcademicExperience(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ease-in duration-300"
        >
          Enviar
        </button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default ContactForm
