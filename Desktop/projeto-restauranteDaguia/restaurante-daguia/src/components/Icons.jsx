import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'
import WhatsApp from '@material-ui/icons/WhatsApp'

const Icons = () => {
  const handleClick = url => {
    window.open(url, '_blank')
  }

  return (
    <div className="flex items-center justify-center gap-6 ">
      <Instagram
        fontSize="large"
        className="cursor-pointer"
        onClick={() =>
          handleClick('https://www.instagram.com/restaurantedaguia/')
        }
      />
      <Facebook
        fontSize="large"
        className=" cursor-pointer"
        onClick={() =>
          handleClick('https://www.facebook.com/restaurantedaguia/')
        }
      />
      <WhatsApp
        fontSize="large"
        className=" cursor-pointer"
        onClick={() => {
          // adicione aqui o código que será executado ao clicar no ícone do WhatsApp
        }}
      />
    </div>
  )
}

export default Icons
