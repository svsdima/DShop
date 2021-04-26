import React from 'react'

const Message = ({ children }) => {
  return <div className="message">{children}</div>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
