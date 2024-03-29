import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

function SocialNetwork() {
  return (
    <div className="flex ">
      <Link href={'https://www.facebook.com/profile.php?id=61552851274721'} className='mx-1'>
        <FacebookIcon className="text-[blue]" />
      </Link>
      <Link href={'https://www.instagram.com/ohyeahoo.entertainment'} className='mx-1'>
        <InstagramIcon className="text-[#9e95478f]" />
      </Link>
      <Link href={'https://www.instagram.com/ohyeahoo.entertainment'} className='mx-1'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill='white'
        >
          <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default SocialNetwork
