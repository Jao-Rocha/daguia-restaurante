import Instagram from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import WhatsApp from '@mui/icons-material/WhatsApp'

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
          handleClick('https://api.whatsapp.com/send?phone=5519998930305')
        }}
      />
    </div>
  )
}

export default Icons
