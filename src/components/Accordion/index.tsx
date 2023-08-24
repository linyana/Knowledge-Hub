import {
  useEffect,
  useRef,
  useState,
} from 'react'
import ExpandMoreIcon from '@/assets/svg/dropdown.svg'

import './index.css'

type IPropsType = {
  header: React.ReactNode
  children: React.ReactNode
  needBorder?: boolean
  isExpansionShow?: boolean
  needDefaultHeader?: boolean
};

export const Accordion = ({
  header,
  children,
  needBorder = true,
  isExpansionShow = false,
  needDefaultHeader = true,
}: IPropsType) => {
  const [isExpansion, setIsExpansion] = useState<boolean>(false)
  const [isAuto, setIsAuto] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const childRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isAuto) {
      setTimeout(() => {
        setIsAuto(false)
      }, 500)
    }
  }, [isAuto])

  const handleHeaderClick = (): void => {
    if (!isExpansion) {
      setIsExpansion(true)
      setIsAuto(true)
    } else {
      setIsAuto(true)
      setTimeout(() => {
        setIsExpansion(false)
      }, 100)
    }
  }

  useEffect(() => {
    if (isMounted) {
      handleHeaderClick()
    } else {
      setIsMounted(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpansionShow])

  return (
    <>
      {
        needDefaultHeader
          ? (
            <div className='accordion_header' onClick={handleHeaderClick}>
              <div onClick={(e) => {
                e.stopPropagation()
              }}
              >
                {header}
              </div>
              <div className='accordion_icon' style={{
                transform: `rotate(${isExpansion ? '-180deg' : '0'})`,
              }}
              >
                <img src={ExpandMoreIcon} alt="" />
              </div>
            </div>
          ) : <>{header}</>
      }
      <div 
        className='expansion'
        style={{
          height: `${isExpansion ? `${isAuto ? `${childRef?.current?.clientHeight}px` : 'auto'}` : '0'}`,
          borderTop: `${!isExpansion && !needBorder ? '1px solid rgb(217, 220, 233)' : 'none'}`,
        }}
      >
        <div ref={childRef} className='children'>
          {children}
        </div>
      </div>
    </>
  )
}
