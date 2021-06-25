import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code, ...rest }: RoomCodeProps) {
  function roomCodeToClipBoard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <button className='room-code' onClick={roomCodeToClipBoard} {...rest}>
      <div>
        <img src={copyImg} alt="Copy room code"/>
      </div>
      <span>Sala #{code}</span>
    </button>
  )
}