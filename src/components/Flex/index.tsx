type IPropsType = {
  width?: string
  height?: string
  margin?: string
  padding?: string
  className?: string
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?: 'space-between' | 'space-around' | 'center' | 'normal'
  alignItems?: 'center' | 'start' | 'end' | 'normal'
  children?: React.ReactNode,
}

export const Flex = ({
  width = 'auto',
  height = 'auto',
  margin = 'none',
  padding = 'none',
  flexWrap = 'nowrap',
  justifyContent = 'normal',
  alignItems = 'normal',
  className = '',
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
        flexWrap,
        display: 'flex',
      }}
      className={className}
    >
      {children}
    </div>
  )
}