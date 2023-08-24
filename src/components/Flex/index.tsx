type IPropsType = {
  width?: string
  height?: string
  margin?: string
  padding?: string
  justifyContent?: 'space-between' | 'space-around' | 'center' | 'normal'
  alignItems?: 'center' | 'start' | 'end' | 'normal'
  children?: React.ReactNode,
}

export const Flex = ({
  width = 'auto',
  height = 'auto',
  margin = 'none',
  padding = 'none',
  justifyContent = 'normal',
  alignItems = 'normal',
  children,
}: IPropsType) => { 
  return (
    <div style={{
      width,
      height,
      margin,
      padding,
      justifyContent,
      alignItems,
      display: 'flex',
    }}
    >
      {children}
    </div>
  )
}