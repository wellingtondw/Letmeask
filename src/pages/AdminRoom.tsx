import { useParams } from 'react-router'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../contexts/AuthContext'
import { useRoom } from '../hooks/useRoom'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const { id: roomId } = useParams<RoomParams>()
  const { user } = useAuth()
  const { title, questions } = useRoom(roomId)
  

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask"/>
          <div>
            <RoomCode code={roomId}/>
            <Button>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta(s)</span>
          )}
        </div>       
        
        <div className="questions-list">
          {questions.map(question => (
            <Question key={question.id} content={question.content} author={question.author}>
              
            </Question>
          ))}
        </div>
      </main>
    </div>
  )
}