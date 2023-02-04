import { useEffect, useState } from 'react'

export default function useRightClick() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        console.log('userRightClick')
        function rightCb(event: MouseEvent) {
            event.preventDefault()
            setX(event.x)
            setY(event.y)
            setVisible(true)
        }
        function leftCb(event: MouseEvent) {
            if (event.button === 0) {
                setVisible(false)
            }
        }
        window.addEventListener('contextmenu', rightCb)
        window.addEventListener('mousedown', leftCb)
        return () => {
            window.removeEventListener('mousedown', leftCb)
            window.removeEventListener('contextmenu', rightCb)
        }
    }, [])
    return { x, y, visible }
}
