import './index.css'

type IPropsType = {
  width?: string
  height?: string
  margin?: string
  padding?: string
  children?: React.ReactNode,
}

export const Box = ({
  width = 'auto',
  height = 'auto',
  margin = '32px 0',
  padding = '32px',
  children,
}: IPropsType) => { 
  return (
    <div style={{
      width,
      height,
      margin,
      padding,
    }}
      className="box"
    >
      {children}
    </div>
  )
}