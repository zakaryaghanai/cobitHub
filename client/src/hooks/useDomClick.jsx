import { useEffect, useState } from 'react'

const useDomClick = () => {
    const [clickedElement, setClickedElement] = useState()

    const onDomCLick = (e) => {
        setClickedElement(e.target)
    }

    useEffect(() => {
        window.addEventListener('click', onDomCLick)

        return () => {
            window.removeEventListener('click', onDomCLick)
        }
    }, [])

    return [clickedElement]
}

export default useDomClick