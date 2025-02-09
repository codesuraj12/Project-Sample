


const Card = ({ Icon, text, desc }) => {
  return (
    <div>
      <div className="card">

        < Icon className='icon' />
        <p>{text}</p>
        <div className="nop">{desc}</div>
      </div>
    </div>
  )
}

export default Card