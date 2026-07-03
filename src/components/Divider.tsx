import type { ReactNode, Ref } from 'react'

interface DividerProps {
  type: string
  content: ReactNode
  ref?: Ref<HTMLDivElement>
}

function Divider({ type, content, ref }: DividerProps) {
  return (
    <div className={'App-divider ' + type} ref={ref}>
      <p className="divider-content">{content}</p>
      <i className="arrow down bounce" />
    </div>
  )
}

export default Divider
